import React, { useEffect, useState } from "react";
import { getStudents } from "../utils/api";
import Loading from "../components/Loading";
import StudentList from "../components/StudentList";
import { Link } from "react-router-dom";
const Students = () => {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    const fetchStudents = async () => {
      await getStudents(
        (response) => {
          console.log("students", response.data);
          setStudents(response.data);
        },
        (err) => {
          console.error(err);
        }
      );
    };
    fetchStudents();
  }, []);

  // if (Loading) {
  //   return <Loading type={"spinningBubbles"} color={"#98CA3F"} />;
  // }
  return (
    <div className="container mx-auto">
      <div className="flex flex-col">
        <h1 className="self-center font-semibold text-2xl">
          Lista de estudiantes
        </h1>
        <Link
          to="/new-student"
          className="bg-green-500 rounded text-white self-end p-1 mb-3"
        >
          Crear Estudiante
        </Link>
        {students ? (
          <StudentList students={students} />
        ) : (
          <h1>Aun No hay estudiantes registrados</h1>
        )}
      </div>
    </div>
  );
};

export default Students;
