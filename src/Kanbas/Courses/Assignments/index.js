import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import { IoEllipsisVerticalOutline } from "react-icons/io5";
import { BsGripVertical } from "react-icons/bs";
import { RiBook3Line } from "react-icons/ri";
import { IoEllipsisVerticalSharp } from "react-icons/io5";

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <div>
      <div class="row">
        <div class="col-9">
          <input class="form-control w-25" placeholder="Search for Assignments" />
        </div>
        <div class="col-3">
          <button type="button" class="btn btn-outline-secondary">+ Group</button>
          <button type="button" class="btn btn-danger">+ Assginment</button>
          <button type="dropdown" class="btn btn-light">
            <IoEllipsisVerticalSharp />
          </button>
        </div>
      </div>
      <hr />
      <h2>Assignments for course {courseId}</h2>
      <div className="list-group">
        {courseAssignments.map((assignment) => (
          <Link
            key={assignment._id}
            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
            className="list-group-item">
            <div className="row">
              <div className="col-1 text-center mt-2" style={{ fontSize: "25px" }}>
                <BsGripVertical /><RiBook3Line style={{ color: "green", marginRight: "5px" }} />
              </div>
              <div className="col-11">
                <strong className="fs-5 text">{assignment.title}</strong><br />
                {assignment.due}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Assignments;