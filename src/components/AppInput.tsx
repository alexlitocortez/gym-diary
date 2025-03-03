import React from "react"
import { Input } from 'antd'

interface AppInputProps {
    defaultValue?: string;
    size: "large" | "middle" | "small";
    className?: string;
    style?: React.CSSProperties; // Allows inline CSS
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AppInput: React.FC<AppInputProps> = ({
    defaultValue = "Insert Exercise",
    size = "",
    className = "",
    style = {},
    value = "",
    onChange,
}) => (
    <Input
        defaultValue={defaultValue}
        value={value}
        onChange={onChange}
        className={`w-auto ${className}`}
        style={{ width: 'auto', ...style }}
    />
)

export default AppInput