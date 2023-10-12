import { Link } from "react-router-dom";
import Assignment3 from "./a3";
import Nav from "../Nav";
import PathParameters from "./a3/PathParameters";
function Labs() {
   return (
      <div className="container">
         <Nav />
         <Assignment3 />
         <PathParameters />
      </div>
   );
}
export default Labs;