import React,{useState} from 'react'
import PageTitle from '../../components/common/PageTitle';
import LogIn from '../../components/page/LogIn';


function Login() {
  return (
    <>
      <PageTitle title="Login" pageName="login" />
      <LogIn />
    </>
   
  )
}

export default Login

