import React from 'react';
import Rating from './Rating';

export default function Menu(props) {
    const {menu} = props;
    return (
        <div>
            <div key={menu._id} class="card">
            <a href={`/menu/${menu._id}`}>
           
              <img class="medium" src= {menu.image} alt= {menu.name} />
            </a>
            <div class="card-body">
              <a href={`/menu/${menu._id}`}>
                <h2> {menu.name} </h2>
              </a>
              <Rating rating= {menu.rating} numReviews={menu.numReviews}> </Rating>
              <div class="price">$ {menu.price}</div>
            </div>
          </div>

        </div>
    )
}
