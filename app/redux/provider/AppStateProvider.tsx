'use client'
import { Provider } from 'react-redux'
import { store } from '../store/store'
import { Children } from '@/app/types'

const AppStateProvider = ({children}: Children) => {
  return (
    <Provider store={store}>{children}</Provider>
  )
}

export default AppStateProvider