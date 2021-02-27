import React, { useEffect } from 'react'
import DeleteIcon from '@material-ui/icons/Delete'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import CircularProgress from '@material-ui/core/CircularProgress'
import moment from 'moment'

import { useDispatch, useSelector } from 'react-redux'

import theme from '../../theme'
import staticData from '../../static'
import { MainContainer, ButtonStyled, CircularBlock, TableBlock, ErrorBlock, TableRowStyled, TableCellDeleteStyled } from '../../styles/style-student-manipulation'
import { getStudentInfo, changeDialogStudents, changeDialogStudentsWithFormData, changeDialogDeleteStudents } from '../../redux/actions/global/index'
import { StudentsItem } from '../../redux/actions/global/types'
import { ReducersTotal } from '../../redux/reducers/index'

const HomePage: React.FC = () => {
    const dispatch = useDispatch()
    const students_list = useSelector<ReducersTotal, StudentsItem[]>(({ global }) => global.students_list)
    const students_list_loading = useSelector<ReducersTotal, boolean>(({ global }) => global.students_list_loading)

    useEffect(() => {
        dispatch(getStudentInfo())
    }, [])

    const openDialog = () => {
        dispatch(changeDialogStudents({
            status: 1
        }))
    }

    const editStudent = (id: number) => {
        dispatch(changeDialogStudentsWithFormData({
            formdata: students_list.filter(item => item.id == id)[0]
        }))
    }

    const deleteStudent = (id: number) => {
        dispatch(changeDialogDeleteStudents({
            id: id
        }))
    }

    return (
        <MainContainer>
            {students_list_loading === true ?
                <CircularBlock>
                    <CircularProgress style={{
                        height: theme.staticHeight.circular,
                        width: theme.staticWidth.circular
                    }} />
                </CircularBlock> :
                <>
                    <h1>Главная страница управления студентами</h1>
                    <ButtonStyled variant="contained" color="primary" onClick={openDialog} className='button_absolute'>
                        Добавить нового студента
                    </ButtonStyled>
                    {students_list.length === 0 ? <ErrorBlock>У вас еще нету студентов,&nbsp;<span onClick={openDialog}>добавить студента</span></ErrorBlock> :
                        <TableBlock>
                            <TableContainer component={Paper}>
                                <Table stickyHeader>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>№</TableCell>
                                            <TableCell>ФИО</TableCell>
                                            <TableCell>Дата рождения</TableCell>
                                            <TableCell>Успеваемость</TableCell>
                                            <TableCell />
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {students_list.map((row) => (
                                            <TableRowStyled key={row.id} onClick={() => editStudent(row.id)}>
                                                <TableCell>
                                                    {row.id}
                                                </TableCell>
                                                <TableCell>
                                                    {row.full_name}
                                                </TableCell>
                                                <TableCell>
                                                    {moment(row.born_date).format('DD.MM.YYYY')}
                                                </TableCell>
                                                <TableCell>
                                                    {staticData.performance[row.performance]}
                                                </TableCell>
                                                <TableCellDeleteStyled onClick={(e: React.MouseEvent) => {
                                                    e.stopPropagation()
                                                    deleteStudent(row.id)
                                                }}>
                                                    <div>
                                                        <DeleteIcon />
                                                    </div>
                                                </TableCellDeleteStyled>
                                            </TableRowStyled>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </TableBlock>}
                </>
            }
        </MainContainer >
    )
}

export default HomePage