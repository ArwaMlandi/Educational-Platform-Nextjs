import AddNewCourseForm from "../../components/Courses/AddNewCourseForm";
import DashboardLayout from '../../layouts/DashboardLayout';
import React from "react";

export default function index() {
  return (
    <DashboardLayout>
      <AddNewCourseForm />
    </DashboardLayout>
  );
}