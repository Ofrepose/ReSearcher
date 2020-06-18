import React from 'react';
import {useForm} from "../hooks/useForm";


export default function H1(props){

    const [showSuccessMessage, values, handleChanges, handleSubmit] = useForm();

    return(
        <form onSubmit={handleSubmit}>

            <label htmlFor="h1">

                <input
                    className='h1Classer'
                    id="h1"
                    name='content'
                    value={values.content}
                    onChange={handleChanges}
                    placeholder="h1"
                    />

            </label>



        </form>
    )
}