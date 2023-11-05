/*import AddNewCourseForm from "@/components/Courses/AddNewCourseForm";*/
import EditCourseForm from "../../../components/Courses/EditCourseForm";
import React from "react";
import DashboardLayout from "../../../layouts/DashboardLayout";

export default function index() {
  return (
    <DashboardLayout>
      <EditCourseForm />
    </DashboardLayout>
  );
}