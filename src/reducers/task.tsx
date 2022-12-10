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

    case "UPDATE_TASK":
      {
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
      break;

    case "ADD_CARD_TO_TASLKIST": {
      const card = {
        cardName: action.payload.cardName,
        cardId: action.payload.cardId,
        listId: action.payload.listId,
      };

      return tasks.map((task: any) => {
        console.log(task);
        if (task?.listId === action.payload?.listId) {
          task.cardList.push(card);
        }
        return task;
      });
    }
  }
  console.log(tasks);
  return tasks;
};
