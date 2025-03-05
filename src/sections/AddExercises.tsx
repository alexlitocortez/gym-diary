import React, { useState } from 'react'
import AppButton from '../components/AppButton'
import AppInput from '../components/AppInput'
import MuscleSections from './MuscleSection'
import AppTag from '../components/AppTag'

interface Exercise {
    name: string
    muscleGroup: string
}

const muscleGroups = [
    'Back', 'Biceps', 'Chest', 'Triceps', 'Shoulders',
    'Legs', 'Abs', 'Neck', 'Forearms'
];


const AddExercises = () => {
    const [exerciseName, setExerciseName] = useState<string>('');
    const [selectedMuscle, setSelectedMuscle] = useState<string | null>(null);
    const [exercises, setExercises] = useState<Exercise[]>([]);

    const addButton = () => {
        if (!exerciseName.trim() || !selectedMuscle) return;

        setExercises([...exercises, { name: exerciseName, muscleGroup: selectedMuscle }]);
        setExerciseName('');
        setSelectedMuscle(null);

    }

    return (
        <div>
            <div className='flex flex-row items-center gap-2'>
                <AppTag onChange={(muscle) => setSelectedMuscle(muscle)} />
                <AppInput
                    size="large"
                    className="max-w-sm w-full"
                    value={exerciseName}
                    onChange={(e) => setExerciseName(e.target.value)}
                />
                <AppButton label='Add Exercise' onClick={addButton} />
            </div>
            <MuscleSections exercises={exercises} />
        </div>
    )
}

export default AddExercises 