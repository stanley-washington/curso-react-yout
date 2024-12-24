import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "../components/Title";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  return (
    <div className="h-screen w-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center relative nb-6">
          <button
            onClick={() => navigate(-1)}
            className="absolute left-0 top-0 bottom-0 text-slate-100 bg-slate-700 p-1 rounded-md"
          >
            <ChevronLeftIcon />
          </button>
          <Title>Detalhes da Tarefa</Title>
        </div>

        <div className="p-4 bg-slate-200 rounded-md shadow">
          <h2 className="text-xl text-slate-700 font-bold text-center">
            {title}
          </h2>
          <p className="text-slate-700 justify-center">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
