import { useRouter } from 'next/router';
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from 'react'
import './Teacher.css'
import { deleteTeacher, getTeacher } from '../../store/actions/teachers.action';
import { MdOutlineClose } from 'react-icons/md';
import { Button } from 'react-bootstrap';
import routes from '../../const/routes';
function Teacher() {
    const teacher = useSelector((state) => state.teacher.data);
  const router = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTeacher());
  }, []);
  return (
    <div>
         <div className="teachers-container">
        {teacher.map((teacher) => (
          <div key={teacher.id} className="teacher-card">
                  <div className="close-icon">
              <MdOutlineClose
                size={40}
                onClick={() =>
                  dispatch(deleteTeacher(teacher.id))
                }
                className="close-icon"
              />
              </div>
            <div className="image-container">
              <img src={teacher.image} alt="Teacher" />
            </div>
            <div className="details-container">
              <h2>{teacher.Name}</h2>
              <p>Specialization: <span className='details-container-span'>{teacher.specialization}</span></p>
             
              <p>phone: <span className='details-container-span'> {teacher.phone}</span></p>
              <p>Email: <span className='details-container-span'> {teacher.email}</span></p>
              <div class="d-grid gap-2">
              <Button
                variant="primary"
                onClick={() => {
                  router.push(routes.editTeacher(teacher.id));
                }}
              >
                Edit
              </Button>
              </div>
            </div>
           
          </div>
        ))}
      </div>
    </div>
  )
}

export default Teacher