import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import reportWebVitals from './reportWebVitals'
import './styles/index.scss'

import userData from 'data/user_list.json'
import heartrate from 'data/heartrate_136_0226_user1.json'

import Routes from './routes'
import { RecoilRoot } from 'recoil'
import store2 from 'store'

store2.set('userManagement', userData)
store2.set('heartrate', heartrate)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
