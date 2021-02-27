import React from 'react'

import { FormMain, ButtonStyled } from '../../styles/style-dialog'
import { useForm } from 'react-hook-form'

interface StudentDeleteFormProps {
    id: number
    callback: () => void
}

const StudentDeleteForm: React.FC<StudentDeleteFormProps> = ({ id, callback }) => {

    const { handleSubmit } = useForm()

    return <FormMain onSubmit={handleSubmit(callback)}>
        <h1>Вы действительно хотите удалить студента № {id}?</h1>
        <ButtonStyled color='primary' variant='contained' type='submit'>Да</ButtonStyled>
    </FormMain>
}

export default StudentDeleteForm