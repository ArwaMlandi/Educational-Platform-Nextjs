import apis from "../../const/apis";
import axiosInstance from "../../utils/axiosInstance";
import { createAsyncThunk } from "@reduxjs/toolkit";



export const getTeacher = createAsyncThunk("teachers/getTeacher", async () => {
    return await axiosInstance.get(apis.teacher.getTeacher).then((res) => {
      return res.data;
    });
  });

  export const getByIdTeacher = createAsyncThunk("teachers/getByIdTeacher", async (id) => {
    return await axiosInstance.get(apis.teacher.getByIdTeacher(id)).then((res) => {
      return res.data;
    });

   
      
  });

  export const editTeacher = createAsyncThunk("teachers/editTeacher", async (data) => {
      return await axiosInstance.patch(apis.teacher.editTeacher(data.id), data).then((res) => {
        return res.data;
      });
    }
  );

  export const addTeacher = createAsyncThunk("teachers/addTeacher",async (data) => {
      console.log(data);
      return await axiosInstance.post(apis.teacher.addTeacher, data).then((res) => {
        return res.data;
      });
    }
  );

  export const deleteTeacher = createAsyncThunk("teachers/deleteTeacher", async (id) => {
    return await axiosInstance.delete(apis.teacher.getByIdTeacher(id)).then((res) => {
      return res.data;
    });
  });

