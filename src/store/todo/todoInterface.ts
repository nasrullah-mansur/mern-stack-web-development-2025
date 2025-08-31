
export interface ITodo {
    id: number;
    title: string;
    status: "Done" | "Doing";
}

export type TodoStateType = ITodo[];
