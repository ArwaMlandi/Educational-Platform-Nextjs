
import EditTeacher from "../../../components/Teachers/EditTeacher";
import React from "react";
import DashboardLayout from "../../../layouts/DashboardLayout";

export default function index() {
  return (
    <DashboardLayout>
      <EditTeacher />
    </DashboardLayout>
  );
}