import React from "react"
import { Input } from 'antd'

interface AppInputProps {
    defaultValue?: string;
    size: "large" | "middle" | "small";
    value?: string;
    className?: string;
    onChange?: () => void;
}

const AppInput: React.FC<AppInputProps> = ({
    defaultValue = "Insert Exercise",
    size = "",
    value = "",
    className = "",
    onChange,
}) => (
    <Input defaultValue={defaultValue} size={"small"} value={value} onChange={onChange} className={`p-2 border rounded max-w-1/10 ${className}`} />
)

export default AppInput