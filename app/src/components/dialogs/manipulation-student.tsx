import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import StudentForm from '../../components/forms/student-form'
import { createStudent, changeStudent } from '../../redux/actions/global/index'
import { ReducersTotal } from '../../redux/reducers/index'
import { StudentsItem } from '../../redux/actions/global/types'
import { CreateStudentInputData, DialogType } from '../../redux/actions/global/types'

const ManipulationStudent: React.FC = () => {

    const dispatch = useDispatch()

    const dialog_add_student = useSelector<ReducersTotal, StudentsItem>(({ global }) => global.dialog_add_student)
    const student_manipulation_status = useSelector<ReducersTotal, DialogType>(({ global }) => global.dialog_add_student_status)

    const submit = async (data: CreateStudentInputData) => {
        if (student_manipulation_status === 2) {
            await dispatch(changeStudent({ data: data, id: dialog_add_student.id }))
        } else {
            dispatch(createStudent(data))
        }
    }

    return <StudentForm defaultValues={dialog_add_student} callback={submit} />
}

export default ManipulationStudent