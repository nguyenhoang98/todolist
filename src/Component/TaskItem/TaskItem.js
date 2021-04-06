import React from "react";
import "./TaskItem.scss";
import PropTypes from "prop-types";

TaskItem.propTypes = {};

function TaskItem(props) {
  const { data, index, handleOnDelData, handleOnEditForm } = props;
  return (
    <tr>
      <td>{index + 1}</td>
      <td> {data.title} </td>
      <td>
        <span className={data.status ? "blue" : "red"}>
          {data.status ? "Hoàn Thành rồi" : "Chưa Hoàn Thành nhé"}
        </span>
      </td>
      <td> {data.description} </td>
      <td>
        <button
          className="btn btn-update"
          onClick={() => handleOnEditForm(data)}
        >
          <i className="fa fa-pencil-square" aria-hidden="true"></i>
          &nbsp; Cập nhật
        </button>
        <button className="btn btn-del" onClick={() => handleOnDelData(data)}>
          <i className="fa fa-trash-o" aria-hidden="true"></i>
          &nbsp; Xóa
        </button>
      </td>
    </tr>
  );
}

export default TaskItem;
