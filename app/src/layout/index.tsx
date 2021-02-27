import React from 'react'

import DialogController from '../controller/dialog-controller'
import theme from '../theme'
import { GlobalStyle, MainBlock } from '../styles/style-layout'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

interface LayoutProps {
    children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {

    const themeMateriaul = createMuiTheme({
        palette: {
            primary: {
                main: theme.color.primary,
            },
            secondary: {
                main: theme.color.secondary,
            }
        },
    })

    return (
        <ThemeProvider theme={themeMateriaul}>
            <MainBlock>
                <DialogController />
                <GlobalStyle />
                {children}
            </MainBlock>
        </ThemeProvider>
    )
}

export default Layout