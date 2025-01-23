import React from 'react'
import { Helmet } from 'react-helmet-async'
import { AddForm } from '../../components/AddForm/AddForm'

function AddPage() {
  return (
    <>
    <Helmet>
        <title>Add Page</title>
    </Helmet>
    <AddForm></AddForm>
    </>
  )
}

export default AddPage