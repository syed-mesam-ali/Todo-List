import React, { useEffect } from "react";
import $ from "jquery";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";

const TodoList = ({ todoList, removeTask }) => {
  //const [dataList, setDataList] = useState([]);

  var dataMap = todoList.map((x, index) => {
    return (
      <tr key={index}>
        <td>{x.title}</td>
        <td>{x.dueOn}</td>
        <td>{x.isCompleted}</td>
        <td>
          <a style={{ cursor: "pointer" }} onClick={() => removeTask(x.id)}>
            Delete
          </a>
        </td>
      </tr>
    );
  });
  useEffect(() => {
    console.log("render complete");
    //getTodoList();
    $("#todoTable").DataTable().destroy();
  }, []);
  return (
    <div>
      <table className="table table-bordered" id="todoTable">
        <thead>
          <tr>
            <th>Title</th>
            <th>Date</th>
            <th>Completed</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>{dataMap}</tbody>
      </table>
    </div>
  );
};

export default TodoList;
