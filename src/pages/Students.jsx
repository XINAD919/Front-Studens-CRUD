import React, { useEffect, useState } from "react";
import { getStudents } from "../utils/api";
import StudentList from "../components/StudentList";
import { Link } from "react-router-dom";
import { Tooltip } from "@material-ui/core";

const Students = () => {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    const fetchStudents = async () => {
      await getStudents(
        (response) => {
          setStudents(response.data);
        },
        (err) => {
          console.error(err);
        }
      );
    };
    fetchStudents();
  }, []);

  return (
    <div className="container mx-auto py-4">
      <div className="flex flex-col">
        <h1 className="self-center font-semibold text-2xl">
          Lista de estudiantes
        </h1>
        <Tooltip title="Crear Estudiante" arrow>
          <Link
            to="/new-student"
            className="bg-green-500 rounded text-white self-end p-1 mb-3"
          >
            Crear Estudiante
          </Link>
        </Tooltip>

        {students ? (
          <StudentList students={students} onclick={onclick} />
        ) : (
          <h1>Aun No hay estudiantes registrados</h1>
        )}
      </div>
    </div>
  );
};

export default Students;
