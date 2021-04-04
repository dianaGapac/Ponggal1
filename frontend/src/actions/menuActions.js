import Axios from "axios";
import { MENU_LIST_FAIL, MENU_LIST_REQUEST, MENU_LIST_SUCCESS } from "../constants/menuConstants"

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