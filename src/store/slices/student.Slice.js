import { getStudent, getByIdStudent } from "../actions/students.action";

const { createSlice } = require("@reduxjs/toolkit");

const studentReducer= createSlice({
    name:"student",
    initialState:{
        data:[],
        studentById:{}
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getStudent.fulfilled, (state,action)=>{
            state.data =action.payload;
        });
        builder.addCase(getByIdStudent.fulfilled, (state,action)=>{
            state.studentById =action.payload;
        });
    },
});
export default studentReducer.reducer