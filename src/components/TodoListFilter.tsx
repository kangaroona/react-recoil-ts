import React from "react";
import { useRecoilState, selector, useRecoilValue } from "recoil";
import { todoListFilterState } from "../atom/todo";
async function myDBQuery({ filter }: { filter: string }) {
  await new Promise((resolve) => {
    setTimeout(resolve, 0);
  });
  return filter;
}
const currentUserNameState = selector({
  key: "CurrentUserName",
  get: async ({ get }) => {
    const response = await myDBQuery({
      filter: get(todoListFilterState),
    });
    return response;
  },
  // get: async ({ get }=> {
  //   const id: number = get(currentUserIDState);
  //   console.log(id);
  //   const res = await fetch("https://wwww.baidu.com");
  //   //const resId = await Promise.resolve(id);
  //   console.log(res);
  //   return id + 1;
  // },
});
function TodoListFilter() {
  const [filter, setFilter] = useRecoilState(todoListFilterState);
  const userId = useRecoilValue(currentUserNameState);
  // const [currentUserID, setCurrentUserID] = useRecoilState(currentUserIDState);
  const updateFilter = ({
    target: { value },
  }: {
    target: { value: string };
  }) => {
    setFilter(value);
    // setCurrentUserID(currentUserID + 1);
  };

  return (
    <>
      Filter:{userId}
      <select value={filter} onChange={updateFilter}>
        <option value="Show All">All</option>
        <option value="Show Completed">Completed</option>
        <option value="Show Uncompleted">Uncompleted</option>
      </select>
    </>
  );
}

export default TodoListFilter;
