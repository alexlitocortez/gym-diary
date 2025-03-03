import React, { useState } from 'react'
import AppButton from '../components/AppButton'
import AppInput from '../components/AppInput'
import MuscleSections from './MuscleSection'
import AppTag from '../components/AppTag'

const AddExercises = () => {
    const [addExercise, setAddExercise] = useState<string>('');
    const [exercises, setExercises] = useState<string[]>([])

    const addButton = () => {
        if (addExercise.trim() === "") return;

        setExercises([...exercises, addExercise])
        setAddExercise("");
    }

    return (
        <div>
            <div className='flex flex-row items-center gap-2'>
                <AppTag />
                <AppInput size="large" defaultValue='Add Exercise' className="max-w-sm w-full" value={addExercise} onChange={(e) => setAddExercise(e.target.value)} />
                <AppButton label='Add Exercise' onClick={addButton} />
            </div>
            <div className='mt-4 flex flex-col'>
                <h3 className='font-bold'>Exercise List:</h3>
                <ul>
                    {exercises.map((exercise, index) => (
                        <p key={index}>{exercise}</p>
                    ))}
                </ul>
            </div>
            <div>
                <MuscleSections />
            </div>
        </div>
    )
}

export default AddExercises 