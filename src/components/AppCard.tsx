import React, { ReactNode } from "react"
import { Card } from "antd"

interface AppCardProps {
    title: string
    size: "default" | "small"
    variant?: "outlined" | "borderless"
    hoverable?: boolean
}

const AppCard: React.FC<AppCardProps> = ({
    title = '',
    size = 'default',
    variant = 'outlined',
    hoverable = false
}) => (
    <Card
        size={size}
        variant={variant}
        hoverable={hoverable}
        className="transition-all duration-300 ease-in-out hover:shadow-lg"
    >
        {title}
    </Card>
)

export default AppCard;