import Axios from "axios";
import { MENU_DETAILS_FAIL, MENU_DETAILS_REQUEST, MENU_DETAILS_SUCCESS, MENU_LIST_FAIL, MENU_LIST_REQUEST, MENU_LIST_SUCCESS } from "../constants/menuConstants"

export const listMenu = () => async (dispatch) =>{
    dispatch({
        type: MENU_LIST_REQUEST
    });
    try{
        const {data} = await Axios.get('/api/menu');
        dispatch({
            type: MENU_LIST_SUCCESS, payload: data
        });
    }catch (error){
        dispatch({
            type: MENU_LIST_FAIL, payload: error.message
        });
    }
}

export const detailsMenu = (menuId) => async (dispatch) => {
    dispatch({
        type: MENU_DETAILS_REQUEST, payload: menuId
    });
    try{
        const {data} = await Axios.get(`/api/menu/${menuId}`);
        dispatch({ type: MENU_DETAILS_SUCCESS, payload: data})
    } catch (error){
        dispatch({
            type: MENU_DETAILS_FAIL, payload: error.response && error.response.data.message? 
            error.response.data.message : error.message
        })
    }
}