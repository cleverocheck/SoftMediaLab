import React from 'react'

import StudentDeleteForm from '../forms/delete-student-confirm'
import { deleteStudent } from '../../redux/actions/global'
import { ReducersTotal } from '../../redux/reducers/index'
import { useSelector, useDispatch } from 'react-redux'

const DeleteStudent: React.FC = () => {

    const dispatch = useDispatch()
    const delete_student_id = useSelector<ReducersTotal, number>(({ global }) => global.dialog_delete_student_id)

    const submit = () => {
        dispatch(deleteStudent(delete_student_id))
    }

    return <StudentDeleteForm callback={submit} id={delete_student_id} />
}

export default DeleteStudent