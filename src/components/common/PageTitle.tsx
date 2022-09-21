import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function PageTitle(props:any) {
  const navigate = useNavigate();
  console.log();
  
  return (
    <>
      {/* <!-- start banner area --> */}
      <section
        className="inner-page banner"
        style={{ background: `url(assets/images/banner.jpg)` }}
      >
        {
          (window.location.pathname == '/movie' || window.location.pathname == '/add-movie') && <button className="btn" style={{
            position: 'absolute',
             top: 30,
             right: 30,
             background: "#ec7a5c",
             color: 'white',
             fontWeight: 700,
             padding: '7px 22px'
           }}
           onClick={()=>{
             localStorage.clear()
             navigate('/login')
           }}
     >Logout</button>
        }
        
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2>{props.title}</h2>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {props.pageName}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end banner area --> */}
    </>
  );
}
