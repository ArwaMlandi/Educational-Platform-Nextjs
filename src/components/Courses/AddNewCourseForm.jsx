import routes from "../../const/routes";
import { addNewCourse } from "../../store/actions/courses.action";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";

export default function AddNewCourseForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [rate, setRate] = useState("");
  const [count, setCount] = useState("");
  const [image, setImage] = useState("");
  const dispatch = useDispatch("");
  const router = useRouter("");

  const handleUploadImage = (file) => {
    const url = URL.createObjectURL(file);
    setImage(url);
  };

  const handleSubmit = () => {
    dispatch(
      addNewCourse({
        title,
        description,
        price: price,
        rate: rate,
        count:count,
        image,
      })
    ).then(res => {
        if(res.payload.id){
            router.push(routes.get)
        }
    });
  };
  return (
    <div className="m-5">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control onChange={(e) => setTitle(e.target.value)} type="text" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>description</Form.Label>
        <Form.Control
          onChange={(e) => setDescription(e.target.value)}
          type="text"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Image</Form.Label>
        <Form.Control
          onChange={(e) => handleUploadImage(e.target.files[0])}
          type="file"
        />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Price</Form.Label>
        <Form.Control
          onChange={(e) => setPrice(e.target.value)}
          type="number"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Rate</Form.Label>
        <Form.Control onChange={(e) => setRate(e.target.value)} type="number" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Count Leasons</Form.Label>
        <Form.Control onChange={(e) => setCount(e.target.value)} type="number" />
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