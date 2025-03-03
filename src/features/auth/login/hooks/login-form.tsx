import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { loginSchema } from "../schema"

const defaultValues = {
    email: "",
    password: "",
}

const resolver = zodResolver(loginSchema)

export const useLoginForm = () => {
    return useForm({
        defaultValues,
        resolver,
    })
}
