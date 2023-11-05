import apis from "../../const/apis";
import axiosInstance from "../../utils/axiosInstance";
import { createAsyncThunk } from "@reduxjs/toolkit";



export const getStudent = createAsyncThunk("student/getStudent", async () => {
    return await axiosInstance.get(apis.student.getStudent).then((res) => {
      return res.data;
    });
  });

  export const getByIdStudent = createAsyncThunk("student/getByIdStudent", async (id) => {
    return await axiosInstance.get(apis.student.getByIdStudent(id)).then((res) => {
      return res.data;
    });

   
      
  });

  export const editStudent = createAsyncThunk("student/editStudent", async (data) => {
      return await axiosInstance.patch(apis.student.editStudent(data.id), data).then((res) => {
        return res.data;
      });
    }
  );

  export const addStudent = createAsyncThunk("student/addStudent",async (data) => {
      return await axiosInstance.post(apis.student.addStudent, data).then((res) => {
        return res.data;
      });
    }
  );

  export const deleteStudent = createAsyncThunk("student/deleteStudent", async (id) => {
    return await axiosInstance.delete(apis.student.getByIdStudent(id)).then((res) => {
      return res.data;
    });
  });