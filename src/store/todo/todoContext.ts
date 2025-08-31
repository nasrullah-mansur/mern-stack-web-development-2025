import { createContext } from "react";
import type { TodoStateType } from "./todoInterface";

export const TodoContext = createContext<TodoStateType>([]);