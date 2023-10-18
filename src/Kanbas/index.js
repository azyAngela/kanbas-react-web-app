import KanbasNavigation from "./KanbasNavigation";
import Account from "./Account";
import Courses from "./Courses";
import Dashboard from "./Dashboard";
import { Route, Routes, Navigate } from "react-router-dom";
function Kanbas() {
   return (
     <div className="d-flex">
       <div style={{ background: "black" }} >
         <KanbasNavigation /> 
       </div>
       <div>
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="/Account" element={<Account />} />
          <Route path="/Courses/:courseId/*" element={<Courses />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
       </div>
     </div>
   );
 }
 export default Kanbas;