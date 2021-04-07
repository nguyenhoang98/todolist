import React, { useEffect, useState } from "react";
import "./TaskForm.scss";
import PropTypes from "prop-types";

TaskForm.propTypes = {};

function TaskForm(props) {
  const [dataForm, setDataForm] = useState({
    id: "",
    title: "",
    status: true,
    description: "",
  });
  const { addData, handleCloseForm, edit } = props;
  useEffect(() => {
    setDataForm({
      id: edit.id,
      title: edit.title,
      status: edit.status,
      description: edit.description,
    });
  }, [edit]);

  function handleOnchange(e) {
    const target = e.target;
    const name = target.name;
    const value =
      target.value === "true"
        ? true
        : target.value === "false"
        ? false
        : target.value;
    const newDataForm = { ...dataForm };
    newDataForm[name] = value;
    setDataForm(newDataForm);
  }
  function handleOnsubmit(e) {
    e.preventDefault();
    addData(dataForm);
    handleOnResetForm();
  }
  function handleOnResetForm() {
    setDataForm({
      id: "",
      title: "",
      status: true,
      description: "",
    });
  }
  const { id, title, status, description } = dataForm;
  return (
    <div className="taskform">
      <div className="taskform__title">
        {id ? "Cập Nhật Công việc" : "Thêm Công Việc"}
      </div>
      <span className="taskform__close" onClick={handleCloseForm}>
        <i className="fa fa-times" aria-hidden="true"></i>
      </span>
      <form onSubmit={handleOnsubmit}>
        <div className="group-form">
          <label className="group-form__title"> Tên Công việc </label>
          <input
            type="text"
            className="group-form__input"
            name="title"
            value={title}
            onChange={handleOnchange}
            placeholder="Tên Công việc"
            required
          />
        </div>
        <div className="group-form">
          <label className="group-form__title"> Trạng Thái Công việc </label>
          <select
            name="status"
            value={status}
            onChange={handleOnchange}
            className="group-form__input"
          >
            <option value={true}>Xong</option>
            <option value={false}>Chưa Xong</option>
          </select>
        </div>
        <div className="group-form">
          <label className="group-form__title"> Ghi chú </label>
          <input
            type="text"
            className="group-form__input"
            name="description"
            value={description}
            onChange={handleOnchange}
            placeholder="Ghi Chú Công Việc"
            required
          />
        </div>
        <div className="group-form">
          <button type="submit" className="btn btn-submit">
            Lưu
          </button>
          <button
            type="button"
            className="btn btn-reset-form"
            onClick={handleOnResetForm}
          >
            Làm mới{" "}
          </button>
        </div>
      </form>
    </div>
  );
}

export default TaskForm;
