import { NextPage } from "next"
import { useLoginForm } from "../../hooks/login-form"
import { useLogin } from "../../hooks/login"

export const LoginPage: NextPage = () => {
    const form = useLoginForm()

    const { mutate } = useLogin()
    const handleSubmit = form.handleSubmit(values => {
        mutate(values, {
            onSuccess: () => console.log("SUCCESS"),
            onError: error => console.log(error, "ERROR"),
        })
    })

    return (
        <form noValidate onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">
                    Email
                    <input
                        type="email"
                        id="email"
                        {...form.register("email")}
                    />
                </label>
            </div>
            <div>
                <label htmlFor="password">
                    Password
                    <input
                        type="password"
                        id="password"
                        {...form.register("password")}
                    />
                </label>
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}
