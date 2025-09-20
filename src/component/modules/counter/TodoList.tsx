import type { ReactNode } from "react";


function TodoList({ children }: { children: ReactNode }) {
    return (
        <ul>
            {children}
        </ul>
    );
}

export default TodoList;