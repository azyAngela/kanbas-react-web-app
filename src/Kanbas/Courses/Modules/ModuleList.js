import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";


function ModuleList() {
    const { courseId } = useParams();
    const modules = db.modules;
    return (
        <>
            <div>
                <div className="d-flex justify-content-end mx-">
                    <button class="btn bg-light mx-1">Collapse All</button>
                    <button class="btn bg-light mx-1">View Progress</button>
                    <div class="dropdown">
                        <button class="btn bg-light dropdown-toggle mx-1" type="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Publish All
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                    <button class="btn bg-danger text-white mx-1">+ Module</button>
                </div>
            </div>
            <hr />
            <ul className="list-group">
      {
        modules
         .filter((module) => module.course === courseId)
         .map((module, index) => (
           <li key={index} className="list-group-item">
             <h3>{module.name}</h3>
             <p>{module.description}</p>
             {
                module.lessons && (
                    <ul className="list-group">
                        {
                            module.lessons.map((lesson, index) => (
                                <li key={index} className="list-group-item">
                                    <h4>{lesson.name}</h4>
                                    <p>{lesson.description}</p>
                                </li>
                            ))
                        }
                    </ul>
                )
             }
           </li>
      ))
      }
            </ul></>
    );
}
export default ModuleList;