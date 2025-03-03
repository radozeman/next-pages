import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { registerSchema } from "../schema"

const defaultValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    avatar: "",
}

const resolver = zodResolver(registerSchema)

export const useRegisterForm = () => {
    return useForm({
        defaultValues,
        resolver,
    })
}
