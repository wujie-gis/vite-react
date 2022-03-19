/*
 * @Author: wuj
 * @Date: 2022-03-16 16:13:53
 * @LastEditors: wuj
 * @LastEditTime: 2022-03-16 16:19:09
 * @Description: 
 */
import React from 'react'
import ReactDOM from 'react-dom'
// import App from './App'
import { Demo1 } from './Demo1';
import { Demo2} from './Demo2'
import "./styles.css";



ReactDOM.render(
  <React.StrictMode>
    <Demo2 />
  </React.StrictMode>,
  document.getElementById('root')
)
