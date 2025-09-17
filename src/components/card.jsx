export function Card({ id, title, description, status, dueDate, created_at, deleteProject }) {
  return (
    <>
      <div class="todo-card my-4">
        <>
          <h2 class="todo-title">{title}</h2>
          <div>
            <p class="todo-description">{description}</p>
          </div>
        </>

        <div className="todo-meta">
          <div>
            <span className="todo-status status-in-progress">{status}</span>
          </div>
          <div className="d-flex flex-column align-items-end">
            <span className="todo-date">Due: {dueDate}</span>
            <span className="todo-date">Created: {created_at}</span>
          </div>
        </div>

        <div class="todo-actions">
          <button type="button" className="canvaBtn btn-edit">
            Edit
          </button>
          <button type="button" className="canvaBtn btn-delete" onClick={() => deleteProject(id)}>
            Delete
          </button>
        </div>
      </div>
    </>
  );
}
