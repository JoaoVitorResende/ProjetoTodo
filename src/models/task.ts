export const TASKS_KEY = "tasks"

export enum TaskState {
  Creating = 'creating',
  Created = 'created',
}

export interface Task{
    id: string;
    tittle: string;
    concluded?: boolean;
    state?: TaskState
}