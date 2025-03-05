import React from 'react'
import { Col, Divider, Row } from 'antd'
import AppCard from '../components/AppCard'

interface Exercise {
    name: string;
    muscleGroup: string;
}

interface MuscleSectionsProps {
    exercises: Exercise[];
}

const muscleGroups = [
    'Back', 'Biceps', 'Chest', 'Triceps', 'Shoulders',
    'Legs', 'Abs', 'Neck', 'Forearms'
];

const MuscleSections: React.FC<MuscleSectionsProps> = ({ exercises }) => {
    return (
        <>
            <Divider orientation="left" className='text-white'>Muscle Groups</Divider>
            <Row gutter={[16, 16]} justify="center">
                {muscleGroups.map((group) => {
                    const filteredExercises = exercises.filter(ex => ex.muscleGroup === group);

                    return (
                        <Col key={group} className="gutter-row" xs={12} sm={8} md={6} lg={6} xl={4}>
                            <div className="p-4 bg-gray-800 text-white text-center rounded-lg">
                                <AppCard
                                    title={group}
                                    size="default"
                                    hoverable={true}
                                    exercises={filteredExercises}
                                />
                            </div>
                        </Col>
                    );
                })}
            </Row>
        </>
    )
}

export default MuscleSections