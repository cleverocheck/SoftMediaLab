import {
    SUCCESS_GET_STUDENTS,
    SUCCESS_CHANGE_DIALOG_STUDENT_STATUS,
    SUCCESS_CREATE_STUDENT,
    SUCCESS_CHANGE_DIALOG_STUDENT_STATUS_EDIT,
    SUCCESS_CHANGE_STUDENT,
    SUCCESS_CHANGE_DIALOG_DELETE_STUDENT,
    SUCCESS_DELETE_STUDENT
} from './actions'
import {
    ChangeDialogInputData,
    EditInputData,
    CreateStudentInputData,
    EditStudentInputData,
    ChangeStudentDeleteInputData,
    ChangeDialogOutData,
    EditOutData,
    CreateStudentOutData,
    EditStudentOutData,
    ChangeStudentDeleteOutData,
    DeleteStudentOutData
} from './types'

export const getStudentInfo = () => ({
    url: 'getStudentsInfo',
    method: 'GET',
    type: SUCCESS_GET_STUDENTS
})

export const changeDialogStudents = (data: ChangeDialogInputData): ChangeDialogOutData => ({
    type: SUCCESS_CHANGE_DIALOG_STUDENT_STATUS,
    data: data
})

export const changeDialogStudentsWithFormData = (data: EditInputData): EditOutData => ({
    type: SUCCESS_CHANGE_DIALOG_STUDENT_STATUS_EDIT,
    data: data
})

export const createStudent = (data: CreateStudentInputData): CreateStudentOutData => ({
    url: 'createStudent',
    method: 'PUT',
    type: SUCCESS_CREATE_STUDENT,
    data: data
})

export const changeStudent = (data: EditStudentInputData): EditStudentOutData => ({
    url: 'changeStudent',
    method: 'POST',
    type: SUCCESS_CHANGE_STUDENT,
    data: data
})

export const changeDialogDeleteStudents = (data: ChangeStudentDeleteInputData): ChangeStudentDeleteOutData => ({
    type: SUCCESS_CHANGE_DIALOG_DELETE_STUDENT,
    data: data
})

export const deleteStudent = (id: number): DeleteStudentOutData => ({
    url: 'deleteStudent',
    method: 'DELETE',
    type: SUCCESS_DELETE_STUDENT,
    data: {
        id
    }
})
