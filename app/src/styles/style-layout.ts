import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0px;
        font-family: 'Roboto', sans-serif;
    }
`

const MainBlock = styled.div`
    margin: ${p => `${p.theme.indents.medimum}px`};
    background: ${p => p.theme.color.dop};
    border-radius: ${p => `${p.theme.borderRadius}px`};
    /* чтобы блок всегда был во весь экран, не считая отсупы */
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`

export { GlobalStyle, MainBlock }