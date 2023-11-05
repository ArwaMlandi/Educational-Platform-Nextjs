import Teacher from '../../components/Teachers/Teacher'
import DashboardLayout from '../../layouts/DashboardLayout';
import React from 'react'
import { Button } from 'react-bootstrap'
import { useRouter } from "next/router";
import routes from "../../const/routes";
import styleTeacher from './styleTeacher.module.css'
function index() {
    const router = useRouter();
  return (
    <DashboardLayout>
         <div className="d-grid">
        <Button
          variant="primary"
          className="mt-5 btn"
          onClick={() => router.push(routes.addTeacher)}
        >
          Add New Teachers
        </Button>
      </div>
        <Teacher/>
    </DashboardLayout>
  )
}

export default index