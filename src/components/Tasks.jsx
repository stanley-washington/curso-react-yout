import {
  ChevronRightIcon,
  UserCheck,
  UserRoundX,
  Trash2Icon,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);

    navigate(`/task?${query.toString()}`);
  }

  return (
    <div>
      <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
        {tasks.map((task) => (
          <li key={task.id} className="flex gap-2">
            <button
              onClick={() => onTaskClick(task.id)}
              className={`bg-slate-400 text-left w-full text-white p-2 rounded-md ${
                task.isCompleted ? "line-through" : ""
              }`}
            >
              {task.isCompleted ? (
                <>
                  <UserRoundX className="inline mr-2" />
                  {task.title}
                </>
              ) : (
                <>
                  <UserCheck className="inline mr-2" />
                  {task.title}
                </>
              )}
            </button>
            <Button
              onClick={() => {
                onSeeDetailsClick(task);
              }}
            >
              <ChevronRightIcon />
            </Button>
            <Button onClick={() => onDeleteTaskClick(task.id)}>
              <Trash2Icon />
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tasks;
