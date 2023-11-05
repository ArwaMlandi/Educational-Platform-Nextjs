import apis from "../../const/apis";
import axiosInstance from "../../utils/axiosInstance";
import { createAsyncThunk } from "@reduxjs/toolkit";



export const get = createAsyncThunk("course/get", async () => {
    return await axiosInstance.get(apis.course.get).then((res) => {
      return res.data;
    });
  });

  export const getById = createAsyncThunk("course/getById", async (id) => {
    return await axiosInstance.get(apis.course.getById(id)).then((res) => {
      return res.data;
    });

   
      
  });

  export const editCourse = createAsyncThunk("course/edit", async (data) => {
      return await axiosInstance.patch(apis.course.edit(data.id), data).then((res) => {
        return res.data;
      });
    }
  );

  export const addNewCourse = createAsyncThunk("course/add",async (data) => {
      console.log(data);
      return await axiosInstance.post(apis.course.add, data).then((res) => {
        return res.data;
      });
    }
  );

  export const deleteCourse = createAsyncThunk("course/delete", async (id) => {
    return await axiosInstance.delete(apis.course.getById(id)).then((res) => {
      return res.data;
    });
  });