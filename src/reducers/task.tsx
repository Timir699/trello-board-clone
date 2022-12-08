export const taskReducer = (tasks: any, action: any) => {
  switch (action.type) {
    case "CREATE_TASK": {
      const task = {
        listName: action.payload.listName,
        listId: action.payload.listId,
        boardId: action.payload.boardId,
        cardList: [],
      };
      return [...tasks, task];
    }

    case "UPDATE_TASK": {
      const updatedList = tasks.find((task: any) => {
        return task.listId === action.payload.listId;
      });

      tasks.map((task: any) => {
        if (updatedList?.listId === task.listId) {
          task.listName = action.payload.listName || task.listName;
        }
        return tasks;
      });
    }
  }
  return tasks;
};
