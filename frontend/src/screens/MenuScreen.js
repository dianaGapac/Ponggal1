import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { detailsMenu } from '../actions/menuActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Rating from '../components/Rating';


export default function MenuScreen(props) {
   const dispatch = useDispatch();
   const menuId = props.match.params.id;
   const menuDetails = useSelector((state) => state.menuDetails);
   const { loading, error, menu } = menuDetails;
   
    useEffect(()=>{
      dispatch(detailsMenu(menuId));
    }, [dispatch,menuId]);
   

    return (
      
        <div>
          {loading?(<LoadingBox> </LoadingBox>)  :
          error? (<MessageBox variant='danger'> {error} </MessageBox>) : (
            <div>
            <Link to="/">Back to result</Link>
            <div className="row top">
              <div className="col-2">
                <img className="large" src={menu.image} alt={menu.name}></img>
              </div>
              <div className="col-1">
                <ul>
                  <li>
                    <h1>{menu.name}</h1>
                  </li>
                  <li>
                    <Rating
                      rating={menu.rating}
                      numReviews={menu.numReviews}
                    ></Rating>
                  </li>
                  <li>Pirce : ${menu.price}</li>
                  <li>
                    Description:
                    <p>{menu.description}</p>
                  </li>
                </ul>
              </div>
              <div className="col-1">
                <div className="card card-body">
                  <ul>
                    <li>
                      <div className="row">
                        <div>Price</div>
                        <div className="price">P{menu.price}</div>
                      </div>
                    </li>
                    <li>
                      <div className="row">
                        <div>Status</div>
                        <div>
                          {menu.countInStock > 0 ? (
                            <span className="success">In Stock</span>
                          ) : (
                            <span className="error">Unavailable</span>
                          )}
                        </div>
                      </div>
                    </li>
                    <li>
                      <button className="primary block">Add to Cart</button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            </div>

          )}
          
       
      </div>
    )
}
