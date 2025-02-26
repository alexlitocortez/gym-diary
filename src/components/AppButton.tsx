import React from 'react';
import { Button } from 'antd';

interface AppButtonProps {
    label?: string;
    type?: "primary" | "default" | "dashed" | "link" | "text";
    className?: string;
    onClick?: () => void;
}

const AppButton: React.FC<AppButtonProps> = ({
    label = "Click Me",
    type = "primary",
    className = "flex justify-end",
    onClick,
}) => (
    <Button type={type} className={className} onClick={onClick}>
        {label}
    </Button>
);

export default AppButton;