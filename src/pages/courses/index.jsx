import Course from '../../components/Courses/Course'
import DashboardLayout from '../../layouts/DashboardLayout';
import React from 'react'
import { Button } from "react-bootstrap";
import { useRouter } from "next/router";
import routes from "../../const/routes";
function index() {
  const router = useRouter();
  return (
    <DashboardLayout>
        <div className="d-grid">
        <Button
          variant="primary"
          className="mt-5 btn"
          onClick={() => router.push(routes.add)}
        >
          Add new cousrse
        </Button>
      </div>
      
     <Course/>
    </DashboardLayout>
  )
}

export default index