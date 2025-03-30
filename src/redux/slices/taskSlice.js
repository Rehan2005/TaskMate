import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const taskSlice = createSlice({
  name: "tasks",
  initialState: { tasks: [] },
  reducers: {
    setTasks: (state, action) => { state.tasks = action.payload; },
    addTask: (state, action) => { state.tasks.push(action.payload); },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task._id !== action.payload);
    },
  },
});

export const { setTasks, addTask, removeTask } = taskSlice.actions;
export default taskSlice.reducer;

// Async actions
export const fetchTasks = () => async (dispatch) => {
  const { data } = await axios.get("/api/tasks");
  dispatch(setTasks(data));
};
