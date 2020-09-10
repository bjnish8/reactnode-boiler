import React from 'react'
import './styles.scss'
import { Route } from 'react-router-dom'
import Page404 from '../../views/Page404'

const ProtectedRoute = ({component:Component, isAuthenticated, ...extraProps}) => {
    return (
        <Route {...extraProps}
        component={ isAuthenticated?Component:Page404}/>
    )
}

export default ProtectedRoute