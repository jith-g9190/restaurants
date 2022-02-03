import {RESTAURANTS_LIST_REQUEST,
    RESTAURANTS_LIST_SUCCESS,
    RESTAURANTS_LIST_FAIL
} from '../constants/restaurantsConstants'

import axios from 'axios'



export const listRestaurants =() => async(dispatch)=> {
    try{
        dispatch({ type: RESTAURANTS_LIST_REQUEST})

        const data= await axios.get('./restaurants.json()')



    } catch(error){


    }
} 