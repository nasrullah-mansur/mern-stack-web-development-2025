import { createContext, type Dispatch } from "react";
import type { TodoActionsType, TodoStateType } from "./todoInterface";

export const TodoContext = createContext<TodoStateType>([]);

export const TodoDispatchContext = createContext<Dispatch<TodoActionsType>>(() => { });
