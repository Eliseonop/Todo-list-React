import EliminarTarea from "./EliminarTarea";

export default function ListaTareas({ tareas }) {
  return (
    <ul className="list-group">
      {tareas.map((task, i) => (
        <div className="input-group">
          <div class="input-group-text " >
            <input
              type="checkbox"
              aria-label="Checkbox for following text input"
              onClick={(e) => {
                const texto = e.target.parentElement;
                if (e.target.checked) {
                  texto.parentElement.children[1].style.textDecoration =
                    "line-through";
                } else {
                  texto.parentElement.children[1].style.textDecoration = "";
                }
              }}
            />
          </div>
          <li key={i} className="list-group-item form-control">
            {task}
          </li>
          <EliminarTarea />
        </div>
      ))}
    </ul>
  );
}
