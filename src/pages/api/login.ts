import type { NextApiRequest, NextApiResponse } from "next"

const REFRESH_COOKIE_AGE = 60 * 60 * 24 * 20

export const REFRESH_TOKEN_COOKIE = "refresh_token"

export const REFRESH_COOKIE_OPTIONS = {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict",
    maxAge: REFRESH_COOKIE_AGE,
    path: "/",
} as const

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") return

    const { body } = req
    console.log(body, "body")

    res.status(200).json({ message: "Hello from Next.js!" })
}
