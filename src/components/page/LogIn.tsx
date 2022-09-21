import React from "react";
import { loginUser } from '../../services/auth';
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export default function LogIn() {

type FormData = {
  username: string;
  password: string;
};

const navigate = useNavigate();
	const validationSchema = Yup.object().shape({
		username: Yup.string()
			.required("User Name is required"),
		password: Yup.string()
			.min(3, "Password must be at least 3 characters")
			.max(12, "Password  must be lower than 12 characters")
			.required("Password is required"),
	});

  const { register, handleSubmit,reset, formState: { errors }, } = useForm<FormData>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = handleSubmit(data => {
    loginUser(data).then(userResponse=>{
      localStorage.setItem('user', JSON.stringify(userResponse));
      navigate("/movie");
      reset()
     }) 
  });

  return (
    <>
      {/* <!-- start logging area --> */}
      <section className="account-page account p80">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="item login text-center">
                <h4>Login</h4>
                <p>Login if you are a returning customer.</p>
                <form
                  onSubmit={onSubmit}
                >
                  <div style={{marginBottom:15}}>
                  <input
                    type="text"
                    {...register("username")}
                    className="inputs"
                    placeholder="Username"
                  />
                  <p style={{color:'#ec7a5c'}}>{errors.username?.message}</p>
                  </div>
                 <div>
                 <input
                    type="password" 
                    {...register("password")}
                    className="inputs"
                    placeholder="Password"
                  />
                    <p style={{color:'#ec7a5c'}}>{errors.password?.message}</p>
                 </div>
                  
                  <button type="submit" className="button-style1">
                    login <span className="btn-dot"></span>
                  </button>
                </form>
                <span className="or">or</span>
                <h5>Don't Have an Account? <Link to='/signup'>Sign up now</Link></h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end logging area --> */}
    </>
  );
}
