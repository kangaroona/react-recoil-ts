import { atom } from "recoil";
import type { todoItem } from "../types/todo";
export const todoListState = atom({
  key: "todoListState",
  default: [] as todoItem[],
});
