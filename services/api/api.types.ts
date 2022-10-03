export interface CreateActivityBody {
  email: string
}

export interface CreateActivityResponse {
  created_at: string
  updated_at: string
  id: number
  title: string
  email: string
}
