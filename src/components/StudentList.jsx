import React from "react";
import { Link } from "react-router-dom";

const StudentList = ({ students }) => {
  return (
    <div className="grid md:grid-cols-3 gap-3">
      {students.map((student) => (
        <Link key={student._id} to={`/student/${student._id}/edit`}>
          <div className="flex flex-col justify-center rounded-md shadow-md mb-3 h-32 px-2 relative">
            <h2>Nombre: {student.nombre}</h2>
            <p>Correo: {student.correo}</p>
            <p>telefono: {student.tel}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default StudentList;
