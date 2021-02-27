import {
    SUCCESS_CHANGE_DIALOG_STUDENT_STATUS,
    SUCCESS_CREATE_STUDENT,
    SUCCESS_CHANGE_DIALOG_STUDENT_STATUS_EDIT,
    SUCCESS_CHANGE_STUDENT,
    SUCCESS_CHANGE_DIALOG_DELETE_STUDENT
} from './actions'
import { MethodType } from '../../middleware/dataService'


export type DialogType = 0 | 1 | 2 // 0 => закрыт, 1 => открыт, 2 => редактирование

export type PerfomanceType = 0 | 1 | 2 | 3 // 0 => неудовлетворительно, 1 => удовлетворительно, 2 => хорошо, 3 => отлично

export interface StudentsItem {
    id: number
    full_name: string
    born_date: string
    performance: PerfomanceType
}

export interface InitialStateType {
    students_list: StudentsItem[]
    students_list_loading: boolean
    dialog_add_student: StudentsItem
    dialog_add_student_status: DialogType
    dialog_delete_student_status: boolean
    dialog_delete_student_id: number
}

export interface ChangeDialogInputData {
    status: DialogType
}

export interface CreateStudentInputData {
    full_name: string
    born_date: string
    performance: PerfomanceType
}

export interface EditInputData {
    formdata: StudentsItem
}

export interface EditStudentInputData {
    data: CreateStudentInputData
    id: number
}

export interface ChangeStudentDeleteInputData {
    id: number
}

export interface ChangeDialogOutData {
    type: typeof SUCCESS_CHANGE_DIALOG_STUDENT_STATUS
    data: ChangeDialogInputData
}

export interface CreateStudentOutData {
    url: string
    method: MethodType
    type: typeof SUCCESS_CREATE_STUDENT
    data: CreateStudentInputData
}

export interface EditOutData {
    type: typeof SUCCESS_CHANGE_DIALOG_STUDENT_STATUS_EDIT
    data: EditInputData
}

export interface EditStudentOutData {
    url: string
    method: MethodType
    type: typeof SUCCESS_CHANGE_STUDENT
    data: EditStudentInputData
}

export interface ChangeStudentDeleteOutData {
    type: typeof SUCCESS_CHANGE_DIALOG_DELETE_STUDENT
    data: ChangeStudentDeleteInputData
}

export interface DeleteStudentOutData {
    url: string
    method: MethodType
    type: typeof SUCCESS_CHANGE_DIALOG_DELETE_STUDENT
    data: {
        id: number
    }
}


export interface ActionTotalGlobal {
    data: {
        status?: DialogType,
        formdata?: StudentsItem
        id?: number
    }
    type: string
}