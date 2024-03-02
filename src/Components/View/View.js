import React, { useContext, useEffect, useState } from 'react';

import './View.css';
import { PostContext } from '../../store/PostContext';
import { FirebaseContext } from '../../store/Context';
function View() {
  const [userDetailes, setUserDetailes] = useState()
  const {postDetailes} = useContext(PostContext)
  const {firebase} = useContext(FirebaseContext)

  useEffect (()=>{
    const {userId} = postDetailes
    firebase.firestore().collection('users').where('id','==',userId).get().then((res)=>{
      res.forEach(doc => {
        setUserDetailes(doc.data())
      });
    })
  },[])
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetailes.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetailes.price} </p>
          <span>{postDetailes.name}</span>
          <p>{postDetailes.category}</p>
          <span>{postDetailes.craetedAt}</span>
        </div>
        { userDetailes && <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetailes.username}</p>
          <p>{userDetailes.phone}</p>
        </div> }
      </div>
    </div>
  );
}
export default View;
