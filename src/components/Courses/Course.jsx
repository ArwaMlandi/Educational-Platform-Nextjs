import routes from "../../const/routes";
import DashboardLayout from '../../layouts/DashboardLayout';
import { deleteCourse, get } from "../../store/actions/courses.action";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import React from "react";
import { useEffect } from "react";
import { ToastContainer } from "react-bootstrap";
import { MdMenuBook, MdOutlineClose, MdStar } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import styleCourse from "./styleCourse.module.css";
function Course() {
  const course = useSelector((state) => state.course.data);
  console.log(course)
  const router = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get());
  }, []);
  return (
    <div className={styleCourse.courseContainer}>
      <div className={styleCourse.coursePage}>
        <div>
          <div className={styleCourse.course}>
            <AnimatePresence>
              {course.map((item) => (
                <motion.div
                  className={styleCourse.courseCard}
                  key={item.id}
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 9 }}
                  exit={{ opacity: 0, y: -50 }}
                >
                  <div className={styleCourse.courseCardContent}>
                    <div className={styleCourse.courseImageContainer}>
                    <div className="close-icon">
              <MdOutlineClose
                size={40}
                onClick={() =>
                  dispatch(deleteCourse(item.id))
                }
                className={styleCourse.closeIcon}
              />
              </div>
                      <img src={item.image} alt={item.title} />
                    </div>
                    <div className={styleCourse.coursrRate}>
                      <p className={styleCourse.coursrCountP}>
                        {" "}
                        {<MdMenuBook />} {item.count}
                      </p>
                      <p className={styleCourse.coursrRateP}>
                        {<MdStar />} {item.rate}
                      </p>
                    </div>
                    <h3 className={styleCourse.courseTitle}>{item.title}</h3>

                    <span className={styleCourse.courseP}>
                      {item.description} <br /> {item.description}
                    </span>

                    <div>
                      <hr />
                    </div>
                    <div className={styleCourse.coursrRate}>
                      <p className={styleCourse.coursrPric}> ${item.price}</p>
                      <p className={styleCourse.coursrLink}>{item.link}</p>
                    </div>
                    <div className={styleCourse.courseButton}>
                     {/* <button
                        onClick={()=>dispatch(addToFavorite({
                    id:item.id,
                    title:item.title,
                    image:item.image,
                    price:item.price,
                    description:item.description,
                    quantity:1,
                  }))& toast.success( `${item.title} is added`)} className={
                          styleCourse.courseAdd
                        }
                      >
                        Add To Favourite
                      </button> */}

                      <button
                        onClick={() => {
                          router.push(routes.getById(item.id));
                        }}
                        className={styleCourse.courseAdd}
                      >
                        Show This Course
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          <ToastContainer
            position="top-left"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </div>
      </div>
    </div>
  );
}

export default Course;
