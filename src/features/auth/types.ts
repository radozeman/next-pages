export type TokensType = {
    access_token: string
    refresh_token: string
}

export type LoginInput = {
    email: string
    password: string
}

export type RegisterInput = {
    name: string
    email: string
    password: string
    avatar: string
}

export type UserType = {
    email: string
    password: string
    name: string
    avatar: string
    role: string
    id: number
}
