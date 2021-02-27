import React from 'react'
import moment from 'moment'
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import { Controller, useForm } from 'react-hook-form'

import staticData from '../../static'
import { FormMain, ButtonStyled } from '../../styles/style-dialog'
import { StudentsItem } from '../../redux/actions/global/types'
import { CreateStudentInputData } from '../../redux/actions/global/types'

interface StudentFormProps {
    defaultValues: StudentsItem
    callback: (data: CreateStudentInputData) => void
}

const StudentForm: React.FC<StudentFormProps> = ({ defaultValues, callback }) => {

    const { register, handleSubmit, errors, control } = useForm()

    return (
        <FormMain onSubmit={handleSubmit(callback)}>
            <h1>{defaultValues.id != 0 ? `Редактирование студента № ${defaultValues.id}` : 'Добавление нового студента'}</h1>
            <TextField
                inputRef={register({ required: true, maxLength: 50 })}
                label='ФИО'
                name='full_name'
                defaultValue={defaultValues.id != 0 ? defaultValues.full_name : ''}
                error={errors.full_name}
            />
            <TextField
                label="Дата рождения"
                type="date"
                defaultValue={defaultValues.born_date}
                inputRef={register({ required: true, min: moment(new Date().setFullYear(1950)).format('YYYY-MM-DD'), max: moment().format('YYYY-MM-DD') })}
                name='born_date'
                error={errors.born_date}
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <FormControl>
                <InputLabel>Успеваемость</InputLabel>
                <Controller
                    control={control}
                    name='performance'
                    defaultValue={defaultValues.id != 0 ? defaultValues.performance : ''}
                    rules={{ required: true }}
                    error={errors.performance}
                    as={
                        <Select>
                            {staticData.performance.map((item: string, index: number) =>
                                <MenuItem key={index} value={index}>{item}</MenuItem>
                            )}
                        </Select>
                    }
                />
            </FormControl>
            <ButtonStyled color='primary' variant='contained' type='submit'>{defaultValues.id != 0 ? 'Сохранить' : 'Добавить студента'}</ButtonStyled>
        </FormMain>
    )
}

export default StudentForm