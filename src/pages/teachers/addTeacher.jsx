
import DashboardLayout from '../../layouts/DashboardLayout';
import React from "react";
import AddNewTeacher from '../../components/Teachers/AddNewTeacher';

export default function index() {
  return (
    <DashboardLayout>
      <AddNewTeacher />
    </DashboardLayout>
  );
}