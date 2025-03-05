import React, { useState } from "react";
import { Divider, Flex, Tag } from 'antd';


interface AppTagProps {
    onChange?: (muscle: string) => void;
}

const muscleGroups = [
    'Back', 'Biceps', 'Chest', 'Triceps', 'Shoulders',
    'Legs', 'Abs', 'Neck', 'Forearms'
];

const AppTag: React.FC<AppTagProps> = ({ onChange }) => {
    const [selected, setSelected] = useState<string | null>(null);

    const handleTagClick = (muscle: string) => {
        setSelected(muscle);
        if (onChange) onChange(muscle);
    };

    return (
        <>
            <Divider orientation="left">Select Muscle Group</Divider>
            <Flex gap="4px 0" wrap>
                {muscleGroups.map((muscle) => (
                    <Tag.CheckableTag
                        key={muscle}
                        checked={selected === muscle}
                        onChange={() => handleTagClick(muscle)}
                    >
                        {muscle}
                    </Tag.CheckableTag>
                ))}
            </Flex>
        </>
    );
};

export default AppTag