import {configureStore} from '@reduxjs/toolkit';
import cartData from '../features/cartSlice';


export const store = configureStore({ 
    reducer: {
        app: cartData,
    }
 })