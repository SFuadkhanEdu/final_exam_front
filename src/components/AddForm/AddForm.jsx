import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export const AddForm = () => {
    const formik = useFormik({
        initialValues: {
            title: '',
            price: '',
            desc: '',
            img: ''
        },
        validationSchema: Yup.object({
            title: Yup.string()
                .min(3, 'Must be 3 characters or greater')
                .required('Required'),
            price: Yup.number()
                .min(1, 'Must be 1 greater')
                .required('Required'),
            desc: Yup.string().min(3, 'Must be 3 characters or greater')
                .required('Required'),
            img: Yup.string()
                .min(3, 'Must be 3 characters or greater')
                .required('Required'),
        }),
        onSubmit: values => {
            fetch("http://localhost:3000/products", {

                method: "POST",

                body: JSON.stringify({
                    ...values
                }),

                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })

                .then(response => response.json())

                .then(json => console.log(json));
        },
    });
    return (
        <form onSubmit={formik.handleSubmit} className='d-flex flex-column'>
            <label htmlFor="title">Title</label>
            <input
                id="title"
                type="text"
                {...formik.getFieldProps('title')}
            />
            {formik.touched.title && formik.errors.title ? (
                <div>{formik.errors.title}</div>
            ) : null}

            <label htmlFor="price">Price</label>
            <input id="price" type="number" {...formik.getFieldProps('price')} />
            {formik.touched.price && formik.errors.price ? (
                <div>{formik.errors.price}</div>
            ) : null}

            <label htmlFor="desc">Desccription</label>
            <input id="desc" type="desc" {...formik.getFieldProps('desc')} />
            {formik.touched.desc && formik.errors.desc ? (
                <div>{formik.errors.desc}</div>
            ) : null}

            <label htmlFor="img">Image</label>
            <input id="img" type="img" {...formik.getFieldProps('img')} />
            {formik.touched.img && formik.errors.img ? (
                <div>{formik.errors.img}</div>
            ) : null}

            <button type="button" class="btn btn-primary">Submit</button>
        </form>
    );
};