import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import { useDispatch, useSelector } from 'react-redux'

import ManipulationStudent from '../components/dialogs/manipulation-student'
import DeleteStudent from '../components/dialogs/delete-student'
import { ReducersTotal } from '../redux/reducers/index'
import { changeDialogStudents, changeDialogDeleteStudents } from '../redux/actions/global/index'
import { DialogType } from '../redux/actions/global/types'

const DialogController: React.FC = () => {

    const dispatch = useDispatch()
    const open_student_manipulation = useSelector<ReducersTotal, DialogType>(({ global }) => global.dialog_add_student_status)
    const open_student_delete = useSelector<ReducersTotal, boolean>(({ global }) => global.dialog_delete_student_status)
    const closeDialogManipulation = () => {
        dispatch(changeDialogStudents({
            status: 0
        }))
    }

    const closeDialogDelete = () => {
        dispatch(changeDialogDeleteStudents({
            id: 0
        }))
    }

    return (
        <>
            <Dialog open={open_student_manipulation === 1 || open_student_manipulation === 2} onClose={closeDialogManipulation}>
                <ManipulationStudent />
            </Dialog>
            <Dialog open={open_student_delete} onClose={closeDialogDelete}>
                <DeleteStudent />
            </Dialog>
        </>
    )
}

export default DialogController