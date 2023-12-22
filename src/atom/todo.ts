import { atom } from "recoil";
import type { todoItem } from "../types/todo";
export const todoListState = atom({
  key: "todoListState",
  default: [] as todoItem[],
});
export const todoListFilterState = atom({
  key: "todoListFilterState",
  default: "Show All",
});
export const currentUserIDState = atom({
  key: "CurrentUserID",
  default: 1,
});
