import { Button } from '@material-ui/core'
import styled from 'styled-components'

const FormMain = styled.form`
    padding: ${p => `${p.theme.indents.medimum}px`};
    h1 {
        margin-top: 0px;
    }
    .MuiFormControl-root {
        width: 100%;
        margin-bottom: ${p => `${p.theme.indents.medimum}px`};
    }
`

const ButtonStyled = styled(Button)`
    width: 100%;
`

export { FormMain, ButtonStyled }