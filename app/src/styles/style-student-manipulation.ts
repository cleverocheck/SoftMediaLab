import Button from '@material-ui/core/Button'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import styled from 'styled-components'

const MainContainer = styled.div`
    margin: ${p => `${p.theme.indents.medimum}px`};
    height: calc(100% - ${p => `${p.theme.indents.medimum * 2}px`});
    position: relative;
    display: flex;
    flex-direction: column;
    h1 {
        margin-top: 0px;
        margin-bottom: ${p => `${p.theme.indents.medimum}px`};
    }
    .button_absolute {
        position: absolute;
    }
`

const ButtonStyled = styled(Button)`
    top: 0;
    right: 0;
`

const CircularBlock = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`

const TableBlock = styled.div`
    flex-grow: 1;
    overflow: hidden;
    border-radius: ${p => `${p.theme.borderRadius}px`};
    .MuiPaper-rounded {
        height: 100%;
    }
    .MuiTableCell-stickyHeader {
        background: ${p => p.theme.color.on_main};
    }
`

const ErrorBlock = styled.h1`
    flex-grow: 1;
    margin-bottom: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
        color: ${p => p.theme.color.primary};
        text-decoration: underline;
        cursor: pointer;
    }
`

const TableRowStyled = styled(TableRow)`
    cursor: pointer;
    transition: ${p => `${p.theme.transition}s`};
    &:hover {
        background: ${p => p.theme.color.dop};
    }
`

const TableCellDeleteStyled = styled(TableCell)`
    transition: ${p => `${p.theme.transition}s`};
    div {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    &:hover {
        background: ${p => p.theme.color.secondary};
        div {
            svg {
                fill: ${p => p.theme.color.on_main};
            }
        }
    }
`

export { MainContainer, ButtonStyled, CircularBlock, TableBlock, ErrorBlock, TableRowStyled, TableCellDeleteStyled }