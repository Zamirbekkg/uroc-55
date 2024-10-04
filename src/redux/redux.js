import { createAction, createReducer } from "@reduxjs/toolkit";
import axios from 'axios'

const GET_CATIGORIES = 'GET_CATEGORIES';


export const getCategories = () => {
   let action = createAction(GET_CATIGORIES)  
   return (dispatch) => {
    axios ('https://fakestoreapi.com/products/categories'       
    ) .then(({data}) => dispatch(action(data)))
   }  
}


const initiallState = {
     categories: []
}

export default createReducer( initiallState, (builder)=> {
    builder
    .addCase(GET_CATIGORIES , (state, action)=>{
        state.categories = axios.payload
    })
   

});