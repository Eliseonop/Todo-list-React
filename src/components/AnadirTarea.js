import { useState } from "react";

export default function AnadirTarea({ setTareas, tareas }) {
  const [texto, setTexto] = useState("");

  const Inputfoc = ()=>{
    let input = document.querySelector(".form-control")
    input.focus()
  } 

  const agregarNuevaTarea = () => {
    setTareas([...tareas, texto]);
    setTexto("");
    Inputfoc();

  };

  return (
    <div class="input-group mb-5 form-control">
      <input
        type="text"
        class="form-control"
        value={texto}
        onChange={(e) => {
          setTexto(e.target.value);
        }}
      />
      <div class="form-group">
      <button class="btn btn-primary form-group " onClick={agregarNuevaTarea}>
        Agregar Tarea
      </button>
      </div>
    </div>
  );
}
