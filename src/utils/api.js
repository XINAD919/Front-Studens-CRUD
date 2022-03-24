import axios from "axios";
const defaulUrl = "https://back-crud.herokuapp.com/students/";
// const defaulUrl = "http://localhost:4000/students/";

// GET ALL STUDENTS
export const getStudents = async (succesCallback, errorCallback) => {
  const options = {
    method: "GET",
    url: `${defaulUrl}`,
    headers: { "content-Type": "aplication/json" },
  };
  await axios.request(options).then(succesCallback).catch(errorCallback);
};

// GET ONE STUDENT BY ID
// si sale error probar con _id porque asi se llama en el backend
export const getStudent = async (id, succesCallback, errorCallback) => {
  const options = {
    method: "GET",
    url: `${defaulUrl}student/${id}/edit`,
    headers: { "content-Type": "aplication/json" },
  };
  await axios.request(options).then(succesCallback).catch(errorCallback);
};

// CREATE
export const createStudent = async (data, succesCallback, errorCallback) => {
  const options = {
    method: "POST",
    url: `${defaulUrl}new-student`,
    headers: { "Content-Type": "application/json" },
    data: {
      nombre: data.nombre,
      correo: data.correo,
      identificacion: data.identificacion,
      tel: data.tel,
    },
  };
  await axios.request(options).then(succesCallback).catch(errorCallback);
};

// UPDATE
export const updateStudent = async (
  id,
  data,
  succesCallback,
  errorCallback
) => {
  const options = {
    method: "PATCH",
    url: `${defaulUrl}student/${id}/update`,
    headers: { "Content-Type": "application/json" },
    data: {
      nombre: data.nombre,
      correo: data.correo,
      identificacion: data.identificacion,
      tel: data.tel,
    },
  };
  await axios.request(options).then(succesCallback).catch(errorCallback);
};

// DELETE
export const deleteStudent = async (id, succesCallback, errorCallback) => {
  const options = {
    method: "DELETE",
    url: `${defaulUrl}student/${id}/delete`,
    headers: { "Content-Type": "application/json" },
  };
  await axios.request(options).then(succesCallback).catch(errorCallback);
};
