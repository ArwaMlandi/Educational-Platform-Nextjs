import routes from "../../const/routes";
import { addStudent } from "../../store/actions/students.action";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";

export default function AddNewCourseForm() {
    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const dispatch = useDispatch("");
  const router = useRouter("");

  const handleUploadImage = (file) => {
    const url = URL.createObjectURL(file);
    setImage(url);
  };

  const handleSubmit = () => {
    dispatch(
      addStudent({
        FirstName,
        LastName,
        age,
        phone: phone,
        email:email,
        image,
      })
    ).then(res => {
        if(res.payload.id){
            router.push(routes.getStudent)
        }
    });
  };
  return (
    <div className="m-5">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> First Name</Form.Label>
        <Form.Control onChange={(e) => setFirstName(e.target.value)} type="text" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> Last Name</Form.Label>
        <Form.Control onChange={(e) => setLastName(e.target.value)} type="text" />
      </Form.Group>
     
        
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Image</Form.Label>
        <Form.Control
          onChange={(e) => handleUploadImage(e.target.files[0])}
          type="file"
        />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Age</Form.Label>
        <Form.Control onChange={(e) => setAge(e.target.value)} type="number" />
      </Form.Group>
    
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Phone</Form.Label>
        <Form.Control onChange={(e) => setPhone(e.target.value)} type="number" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" />
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