import React from "react";
import { Link } from "react-router-dom";
const StudentList = ({ students }) => {
  const onClick = () => {
    
  };
  return (
    <div>
      {students.map((student) => (
        <>
          <div className="flex flex-col justify-center rounded-md shadow-md mb-3 h-32 px-2 relative">
            <i
              onClick={onClick()}
              className="fa-solid fa-trash absolute right-5 top-5 cursor-pointer"
            />
            <Link to={`/student/${student._id}/edit`} key={student._id}>
              <h2>Nombre: {student.nombre}</h2>
              <p>Correo: {student.correo}</p>
              <p>telefono: {student.tel}</p>
            </Link>
          </div>
        </>
      ))}
    </div>
  );
};

export default StudentList;
