import routes from '../../const/routes';
import { deleteStudent, getStudent } from '../../store/actions/students.action'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { MdOutlineClose } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import styleStudent from './styleStudent.module.css'
function Student() {
    const student = useSelector((state) => state.student.data);
    const router = useRouter();
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getStudent());
    }, []);
    const [selectedStudent, setSelectedStudent] = useState(null);

  const handleStudentClick = (student) => {
    setSelectedStudent(student);
  };

  const handleCloseModal = () => {
    setSelectedStudent(null);
  };
    return (
       <div>
               <div className={styleStudent.tableContainer}>
            <h1>Student Information</h1>
            <div className={styleStudent.cardsContainer}>
              {student.map((student) => (
                <div
                  key={student.id}
                  className={styleStudent.card}
                 
                >
                      <div className={styleStudent.closeIcon}>
              <MdOutlineClose
                size={40}
                onClick={() =>
                  dispatch(deleteStudent(student.id))
                }
                className={styleStudent.closeicon}
              />
              </div>
                
                  <img src={student.image} alt="Student" className={styleStudent.cardImage}  onClick={() => handleStudentClick(student)} />
                 
                  <h3 className={styleStudent.cardName}>
                    {student.FirstName} {student.LastName}
                  </h3>
                </div>
              ))}
            </div>
          </div>
          {selectedStudent && (
            <div className={styleStudent.modal}>
              <div className={styleStudent.modalContent}>
                <span className={styleStudent.close} onClick={handleCloseModal}>
                  &times;
                </span>
                <div className={styleStudent.modalDetails}>
                  <h2>Student Details</h2>
    
                  <div>
                    <strong></strong>{" "}
                    <img
                      src={selectedStudent.image}
                      alt="Student"
                      width="200"
                      height="200"
                    />
                  </div>
                  
                  <div>
                    <strong>First Name:</strong> {selectedStudent.FirstName}
                  </div>
                  <div>
                    <strong>Last Name:</strong> {selectedStudent.LastName}
                  </div>
                  <div>
                    <strong>Age:</strong> {selectedStudent.age}
                  </div>
                  <div>
                    <strong>Phone:</strong> {selectedStudent.phone}
                  </div>
                  <div>
                    <strong>Email:</strong> {selectedStudent.email}
                  </div>
                  <Button
                variant="primary"
                onClick={() => {
                  router.push(routes.editStudent(student.id));
                }}
              >
                Edit
              </Button>
                </div>
              </div>
            </div>
          )}
       </div>
      )
}

export default Student