export type TodoType = {
  id: number
  title: string
  activity_group_id: number
  is_active: number
  priority: string
}

export type ActivityType = {
  id: number
  title: string
  created_at: string
}

export interface GetActivitiesResponse {
  total: number
  limit: number
  skip: number
  data: ActivityType[]
}

export interface GetDetailActivityResponse {
  id: number
  title: string
  created_at: string
  todo_items: TodoType[]
}

export interface CreateActivityBody {
  email: string
  title?: string
}

export interface CreateActivityResponse {
  created_at: string
  updated_at: string
  id: number
  title: string
  email: string
}

export interface DeleteActivityResponse {
  status?: string
  message?: string
}

export interface CreateTodoBody {
  activity_group_id: number
  title: string
}

export interface CreateTodoResponse {
  created_at: string
  updated_at: string
  id: number
  title: string
  activity_group_id: number
  is_active: boolean
  priority: string
}

export interface GetTodosResponse {
  total: number
  limit: number
  skip: number
  data: TodoType[]
}
