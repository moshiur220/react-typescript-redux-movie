import React,{useState} from 'react'
import PageTitle from '../../components/common/PageTitle';
import Register from '../../components/page/Register';
export type SignUpUserType={
    username:string,
    password:string,
    name:string,
    email:string,
}
function SignUp() {


  return (
    <>
    <PageTitle title="Register" pageName="Register" />
        <Register />
    </>
  )
}

export default SignUp