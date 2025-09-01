import { TODO_CASE, type TodoActionsType, type TodoStateType } from "./todoInterface";

export const todoReducer = (state: TodoStateType, action: TodoActionsType): TodoStateType => {

    switch (action.type) {

        case TODO_CASE.ADD_TODO: {
            return [
                ...state,
                {
                    id: state.length + 1,
                    title: action.payload.title,
                    status: "Doing"
                }
            ]
        }

        case TODO_CASE.DELETE_TODO: {
            return state.filter(todo => todo.id != action.payload.id)
        }

        case TODO_CASE.UPDATE_TODO: {
            return state.map(todo => {
                if (todo.id === action.payload.id) {
                    return {
                        ...todo,
                        title: action.payload.title
                    }
                }
                return todo;
            })

        }

        case TODO_CASE.STATUS_CHANGE: {
            return state.map(todo => {
                if (todo.id === action.payload.id) {
                    return {
                        ...todo,
                        status: todo.status === "Doing" ? "Done" : "Doing",
                    }
                }
                return todo;
            });

        }

        default: return state;

    }
}



// {
//     type: "ADD_TODO",
//     payload: {
//         title: 'title'
//     }
// }