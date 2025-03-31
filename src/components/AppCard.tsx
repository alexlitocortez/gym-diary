import React, { ReactNode } from "react"
import { Card, Space } from "antd"

interface Exercise {
    name: string;
    muscleGroup: string;
}

interface AppCardProps {
    title: string
    size: "default" | "small"
    variant?: "outlined" | "borderless"
    hoverable?: boolean
    exercises?: Exercise[]
}

const AppCard: React.FC<AppCardProps> = ({
    title = '',
    size = 'default',
    variant = 'outlined',
    hoverable = false,
    exercises = []
}) => (
    <Space direction="vertical" size={18}>
        <Card
            size={size}
            hoverable={hoverable}
            className="transition-all duration-300 ease-in-out hover:shadow-lg"
        >
            <h3 className="font-bold">{title}</h3>
            <ul className="mt-2 text-sm text-gray-500">
                {exercises.length > 0 ? (
                    exercises.map((ex, idx) => (
                        <li key={idx} className="text-white">{ex.name}</li>
                    ))
                ) : (
                    null
                )}
            </ul>
        </Card>
    </Space>
)

export default AppCard;