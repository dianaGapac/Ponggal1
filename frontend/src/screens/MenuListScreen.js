import React, { useEffect, useState } from 'react';
import Menu from  '../components/Menu';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useSelector,useDispatch } from 'react-redux';
import { listMenu } from '../actions/menuActions';
export default function MenuListScreen() {

   const dispatch = useDispatch();
   const menuList = useSelector( state => state.menuList);
   const { loading, error, menus} = menuList;


  useEffect(()=>{
    dispatch( listMenu());

  }, [dispatch]);
    return (
        <div>
          {loading?(<LoadingBox> </LoadingBox>)  :
          error? (<MessageBox variant='danger'> {error} </MessageBox>) :
          (<div class="row center">
           { menus.map(menu =>(
             <Menu key ={menu._id} menu={menu}></Menu>))}
         </div> )}
        </div>
    )
}
