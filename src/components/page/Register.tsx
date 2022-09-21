import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";
import { userSignUp } from '../../services/auth';
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type FormData = {
  username:string,
  password:string,
  name:string,
  email:string,
};

export default function Register() {
  const [checked, setChecked] = React.useState(false);
  const navigate = useNavigate();
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Name is required"),
		username: Yup.string()
			.required("User Name is required"),
      email: Yup.string()
			.required("Email Name is required"),
		password: Yup.string()
			.min(3, "Password must be at least 3 characters")
			.max(12, "Password  must be lower than 12 characters")
			.required("Password is required"),
	});

  const { register, handleSubmit,reset, formState: { errors }, } = useForm<FormData>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = handleSubmit(data => {
      userSignUp(data).then((res)=>{
      navigate("/login");
      reset()
     }) 
  });

  return (
    <>
      {/* <!-- start account area --> */}
      <section className="account-page account p80">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="item signin">
                <h4>Create an Account</h4>
                <p>Register here if you are a new customer.</p>
                <form onSubmit={onSubmit}>
                  <div style={{marginBottom:15}}>
                  <input
                    type="text" 
                        placeholder='Enter your name'
                        {...register("name")}
                    className="inputs"
                  />
                   <p style={{color:'#ec7a5c'}}>{errors.name?.message}</p>
                  </div>
                  <div style={{marginBottom:15}}>
                  <input
                    type="text"
                    placeholder='Enter your username'
                    {...register("username")}
                    className="inputs"
                  />
                  <p style={{color:'#ec7a5c'}}>{errors.username?.message}</p>
                  </div>
                  <div style={{marginBottom:15}}> 
                  <input
                    type="email"
                    placeholder="e-mail address"
                    {...register("email")}
                    className="inputs"
                    name="email"
                  />
                  <p style={{color:'#ec7a5c'}}>{errors.email?.message}</p>
                  </div>
                  <div style={{marginBottom:15}}>
                  <input
                    type="password"
                    placeholder="password"
                    className="inputs"
                    {...register("password")}
                  />
                  <p style={{color:'#ec7a5c'}}>{errors.password?.message}</p>
                  </div>
                  
                  <button type="submit" className="button-style1">
                    submit & register <span className="btn-dot"></span>
                  </button>
                  <label htmlFor="terms2">
                    I have read and agree to the terms & conditions
                    <input
                      type="checkbox"
                      className="check"
                      id="terms2"
                      defaultChecked={checked}
                      onChange={() => setChecked(!checked)}
                    />
                    <span className="check-custom"></span>
                  </label>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end account area --> */}
    </>
  );
}
