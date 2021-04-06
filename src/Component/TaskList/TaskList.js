import React from "react";
import "./TaskList.scss";
import TaskItem from "../TaskItem/TaskItem";
import PropTypes from "prop-types";

TaskList.propTypes = {};

function TaskList(props) {
  const { datas, handleOnDelData, handleOnEditForm } = props;
  return (
    <div className="tasklist">
      <table>
        <thead>
          <tr>
            <th>STT</th>
            <th>Mã Nhân Viên</th>
            <th>Tên Nhân Viên</th>
            <th>Lương</th>
            <th>Hành Động</th>
          </tr>
        </thead>
        <tbody>
          {datas.map((value, index) => {
            return (
              <TaskItem
                data={value}
                key={index}
                index={index}
                handleOnDelData={handleOnDelData}
                handleOnEditForm={handleOnEditForm}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TaskList;
