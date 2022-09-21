import React from 'react'
import PageTitle from '../../components/common/PageTitle';
import AddMovie from '../../components/page/AddMovie';

function AddMoviePage() {

  return (
    <>
       <PageTitle title="Add Movie" pageName="Add Movie" />
       <AddMovie />
    </>
  )
}

export default AddMoviePage;