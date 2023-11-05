import routes from "../../const/routes";
import {
  editCourse,
  getById,
} from "../../store/actions/courses.action";
import { editTeacher, getByIdTeacher } from "../../store/actions/teachers.action";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";

export default function EditCourseForm() {
    const [Name, setName] = useState("");
    const [Specialization, setSpecialization] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [image, setImage] = useState("");
  
  const dispatch = useDispatch("");
  const router = useRouter("");
  const teacher = useSelector((state) => state.teacher.data);

  const handleUploadImage = (file) => {
    const url = URL.createObjectURL(file);
    setImage(url);
  };

  useEffect(() => {
    if (router?.query?.id && !teacher?.id) {
      dispatch(getByIdTeacher(router?.query?.id)).then((res) => {
        setName(res.payload?.Name);
        setName(res.payload?.Specialization);
        setName(res.payload?.phone);
        setName(res.payload?.email);
       
        
      });
    } else {
        setName(teacher?.Name);
        setName(teacher?.Specialization);
        setName(teacher?.phone);
        setName(teacher?.email);
      }
  }, [router]);

  const handleSubmit = () => {
    dispatch(
        editTeacher({
        id: router?.query?.id,
        Name,
        Specialization,
        phone,
        email,
        image,
      })
    ).then((res) => {
        router.push(`${routes.getTeacher}`);
    });
  };
  return (
    <div className="m-5">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control
          value={Name}
          onChange={(e) => setName(e.target.value)}
          type="text"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Specialization</Form.Label>
        <Form.Control
          value={Specialization}
          onChange={(e) => setSpecialization(e.target.value)}
          type="text"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Phone</Form.Label>
        <Form.Control
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          type="number"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />
      </Form.Group>

      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Image</Form.Label>
        <Form.Control
          onChange={(e) => handleUploadImage(e.target.files[0])}
          type="file"
        />
      </Form.Group>
    
      
        
      <div className="d-grid">
        <Button
          variant="primary"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          Submit
        </Button>
      </div>
    </div>
  );
}