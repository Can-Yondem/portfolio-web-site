import { configureStore } from "@reduxjs/toolkit";
import peopleSlice from "./people/peopleSlice";

export const store = configureStore({
    reducer: {
        fetchData: peopleSlice,
    }
});