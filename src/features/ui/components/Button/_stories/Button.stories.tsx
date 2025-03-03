import type { Meta, StoryObj } from "@storybook/react"

import { Button } from "../index"

const meta: Meta<typeof Button> = {
    title: "Button",
    component: Button,
    argTypes: {
        size: {
            control: "select",
            defaultValue: "sm",
        },
        variant: {
            control: "select",
            defaultValue: "primary",
        },
    },
}

export default meta

type Story = StoryObj<typeof Button>

export const Primary: Story = {
    args: {
        variant: "primary",
        size: "md",
    },
}
