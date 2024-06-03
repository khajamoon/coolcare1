import { configureStore } from '@reduxjs/toolkit'
import usersReducers  from './features/jobs/usersSlice';
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
export const store = configureStore({
    reducer: {
        usersReducers,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  });
 
  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;
  export const useAppDispatch = () => useDispatch<AppDispatch>();
  export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;





