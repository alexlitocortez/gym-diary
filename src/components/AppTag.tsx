import React from "react";
import { Divider, Flex, Tag } from 'antd';


interface AppTagProps {
    color?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AppTag: React.FC<AppTagProps> = ({
    color = "",
    onChange
}) => (
    <>
        <Divider orientation="left">Select Tag To Categorize Exercise</Divider>
        <Flex gap="4px 0" wrap>
            <Tag color="magenta" onChange={onChange}>magenta</Tag>
            <Tag color="red" onChange={onChange}>red</Tag>
            <Tag color="volcano" onChange={onChange}>volcano</Tag>
            <Tag color="orange" onChange={onChange}>orange</Tag>
            <Tag color="gold" onChange={onChange}>gold</Tag>
            <Tag color="lime" onChange={onChange}>lime</Tag>
            <Tag color="green" onChange={onChange}>green</Tag>
            <Tag color="cyan" onChange={onChange}>cyan</Tag>
            <Tag color="blue" onChange={onChange}>blue</Tag>
        </Flex>
    </>

)

export default AppTag