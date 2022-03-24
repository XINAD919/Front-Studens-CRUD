import React, { useRef, useState, useEffect } from "react";
import Back from "../components/Back";
import { useParams, Link, useNavigate } from "react-router-dom";
import Form from "../components/Form";
import { getStudent, updateStudent } from "../utils/api";
import { toast } from "react-toastify";
const StudentEdit = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const form = useRef(null);
  const navigate = useNavigate();

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

  return (
    <>
      <Back url={"/student-list"} />
      <div className="container mx-auto">
        <form
          className=""
          ref={form}
          onChange={handdleChange}
          onSubmit={handdleSubmit}
        >
          <div className="flex flex-col w-full mb-3">
            <h1 className=" self-center text-xl text-semibold">Editar Estudiante</h1>
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
    </>
  );
};

export default StudentEdit;
