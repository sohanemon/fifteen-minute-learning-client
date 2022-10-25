import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CourseDetails = () => {
  const [course, setCourse] = useState({});
  const params = useParams();
  useEffect(() => {
    fetch(`${process.env.REACT_APP_host}/courses/${params?.id}`)
      .then((res) => res.json())
      .then((data) => setCourse(data));

    return () => {};
  }, [params]);

  return (
    <>
      {course.id} {course.description}
    </>
  );
};

export default CourseDetails;
