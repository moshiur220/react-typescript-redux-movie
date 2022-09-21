
import React from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../../hook'
import { Rating } from 'react-simple-star-rating'
import { useDispatch } from 'react-redux'
import { setMovie } from '../../redux/features/movieSlic'
import { movieSearchData } from '../../services/movie'


export default function MovieList() {
  const {movie} = useAppSelector((state) => state)
  const dispatch = useDispatch()


  const changeHandler = async (e:string)=>{
  let movies = await movieSearchData(e)
  if(movies.status === 200){
    dispatch(setMovie(movies.data));
  }
  }

  return (
    <section className='pt-40 form'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <h5 style={{fontWeight:700}}>Add new movie in your list? <Link to='/add-movie'>Click Here</Link></h5>
          </div>
          <div className='col-md-6 d-flex' style={{alignItems:'center'}}>
            <h5 style={{fontWeight:700, marginRight:20}}>Search</h5>
            <input type="text" onChange={(e)=>changeHandler(e.target.value)} className='inputs' />
          </div>
        </div>
        <div className='row pt-40'>
          {
          Array.isArray(movie?.data) && movie?.data.map((el, i)=>{
              return   <div className='col-md-3 mb-20' key={i}>
              <div className='inner-movies text-center'>
                <img src={el.imageUrl} alt="" style={{width:'100%', border: '1px solid #cbc9c9', borderRadius: 7, overflow: 'hidden'}} />
                <h5 className='mt-10' style={{fontWeight:700}}>{el.title}</h5>
                <p>duration: {el.length} Min </p>
                <div>
                <Rating  ratingValue={el.rating * 20} size={20}/>
                </div>
              </div>
            </div>
            })
          }
        
        </div>
      </div>
    </section>
    
  )
}
