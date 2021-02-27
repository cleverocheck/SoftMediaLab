interface ThemeType {
    indents: {
        small: number
        medimum: number
        big: number
    }
    staticHeight: {
        circular: number
    }
    staticWidth: {
        circular: number
    }
    color: {
        primary: string
        secondary: string
        dop: string
        on_main: string
    }
    borderRadius: number
    transition: number
}

const theme: ThemeType = {
    indents: {
        small: 10,
        medimum: 20,
        big: 40
    },
    staticHeight: {
        circular: 80
    },
    staticWidth: {
        circular: 80
    },
    color: {
        primary: '#3f51b5',
        secondary: '#f50057',
        dop: '#f7f7f7',
        on_main: '#fff'
    },
    borderRadius: 6,
    transition: 0.3,
}

export default theme