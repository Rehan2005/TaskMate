import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await auth.signOut();
    navigate("/");
  };

  return (
    <div className="dashboard">
      <h1>Task Manager</h1>
      <button onClick={handleLogout}>Logout</button>
      <TaskForm />
      <TaskList />
    </div>
  );
};

export default Dashboard;
