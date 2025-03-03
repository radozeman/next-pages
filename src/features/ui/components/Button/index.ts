import styled from "styled-components"
import { ComponentProps } from "react"
import { StyleReset } from "../StyleReset"

export type ButtonProps = ComponentProps<"button"> & {
    variant: "primary" | "secondary" | "destructive"
    size: "sm" | "md" | "lg"
}

export const Button = styled.button<ButtonProps>`
    ${StyleReset}
    padding:10px
`
