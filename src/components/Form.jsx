import React, { useRef, useState, useEffect } from "react";

const Form = ({ onChange, data, onSubmit }) => {
  const form = useRef(null);
  if (!data) {
    data = {};
  }
  // const [data,setData] = useState({})
  // const handdleChange=(e)=>{
  //   setData({
  //     ...data,
  //     [e.target.name]:e.target.value
  //   })
  //   console.log('datos escritos:',data)
  // }
  // const handdleSubmit = (e) => {
  //   e.preventDefault();
  // };

  return (
    <div className="">
      <form className="" ref={form} onChange={onChange} onSubmit={onSubmit}>
        <div className="flex flex-col w-full mb-3">
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
        </div>
        <button className="rounded-md bg-green-500 text-white px-2 py-1 self-center">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
