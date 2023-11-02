import React, { useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { useSelector, useDispatch } from "react-redux";
import {
    addModule,
    deleteModule,
    updateModule,
    setModule,
} from "./modulesReducer";


function ModuleList() {
    const { courseId } = useParams();
    // const [modules, setModules] = useState(db.modules);
    // const [module, setModule] = useState({
    //     name: "New Module",
    //     description: "New Description",
    //     course: courseId,
    // });
    // const addModule = (module) => {
    //     setModules([
    //         { ...module, _id: new Date().getTime().toString() },
    //         ...modules,
    //     ]);
    // };
    // const deleteModule = (moduleId) => {
    //     setModules(modules.filter(
    //         (module) => module._id !== moduleId));
    // };
    // const updateModule = () => {
    //     setModules(
    //         modules.map((m) => {
    //             if (m._id === module._id) {
    //                 return module;
    //             } else {
    //                 return m;
    //             }
    //         })
    //     );
    // }
    const modules = useSelector((state) => state.modulesReducer.modules);
    const module = useSelector((state) => state.modulesReducer.module);
    const dispatch = useDispatch();


    // const modules = db.modules;
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
                <li className="list-group-item">
                    <div className="d-flex">
                        <button className=" btn btn-success" onClick={() => dispatch(addModule({ ...module, course: courseId }))}>Add</button>
                        <button className=" btn btn-warning" onClick={() => dispatch(updateModule(module))}>
                            Update
                        </button>
                    </div>

                    <input className="form-control w-50" value={module.name}
                        onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
                    />
                    <textarea className="form-control w-50" value={module.description}
                        onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
                    />
                </li>

                {
                    modules
                        .filter((module) => module.course === courseId)
                        .map((module, index) => (
                            <li key={index} className="list-group-item">
                                <button className=" btn btn-danger float-end"
                                    onClick={() => dispatch(deleteModule(module._id))}>
                                    Delete
                                </button>
                                <button className=" btn btn-success float-end"
                                    onClick={() => dispatch(setModule(module))}>
                                    Edit
                                </button>


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