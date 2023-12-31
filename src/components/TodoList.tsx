import React, { Suspense } from "react";
import TodoItemCreator from "./TodoItemCreator";
import { useRecoilValue, selector, RecoilRoot } from "recoil";
import { todoListState, todoListFilterState } from "../atom/todo";
import TodoItem from "./TodoItem";
import TodoListFilter from "./TodoListFilter";
import TodoListStats from "./TodoListStats";
const filteredTodoListState = selector({
  key: "filteredTodoListState",
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case "Show Completed":
        return list.filter((item) => item.isComplete);
      case "Show Uncompleted":
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  },
});
function TodoList() {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <>
      {/* <TodoListStats /> */}
      {/* <TodoListFilters /> */}
      <RecoilRoot>
        <TodoItemCreator />
        <Suspense fallback={<div>加载中...</div>}>
          <TodoListFilter />
        </Suspense>
        {todoList.map((todoItem) => (
          <TodoItem key={todoItem.id} item={todoItem} />
        ))}
        <TodoListStats />
      </RecoilRoot>
    </>
  );
}

export default TodoList;
