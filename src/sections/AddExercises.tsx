import React from 'react'
import AppButton from '../components/AppButton'
import AppInput from '../components/AppInput'

const AddExercises = () => {
    return (
        <div>
            <AppButton label='Add Exercise' />
            <div>
                <AppInput label='Add Exercise' />
            </div>
        </div>
    )
}

export default AddExercises 