
import DashboardLayout from '../../layouts/DashboardLayout';
import { useRouter } from 'next/router'
import React from 'react'
import { Button } from 'react-bootstrap'
import NewsAbout from '../../components/News/NewsAbout';
function index() {
   
  return (
    <DashboardLayout>
      
       
     
          <NewsAbout/>
    </DashboardLayout>
  )
}

export default index