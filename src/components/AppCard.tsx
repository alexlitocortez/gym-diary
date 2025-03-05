import React, { ReactNode } from "react"
import { Card } from "antd"

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
    <Card
        size={size}
        hoverable={hoverable}
        className="transition-all duration-300 ease-in-out hover:shadow-lg"
    >
        <h3 className="font-bold">{title}</h3>
        <ul className="mt-2 text-sm text-gray-500">
            {exercises.length > 0 ? (
                exercises.map((ex, idx) => (
                    <li key={idx} className="text-white">- {ex.name}</li>
                ))
            ) : (
                <p className="text-gray-500">No exercises added</p>
            )}
        </ul>
    </Card>
)

export default AppCard;