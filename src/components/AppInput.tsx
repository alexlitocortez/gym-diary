import React from "react"
import { Input } from 'antd'

interface AppInputProps {
    label?: string;
    type?: "textarea";
    value?: string;
    onChange?: () => void;
}

const AppInput: React.FC<AppInputProps> = ({
    label = "Insert Exercise",
    type = "textarea",
    value = "string",
    onChange,
}) => (
    <Input.TextArea value={value} onChange={onChange}>
        {label}
    </Input.TextArea>

)

export default AppInput