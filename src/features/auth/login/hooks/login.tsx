import { useMutation } from "@tanstack/react-query"
import { internalApi } from "@/features/api"
import { ApiRoutes } from "@/features/constants/routes"
import { LoginInput, TokensType } from "../../types"

export const useLogin = () => {
    return useMutation<TokensType, Error, LoginInput>({
        mutationFn: async credentials => {
            const tokens = await internalApi
                .post(ApiRoutes.LOGIN, {
                    json: credentials,
                })
                .json()

            console.log(tokens, "tokens")

            return tokens as TokensType
        },
    })
}
