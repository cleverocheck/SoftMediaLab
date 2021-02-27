import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'

// страницы приложения
import HomePage from './pages/home/index'
import Layout from './layout/index'

import theme from './theme'
import store from './redux/store'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Layout>
          <Switch>
            {/* Главная страница */}
            <Route exact path='/' component={() => <HomePage />} />
            {/* 404 => переадресуем на главную */}
            <Route exact component={() => <Redirect to='/' />} />
          </Switch>
        </Layout>
      </ThemeProvider>
    </Provider>
  )
}

export default App
