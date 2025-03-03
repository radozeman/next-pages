import { NextPage } from "next"
import { useRegisterForm } from "../../hooks/register-form"
import { useRegister } from "../../hooks/register"

export const RegisterPage: NextPage = () => {
    const form = useRegisterForm()

    const { mutate } = useRegister()

    const handleSubmit = form.handleSubmit(values => {
        mutate(values, {
            onSuccess: () => console.log("SUCCESS", values),
            onError: error => console.log(error, "ERROR"),
        })
    })

    return (
        <form noValidate onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">
                    Name
                    <input type="name" id="name" {...form.register("name")} />
                </label>
            </div>
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
            <div>
                <label htmlFor="confirmPassword">
                    Confirm password
                    <input
                        type="password"
                        id="confirmPassword"
                        {...form.register("confirmPassword")}
                    />
                </label>
            </div>
            <div>
                <label htmlFor="avatar">
                    Avatar
                    <input
                        type="text"
                        id="avatar"
                        {...form.register("avatar")}
                    />
                </label>
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}
