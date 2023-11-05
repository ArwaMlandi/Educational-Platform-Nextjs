import routes from "../../const/routes";
import {
  editCourse,
  getById,
} from "../../store/actions/courses.action";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";

export default function EditCourseForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
 
  const [image, setImage] = useState("");
  const dispatch = useDispatch("");
  const router = useRouter("");
  const courseId= useSelector((state)=> state.course.coursById)

  const handleUploadImage = (file) => {
    const url = URL.createObjectURL(file);
    setImage(url);
  };

  useEffect(() => {
    if (router?.query?.id && !courseId?.id) {
      dispatch(getById(router?.query?.id)).then((res) => {
        setTitle(res.payload?.title);
        setDescription(res.payload?.description);
        
      });
    } else {
      setTitle(courseId?.title);
      setDescription(courseId?.description);
     
    }
  }, [router]);

  const handleSubmit = () => {
    dispatch(
        editCourse({
        id: router?.query?.id,
        title,
        description,
        image,
      })
    ).then((res) => {
        router.push(`${routes.get}/${router.query.id}`);
    });
  };
  return (
    <div className="m-5">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>description</Form.Label>
        <Form.Control
          value={description}
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