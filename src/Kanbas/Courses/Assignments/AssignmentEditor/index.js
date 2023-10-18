import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import { IoEllipsisVerticalSharp } from "react-icons/io5";
import { IoCheckmarkCircleSharp } from "react-icons/io5";

function AssignmentEditor() {
    const { assignmentId } = useParams();
    const assignment = db.assignments.find(
        (assignment) => assignment._id === assignmentId);


    const { courseId } = useParams();
    const navigate = useNavigate();
    const handleSave = () => {
        console.log("Actually saving assignment TBD in later assignments");
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };
    return (
        <div className="container">
            <div className="row">
                <div className="text-end">
                    <IoCheckmarkCircleSharp style={{ color: "green" }} />
                    <text className="ms-2" style={{ color: "green" }}>Published </text>
                    <button type="dropdown" class="btn btn-light">
                        <IoEllipsisVerticalSharp />
                    </button>
                </div>
            </div>
            <hr />
            <text>Assignment Name</text>
            <input value={assignment.title}
                className="form-control mb-3" />
            <textarea class="form-control"
                rows="3">This assignment describes how to install the development environment for creating and working with Web applications we will be developing this semester. We will add new content every week, pushing the code to a GitHub source repository, and then deploying the content to a remote server hosted on Netlify.
            </textarea>
            <div className="row">
                <div className="col-4 text-end mt-3">
                    <text>Points</text>
                </div>
                <div className="col-8 w-50">
                    <input value={assignment.points}
                        className="form-control mt-3" placeholder={assignment.title} />
                </div>
            </div>
            <div className="row">
                <div className="col-4 text-end mt-3">
                    <text>Assignment Group</text>
                </div>
                <div className="col-8 mt-3 w-50">
                    <select class="form-control">
                        <option>ASSIGNMENTS</option>
                        <option>ASSIGNMENT2</option>
                    </select>
                </div>
            </div>
            <div className="row">
                <div className="col-4 text-end mt-3">
                    <text>Display Grade as</text>
                </div>
                <div className="col-8 mt-3 w-50">
                    <select class="form-control">
                        <option>Percentage</option>
                        <option>Grade Point</option>
                    </select>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                        <label class="form-check-label" for="flexCheckDefault">
                            Do not count this assignment towards the final grade
                        </label>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-4 text-end mt-3">
                    <text>Submission Type</text>
                </div>
                <div className="col-8 mt-3 w-50">
                    <div class="card">
                        <div class="card-body">
                            <select class="form-control">
                                <option>Online</option>
                                <option>In-person</option>
                            </select>
                            <h6 class="card-title mt-3">Online Entry Options</h6>
                            <input type="checkbox" value="COMEDY" name="check-genre" id="chkbox-comedy" checked />
                            <label for="chkbox-comedy" class="mb-3 ms-3">Text Entry</label> <br />
                            <input type="checkbox" value="DRAMA" name="check-genre" id="chkbox-drama" />
                            <label for="chkbox-drama" class="mb-3 ms-3">Website URL</label> <br />
                            <input type="checkbox" value="SCIFI" name="check-genre" id="chkbox-scifi" checked />
                            <label for="chkbox-scifi" class="mb-3 ms-3">Media Recordings</label> <br />
                            <input type="checkbox" value="FANTASY" name="check-genre" id="chkbox-fantasy" />
                            <label for="chkbox-fantasy" class="mb-3 ms-3">Student Annotation</label><br />
                            <input type="checkbox" value="COMEDY" name="check-genre" id="chkbox-comedy" checked />
                            <label for="chkbox-comedy" class="mb-3 ms-3">File Uploads</label> <br />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-4 text-end mt-3">
                    <text>Assign</text>
                </div>
                <div className="col-8 mt-3 w-50">
                    <div className="card">
                        <div className="card-body">
                            <h6 class="card-title">Assign to</h6>
                            <input type="email" class="form-control" id="exampleFormControlInput1"
                                placeholder={assignment.title}></input>
                            <h6 class="card-title mt-3">Due</h6>
                            <input type="date" value="2023-01-01" name="due-date" class="form-control"></input>
                            <div className="row mt-3">
                                <div className="col-6 text-center">
                                    <h6 className="card-title">Available from</h6>
                                </div>
                                <div className="col-6 text-center">
                                    <h6 className="card-title">Until</h6>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6 text-center">
                                    <input type="date" value="2023-01-01" name="due-date" class="form-control"></input>
                                </div>
                                <div className="col-6 text-center">
                                    <input type="date" value="2023-01-01" name="due-date" class="form-control"></input>
                                </div>
                            </div>
                        </div>
                        <div classnmame="card-body" style={{ backgroundColor: "lightgray", textAlign: "center" }}>
                            Add
                        </div>
                    </div>
                </div>
            </div>


            <div className="text-end">
                <hr />
                <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                    className="btn btn-secondary">
                    Cancel
                </Link>
                <button onClick={handleSave} className="btn btn-danger me-2">
                    Save
                </button>
            </div>
        </div>
    );
}


export default AssignmentEditor;