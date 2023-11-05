import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { getById } from '../../store/actions/courses.action';
import styleCourse from "./styleCourse.module.css";
import { MdArrowRight, MdMenuBook, MdStar } from "react-icons/md";
import { Button, Card, Col } from "react-bootstrap";
import Link from 'next/link';
import routes from '../../const/routes';
function CourseById() {
    const router = useRouter()
    const dispatch=useDispatch();
    const courseId= useSelector((state)=> state.course.coursById)
    console.log(courseId)
    useEffect(()=>{
        if(router?.query?.id){
            dispatch(getById(router?.query?.id))
        }

    },[router])
  return (
    <div>
          <div className={styleCourse.courseid}>
    <div className={styleCourse.courseCardContent}>
                    <div className={styleCourse.courseImageContainerid}>
                      <img src={courseId.image} alt={courseId.title} />
                    </div>
                    <div className={styleCourse.coursrRate}>
                      <p className={styleCourse.coursrCountP}>
                        {" "}
                        {<MdMenuBook />} {courseId.count}
                      </p>
                      <p className={styleCourse.coursrRateP}>
                        {<MdStar />} {courseId.rate}
                      </p>
                    </div>
                    <h3 className={styleCourse.courseTitleid}>{courseId.title}</h3>

                    <span className={styleCourse.coursePid}>
                      {courseId.description} <br /> {courseId.description}
                    </span>

                    <div>
                      <hr />
                    </div>
                    <div className={styleCourse.coursrRate}>
                      <p className={styleCourse.coursrPric}> ${courseId.price}</p>
                      <p className={styleCourse.coursrLink}>{courseId.link}</p>
                    </div>
                    <div class="d-grid gap-2">
              <Button
                variant="primary"
                onClick={() => {
                  router.push(routes.edit(courseId.id));
                }}
              >
                Edit
              </Button>
            </div>
                    <Link href="/courses">
        <p className={styleCourse.coursrLinkSee}>Go To Courses <span ><MdArrowRight/></span></p>
        </Link>
                  </div>
  </div>
  </div>
  )
}

export default CourseById