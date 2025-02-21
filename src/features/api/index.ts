import ky from "ky"

const apiUrl = process.env.NEXT_PUBLIC_API_URL

// [GET] https://api.escuelajs.co/api/v1/products

export const internalApi = ky.create()

export const api = ky.create({
    prefixUrl: apiUrl,
})

export const privateApi = api.extend({
    headers: {},
    hooks: {},
})
