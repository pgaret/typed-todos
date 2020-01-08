export interface Task {
    id: number,
    name: String,
    status: Boolean
}

export interface Props {
    tasks: Array<Task>,
    deleteTask: Function,
    finishTask: Function
}