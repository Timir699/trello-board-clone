export const taskReducer = (tasks: any, action: any) => {
  switch (action.type) {
    case "CREATE_TASK": {
      const task = {
        listName: action.payload.listName,
        listId: action.payload.listId,
        boardId: action.payload.boardId,
      };
      return [...tasks, task];
    }
    case "UPDATE_TASK": {
      const updatedList = tasks.find(
        (task: any) => task.id === action.payload.id
      );
      tasks.map((task: any) => {
        if (updatedList.id === task.id) {
          task.listName = action.payload.listName;
        }
        return task;
      });
    }
  }
  return tasks;
};
