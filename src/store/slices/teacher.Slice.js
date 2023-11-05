import { getTeacher, getByIdTeacher } from "../actions/teachers.action";

const { createSlice } = require("@reduxjs/toolkit");

const teacherReducer= createSlice({
    name:"teacher",
    initialState:{
        data:[],
        teacherById:{}
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getTeacher.fulfilled, (state,action)=>{
            state.data =action.payload;
        });
        builder.addCase(getByIdTeacher.fulfilled, (state,action)=>{
            state.teacherById =action.payload;
        });
    },
});
export default teacherReducer.reducer