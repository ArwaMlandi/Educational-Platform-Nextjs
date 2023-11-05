import { get, getById } from "../actions/courses.action";

const { createSlice } = require("@reduxjs/toolkit");

const courseReducer= createSlice({
    name:"course",
    initialState:{
        data:[],
        coursById:{}
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(get.fulfilled, (state,action)=>{
            state.data =action.payload;
        });
        builder.addCase(getById.fulfilled, (state,action)=>{
            state.coursById =action.payload;
        });
    },
});
export default courseReducer.reducer