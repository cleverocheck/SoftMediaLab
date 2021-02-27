import {
    SUCCESS_GET_STUDENTS,
    SUCCESS_CHANGE_DIALOG_STUDENT_STATUS,
    SUCCESS_CREATE_STUDENT,
    SUCCESS_CHANGE_DIALOG_STUDENT_STATUS_EDIT,
    SUCCESS_CHANGE_STUDENT,
    SUCCESS_CHANGE_DIALOG_DELETE_STUDENT,
    SUCCESS_DELETE_STUDENT
} from '../actions/global/actions'

import { InitialStateType, ActionTotalGlobal } from '../actions/global/types'

const initialState: InitialStateType = {
    students_list: [],
    students_list_loading: true,
    dialog_add_student: {
        id: 0,
        full_name: '',
        born_date: '',
        performance: 0
    },
    dialog_add_student_status: 0,
    dialog_delete_student_status: false,
    dialog_delete_student_id: 0
}

const global = (state: InitialStateType = initialState, action: ActionTotalGlobal) => {
    switch (action.type) {
        case SUCCESS_GET_STUDENTS:
            return {
                ...state,
                students_list: action.data,
                students_list_loading: false
            }
        case SUCCESS_CHANGE_DIALOG_STUDENT_STATUS:
            if (action.data.status === 1) {
                return {
                    ...state,
                    dialog_add_student_status: action.data.status,
                    dialog_add_student: {
                        id: 0,
                        full_name: '',
                        born_date: '',
                        performance: 0
                    }
                }
            } else {
                return {
                    ...state,
                    dialog_add_student_status: action.data.status
                }

            }
        case SUCCESS_CREATE_STUDENT:
            return {
                ...state,
                students_list: action.data,
                dialog_add_student_status: 0
            }
        case SUCCESS_CHANGE_DIALOG_STUDENT_STATUS_EDIT:
            return {
                ...state,
                dialog_add_student: action.data.formdata,
                dialog_add_student_status: 2
            }
        case SUCCESS_CHANGE_STUDENT:
            return {
                ...state,
                students_list: action.data,
                dialog_add_student_status: 0
            }
        case SUCCESS_CHANGE_DIALOG_DELETE_STUDENT:
            if (!!action.data.id) {
                return {
                    ...state,
                    dialog_delete_student_status: !!action.data.id,
                    dialog_delete_student_id: action.data.id
                }
            } else {
                return {
                    ...state,
                    dialog_delete_student_status: !!action.data.id
                }
            }
        case SUCCESS_DELETE_STUDENT:
            return {
                ...state,
                dialog_delete_student_status: false,
                students_list: action.data
            }
        default:
            return state
    }
}

export default global