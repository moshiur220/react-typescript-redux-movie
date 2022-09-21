import React from 'react'
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { addMovies } from '../../services/movie';
import { useNavigate } from 'react-router-dom';

export default function AddMovie() {
  const navigate = useNavigate();
  type FormData = {
    title: string;
    description: string;
    releaseYear: string;
    length: number;
    rating: number;
    imageUrl: string;
  };
  const validationSchema = Yup.object().shape({
		title: Yup.string()
			.required("Movie title is required"),
      description: Yup.string(),
      releaseYear: Yup.string().required("Movie Release year is required"),
      length: Yup.number().required("Movie time length is required"),
      rating: Yup.number().min(1, "Rating must be at least 3 characters")
			.max(5, "Rating  must be lower than 12 characters").required("Movie rating is required"),
      imageUrl: Yup.string().required("Movie URL is required"),
	});

  const { register, handleSubmit,reset, formState: { errors }, } = useForm<FormData>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = handleSubmit((data) => {
    addMovies(data).then(userResponse=>{
      navigate("/movie");
      reset()
     }) 
     
  });
  return (
    <section className="account-page account p80">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 offset-lg-2">
          <div className="item login text-center">
            <h4>Add Movie</h4>
            <p>Please fill up all filed for add a new movies.</p>
            <form
              onSubmit={onSubmit}
            >
              <div style={{marginBottom:15}}>
              <input
                type="text"
                {...register("title")}
                className="inputs"
                placeholder="Write your movie title"
              />
              <p style={{color:'#ec7a5c'}}>{errors.title?.message}</p>
              </div>
             <div style={{marginBottom:15}}>
              <input
                  type="text" 
                  {...register("description")}
                  className="inputs"
                  placeholder="Write your movie description"
                />
                <p style={{color:'#ec7a5c'}}>{errors.description?.message}</p>
             </div>

             <div style={{marginBottom:15}}>
              <input
                  type="text" 
                  {...register("releaseYear")}
                  className="inputs"
                  placeholder="Write your movie release year"
                />
                <p style={{color:'#ec7a5c'}}>{errors.releaseYear?.message}</p>
             </div>

             <div style={{marginBottom:15}}>
              <input
                  type="number" 
                  {...register("length")}
                  className="inputs"
                  placeholder="Write your movie length"
                />
                <p style={{color:'#ec7a5c'}}>{errors.length?.message}</p>
             </div>

             <div style={{marginBottom:15}}>
              <input
                  type="number" 
                  {...register("rating")}
                  className="inputs"
                  placeholder="Write your movie rating"
                />
                <p style={{color:'#ec7a5c'}}>{errors.rating?.message}</p>
             </div>

             <div style={{marginBottom:15}}>
              <input
                  type="text" 
                  {...register("imageUrl")}
                  className="inputs"
                  placeholder="Write your movie imageUrl"
                />
                <p style={{color:'#ec7a5c'}}>{errors.imageUrl?.message}</p>
             </div>
             
              <button type="submit" className="button-style1">
                Add Movie <span className="btn-dot"></span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
