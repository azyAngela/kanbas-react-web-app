import KanbasNavigation from "./KanbasNavigation";
import Account from "./Account";
import Courses from "./Courses";
import Dashboard from "./Dashboard";
import { Route, Routes, Navigate } from "react-router-dom";
import db from "./Database";
import { useState } from "react";
import store from "./store";
import { Provider } from "react-redux";
function Kanbas() {
  const [courses, setCourses] = useState(db.courses);
  const [newCourse, setNewCourse] = useState({
    name: "New Course",
    number: "RS5610",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
  });

  const addCourse = (newC) => {
    setCourses([
      ...courses,
      { ...newCourse, _id: new Date().getTime().toString() },
    ]);
    setNewCourse("");
  };


  const deleteCourse = (id) => {
    const newCourses = courses.filter((course) => course._id !== id);
    setCourses(newCourses);
  };

  const updateCourse = (courseToUpdate) => {
    const newCourses = courses.map((course) => (course._id === courseToUpdate._id ? courseToUpdate : course));
    setCourses(newCourses);
    setNewCourse("");
  };

  return (
    <Provider store={store}>
    <div className="d-flex">
      <div style={{ background: "black" }} >
        <KanbasNavigation />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="/Account" element={<Account />} />
          <Route path="/Courses/:courseId/*" element={<Courses courses={courses} />} />
          <Route path="/Dashboard" element={<Dashboard
            courses={courses}
            newCourse={newCourse}
            setNewCourse={setNewCourse}
            addCourse={addCourse}
            deleteCourse={deleteCourse}
            updateCourse={updateCourse} />} />
        </Routes>
      </div>
    </div>
    </Provider>
  );
}
export default Kanbas;