import React from "react";
import { useState } from "react";

export default function EliminarTarea() {
  // const [state, setstate] = useState(initialState)

  return (
    
      <button className="btn btn-danger"
        onClick={(e) => {
            console.log(e   )
          if (e.target.innerText == "borrar") {
            // let lista = e.target.parentElement;
            e.target.parentElement.remove();
          }
        }}
      >
        borrar
      </button>
    
  );
}
export { EliminarTarea };
