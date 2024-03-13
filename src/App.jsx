import React from 'react'
import { ToolBar } from './ui/componentes/ToolBar'
import { Outlet } from 'react-router-dom'

export const App = () => {
  return (
    <>
    <ToolBar/>
    <Outlet/>
    </>
  )
}
