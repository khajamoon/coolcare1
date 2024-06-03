import { useEffect, useMemo, useRef, useState } from 'react';
import {
    MaterialReactTable,
    useMaterialReactTable,
    type MRT_ColumnDef,
    type MRT_SortingState,
    type MRT_RowVirtualizer,
} from 'material-react-table';
import { IconButton, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { EditUsersModal } from './Model';


const Example = (props) => {
    const columns = useMemo<MRT_ColumnDef<any>[]>(
        () => [
            {
                accessorKey: 'email',
                header: 'Email',

            },
            {
                accessorKey: 'mobileno',
                header: 'Mobile No',

            },
            {
                accessorKey: 'address',
                header: 'Adress',

            },
            {
                accessorKey: 'description',
                header: 'Discription',

            },
            {
                accessorKey: 'trackerId',
                header: 'Tracker ID ',

            },
            {
                accessorKey: 'response',
                header: 'Respond',
                enableEditing: true,
                muiEditTextFieldProps: {
                    type: 'email',
                    required: true,
                }
            }],
            [],
      );
    //optionally access the underlying virtualizer instance
    const rowVirtualizerInstanceRef = useRef<MRT_RowVirtualizer>(null);

    const [data, setData] = useState<any[]>();
    const [isLoading, setIsLoading] = useState(true);
    const [sorting, setSorting] = useState<MRT_SortingState>([]);
    const [isOpen, setisOpen] = useState(false)
    
    


    const handleOpenEditUserModal =(row) =>
        {
     
            setisOpen(true)
            setData(row)



        }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        //scroll to the top of the table when the sorting changes
        try {
            rowVirtualizerInstanceRef.current?.scrollToIndex?.(0);
        } catch (error) {
            console.error(error);
        }
    }, [sorting]);

    const table = useMaterialReactTable({
        columns,
        data: props?.columndata ?? {}, //10,000 rows
        defaultDisplayColumn: { enableResizing: true },
        enableBottomToolbar: false,
        enableColumnVirtualization: true,
        enableGlobalFilterModes: true,
        enablePagination: false,
        enableColumnPinning: true,
        enableRowNumbers: true,
        enableRowVirtualization: true,
        muiTableContainerProps: { sx: { maxHeight: '600px' } },
        onSortingChange: setSorting,
        state: { isLoading, sorting },
        rowVirtualizerInstanceRef, //optional
        rowVirtualizerOptions: { overscan: 5 }, //optionally customize the row virtualizer
        columnVirtualizerOptions: { overscan: 2 },
        enableRowActions: true,
        renderTopToolbar: <Typography style={{textAlign:"center" ,fontSize:"1.2rem"}}>Users Table </Typography>,
    renderRowActions: ({ row }) => (
      <IconButton
        onClick={() => handleOpenEditUserModal(row!.original )}
      >
        <EditIcon/>
      </IconButton>
    ) //optionally customize the column virtualizer
    });

    return (

        <><MaterialReactTable table={table} />

        <EditUsersModal isOpen={isOpen} setisOpen={setisOpen} data ={data}></EditUsersModal>
        
        </>

    );
};

export default Example;
