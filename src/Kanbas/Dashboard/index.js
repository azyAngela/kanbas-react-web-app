import db from "../Database";
import { Link } from "react-router-dom";
import { RiBook2Line } from 'react-icons/ri';
function Dashboard() {
    const courses = db.courses;
    return (
        <div>
            <h1>Dashboard</h1>
            <hr />
            <h2>Published Courses ({courses.length})</h2>
            {/* <div class="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    {courses.map((course, index) => (
                        <div class="card">
                            <img src="/images/starship.png" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <Link
                                    key={course._id}
                                    to={`/Kanbas/Courses/${course._id}`}
                                    className="card-title"
                                >
                                    <div className="wd-text-color"><h5>{course.name}</h5></div>
                                </Link>
                                <p class="card-text">
                                    <p>{course.number}.{course._id}</p>
                                    <p> {course.startDate}_{course.endDate}</p>
                                    <RiBook2Line className="wd-icon-card"/>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div> */}
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {courses.map((course, index) => (
                    <div key={course._id} className="col">
                        <div className="card">
                            <img src="/images/starship.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <Link to={`/Kanbas/Courses/${course._id}`} className="card-title"  style={{ color: "blue", textDecoration: "none" }}>
                                    <div><h5>{course.name}</h5></div>
                                </Link>
                                <p className="card-text">
                                    <p>{course.number}.{course._id}</p>
                                    <p> {course.startDate}_{course.endDate}</p>
                                    <RiBook2Line className="wd-icon-card" />
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default Dashboard;


