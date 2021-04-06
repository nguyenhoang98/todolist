import React, { useEffect, useState } from "react";
import "./TaskForm.scss";
import PropTypes from "prop-types";

TaskForm.propTypes = {};

function TaskForm(props) {
  const [dataForm, setDataForm] = useState({
    id: "",
    ma: "",
    name: "",
    salary: "",
  });
  const { addData, handleCloseForm, edit, updateData } = props;
  useEffect(() => {
    setDataForm({
      id: edit.id,
      ma: edit.ma,
      name: edit.name,
      salary: edit.salary,
    });
  }, [edit]);

  function handleOnchange(e) {
    const target = e.target;
    const name = target.name;
    const value = target.value;
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
      ma: "",
      name: "",
      salary: "",
    });
  }
  const { id, ma, name, salary } = dataForm;
  return (
    <div className="taskform">
      <div className="taskform__title">
        {id ? "Sửa Thông tin" : "Thêm nhân viên"}
      </div>
      <span className="taskform__close" onClick={handleCloseForm}>
        <i className="fa fa-times" aria-hidden="true"></i>
      </span>
      <form onSubmit={handleOnsubmit}>
        <div className="group-form">
          <label className="group-form__title">Mã nhân viên</label>
          <input
            type="text"
            className="group-form__input"
            name="ma"
            value={ma}
            onChange={handleOnchange}
            required
          />
        </div>
        <div className="group-form">
          <label className="group-form__title">Tên nhân viên</label>
          <input
            type="text"
            className="group-form__input"
            name="name"
            value={name}
            onChange={handleOnchange}
            required
          />
        </div>
        <div className="group-form">
          <label className="group-form__title">Lương</label>
          <input
            type="number"
            className="group-form__input"
            name="salary"
            value={salary}
            onChange={handleOnchange}
            required
          />
        </div>
        <div className="group-form">
          <button type="submit" className="btn btn-submit">
            Thêm nhân viên
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
