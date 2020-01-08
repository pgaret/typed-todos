export interface Task {
    id: number,
    name: String,
    status: Boolean
}

export interface Props {
    task: Task,
    deleteTask: Function,
    finishTask: Function
}