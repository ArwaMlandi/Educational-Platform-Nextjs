import routes from "../../const/routes";
import { editStudent, getByIdStudent } from "../../store/actions/students.action";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";

export default function EditStudent() {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const dispatch = useDispatch("");
  const router = useRouter("");
  const student= useSelector((state)=> state.student.data)
console.log(student)
  const handleUploadImage = (file) => {
    const url = URL.createObjectURL(file);
    setImage(url);
  };

  useEffect(() => {
    if (router?.query?.id && !student?.id) {
      dispatch(getByIdStudent(router?.query?.id)).then((res) => {
        setFirstName(res.payload?.FirstName);
        setLastName(res.payload?.LastName);
        
      });
    } else {
      setFirstName(student?.FirstName);
      setLastName(student?.LastName);
     
    }
  }, [router]);

  const handleSubmit = () => {
    dispatch(
        editStudent({
        id: router?.query?.id,
        FirstName,
        LastName,
        age,
        phone,
        email,
        image,
      })
    ).then((res) => {
        router.push(`${routes.getStudent}`);
    });
  };
  return (
    <div className="m-5">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          value={FirstName}
          onChange={(e) => setFirstName(e.target.value)}
          type="text"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          value={LastName}
          onChange={(e) => setLastName(e.target.value)}
          type="text"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Age</Form.Label>
        <Form.Control
          value={age}
          onChange={(e) => setAge(e.target.value)}
          type="number"
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