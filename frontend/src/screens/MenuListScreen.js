import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Menu from  '../components/Menu';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';


export default function MenuListScreen() {
  const [menus, setMenus] = useState([]);
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState(false);


  useEffect(()=>{
    const fetchData = async () =>{
      try{
        setLoading(true);
        const {data } = await axios.get('/api/menu');
        setLoading(false);
        setMenus(data);
      } catch(err){
        setError(err.message);
        setLoading(false);
      }

    };
    fetchData();

  }, []);
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
