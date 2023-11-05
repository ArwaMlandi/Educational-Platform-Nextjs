import AddNewStudent from "../../components/Students/AddNewStudent";
import DashboardLayout from '../../layouts/DashboardLayout';
import React from "react";

export default function index() {
  return (
    <DashboardLayout>
      <AddNewStudent/>
    </DashboardLayout>
  );
}