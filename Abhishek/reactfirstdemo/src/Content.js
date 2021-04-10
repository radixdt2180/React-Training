import "./sidebar.css";
import User from "./user";
import EvenCount from "./EvenCount";
import TableDemo from "./TableDemo";
import Counter from "./Counter";
const userData = {
  Name: "Abhishek",
  No: 1,
  Department: "Dotnet",
};
const Content = () => {
  return (
    <div className="content">
      <div className="contaier">
        <div className="row">
          <div className="col-sm-12">
            <Counter></Counter>
          </div>  <div className="col-sm-12">
            <TableDemo></TableDemo>
          </div>
          <div className="col-sm-3 justify-content-left">
            <EvenCount className="col-sm-3"></EvenCount>
          </div>
          <div className="col-sm-3">
            <User
              className="col-sm-3"
              Name={userData.Name}
              No={userData.No}
              Department={userData.Department}
            ></User>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Content;
