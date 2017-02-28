// user-friendlier when exported!
export interface User {
  name: string
  age: number
  email: string
  newsletter: 'daily' | 'weekly' | 'monthly'
}

export interface TokenResponse {
  user: User
  token: string
}

export const createUser = (user: User): Promise<TokenResponse> =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve({ user, token: 'test.token' })
    }, 1000)
  })