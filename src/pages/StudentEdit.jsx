import React, { useRef, useState, useEffect } from "react";
import Back from "../components/Back";
import { useParams, useNavigate } from "react-router-dom";
import { getStudent, updateStudent, deleteStudent } from "../utils/api";
import { Tooltip, Dialog } from "@material-ui/core";

const StudentEdit = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const form = useRef(null);
  const navigate = useNavigate();
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    const fetchStudent = async () => {
      await getStudent(
        id,
        (response) => {
          setData(response.data);
          console.log("student", data);
        },
        (err) => {
          console.error(err);
        }
      );
    };
    fetchStudent();
  }, []);

  const handdleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    console.log("datos escritos:", data);
  };

  const handdleSubmit = async (e) => {
    e.preventDefault();
    await updateStudent(
      id,
      data,
      (response) => {
        console.log(response.data);
        navigate("/student-list");
      },
      (err) => {
        console.error(err);
      }
    );
  };

  const onClick = async () => {
    await deleteStudent(
      id,
      (response) => {
        console.log(response.data);
        navigate("/student-list");
      },
      (err) => {
        console.error(err);
      }
    );
  };
  return (
    <>
      <div className="flex justify-between px-4">
        <Back url={"/student-list"} />
        <Tooltip title="Eliminar" arrow>
          <i
            onClick={() => setOpenDialog(true)}
            className="fa-solid fa-trash  cursor-pointer"
          />
        </Tooltip>
      </div>
      <div className="container mx-auto">
        <form
          className=""
          ref={form}
          onChange={handdleChange}
          onSubmit={handdleSubmit}
        >
          <div className="flex flex-col w-full mb-3">
            <h1 className=" self-center text-xl text-semibold">
              Editar Estudiante
            </h1>
            <label htmlFor="nombre" className="pb-2 self-start text-black">
              Nombre
            </label>
            <input
              className="border border-gray-300 pl-3 rounded-md h-8"
              defaultValue={data.nombre}
              name="nombre"
              id="nombre"
              type="text"
              placeholder="Sofia Vergara"
              required
            />
            <label
              htmlFor="identificacion"
              className="pb-2 self-start text-black"
            >
              No. Identificacion
            </label>
            <input
              className="border border-gray-300 pl-3 rounded-md h-8"
              defaultValue={data.identificacion}
              name="identificacion"
              id="identificacion"
              type="number"
              placeholder="1007223403"
              minLength="1"
              maxLength="10"
              required
            />
            <label htmlFor="correo" className="pb-2 self-start text-black">
              Correo
            </label>
            <input
              className="border border-gray-300 pl-3 rounded-md h-8"
              defaultValue={data.correo}
              name="correo"
              id="correo"
              type="email"
              placeholder="sofiav19@email.com"
              required
            />
            <label htmlFor="tel" className="pb-2 self-start text-black">
              Telefono
            </label>
            <input
              className="border border-gray-300 pl-3 rounded-md h-8"
              defaultValue={data.tel}
              name="tel"
              id="tel"
              type="tel"
              placeholder="+57 3107073545"
              minLength="10"
              maxLength="14"
              required
            />
            <button className="mt-4 rounded-md bg-green-500 text-white px-2 py-1 self-center">
              Submit
            </button>
          </div>
        </form>
      </div>
      <Dialog open={openDialog}>
        <div className="p-8 flex flex-col">
          <h1 className="text-gray-900 text-2xl font-bold">
            ¿Está seguro de querer eliminar a {data.nombre}?
          </h1>
          <div className="d-flex w-full items-center justify-center my-4">
            <button
              onClick={() => onClick()}
              className="mx-2 px-4 py-2 bg-green-500 text-white hover:bg-green-700 rounded-md shadow-md"
            >
              Sí
            </button>
            <button
              onClick={() => setOpenDialog(false)}
              className="mx-2 px-4 py-2 bg-red-500 text-white hover:bg-red-700 rounded-md shadow-md"
            >
              No
            </button>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default StudentEdit;
