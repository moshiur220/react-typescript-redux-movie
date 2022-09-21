import React, { useEffect } from 'react'
import PageTitle from '../../components/common/PageTitle';
import MovieList from '../../components/page/MovieList';
import { useAppDispatch } from '../../hook'
import { fetchProducts } from '../../redux/features/movieSlic'

function Movie() {

    const dispatch = useAppDispatch()
    useEffect(()=>{
        dispatch(fetchProducts())
    },[])
  return (
    <>
       <PageTitle title="Movie Zone" pageName="movieZone" />
       <MovieList/>
    </>
  )
}

export default Movie