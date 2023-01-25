
import { configureStore } from '@reduxjs/toolkit'
import  sampleSlice  from './slice'

export const store= configureStore({
    reducer:{
        sample: sampleSlice,
    }
});
