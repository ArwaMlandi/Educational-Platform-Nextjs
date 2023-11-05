import Student from '../../components/Students/Student'
import DashboardLayout from '../../layouts/DashboardLayout';
import { useRouter } from 'next/router'
import React from 'react'
import { Button } from 'react-bootstrap'
import routes from "../../const/routes";
import styleStudent from './styleStudent.module.css'
function index() {
    const router = useRouter();
  return (
    <DashboardLayout>
        <div className="d-grid">
        <Button
          variant="primary"
          className="mt-5 btn"
          onClick={() => router.push(routes.addStudent)}
        >
          Add New Student
        </Button>
      </div>
          <Student/>
    </DashboardLayout>
  )
}

export default index