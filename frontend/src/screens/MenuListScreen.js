import React from 'react';
import data from '../data';
 import Menu from  '../components/Menu';

export default function MenuListScreen() {
    return (
        <div>
            <h1>Menus List Screen</h1>
        <div>
        <div class="row center">
        {
          data.menus.map(menu =>(
            <Menu key ={menu._id} menu={menu}></Menu>
          ))
        }
         </div>
        </div>

        </div>
    )
}
