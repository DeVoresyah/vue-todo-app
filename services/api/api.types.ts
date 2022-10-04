export type TodoType = {
  id: number
  title: string
  activity_group_id: number
  is_active: number
  priority: string
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

export interface GetTodosResponse {
  total: number
  limit: number
  skip: number
  data: TodoType[]
}

export interface GetDetailActivityResponse {
  id: number
  title: string
  created_at: string
  todo_items: []
}
