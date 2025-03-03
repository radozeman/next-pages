import { useMutation } from "@tanstack/react-query"
import { api } from "@/features/api"
import { ApiRoutes } from "@/features/constants/routes"
import { RegisterInput, UserType } from "../../types"

export const useRegister = () => {
    return useMutation<UserType, Error, RegisterInput>({
        mutationFn: async formData => {
            const { name, email, password, avatar } = formData

            const user = await api
                .post(ApiRoutes.REGISTER, {
                    json: { name, email, password, avatar },
                })
                .json()

            return user as UserType
        },
    })
}
