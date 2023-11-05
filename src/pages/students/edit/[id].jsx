import EditStudent from "../../../components/Students/EditStudent";
import React from "react";
import DashboardLayout from "../../../layouts/DashboardLayout";

export default function index() {
  return (
    <DashboardLayout>
      <EditStudent />
    </DashboardLayout>
  );
}