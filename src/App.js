import React, { useEffect, useState } from "react";
import "./App.scss";
import Header from "./Component/Header/Header";
import Button from "./Component/Button/Button";
import TaskForm from "./Component/TaskForm/TaskForm";
import TaskList from "./Component/TaskList/TaskList";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App(props) {
  const [datas, setDatas] = useState(() => {
    if (localStorage.getItem("nhanvien")) {
      return JSON.parse(localStorage.getItem("nhanvien"));
    } else {
      return [];
    }
  });
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [edit, setEdit] = useState({
    id: "",
    ma: "",
    name: "",
    salary: "",
  });
  useEffect(() => {
    localStorage.setItem("nhanvien", JSON.stringify(datas));
  }, [datas]);
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  function createID() {
    return s4() + "-" + s4() + s4() + "-" + s4() + "-" + s4();
  }
  function addData(data) {
    if (data.id) {
      const index = datas.findIndex((value) => {
        return value.id === data.id;
      });
      const newDatas = [...datas];
      newDatas[index] = data;
      setDatas(newDatas);
      toast("Sửa Thông tin thành công :)");
    } else {
      data.id = createID();
      const newDatas = [...datas];
      newDatas.push(data);
      setDatas(newDatas);
      toast("Thêm nhân viên thành công :)");
    }
    closeForm();
  }
  function OpenForm() {
    setIsOpenForm(true);
  }
  function closeForm() {
    setIsOpenForm(false);
    resetEdit();
  }
  function OnDelData(data) {
    const index = datas.findIndex((value) => {
      return value.id === data.id;
    });
    const newDatas = [...datas];
    newDatas.splice(index, 1);
    setDatas(newDatas);
    toast("Xóa thành công :)");
  }
  function EditForm(data) {
    setEdit({
      id: data.id,
      ma: data.ma,
      name: data.name,
      salary: data.salary,
    });
    OpenForm();
  }
  function resetEdit() {
    setEdit({
      id: "",
      ma: "",
      name: "",
      salary: "",
    });
  }
  return (
    <div className="app">
      <Header />
      <TaskList
        datas={datas}
        handleOnDelData={OnDelData}
        handleOnEditForm={EditForm}
      />
      {isOpenForm && (
        <TaskForm addData={addData} handleCloseForm={closeForm} edit={edit} />
      )}
      <Button handleOpenForm={OpenForm} />
      <ToastContainer />
    </div>
  );
}

export default App;
