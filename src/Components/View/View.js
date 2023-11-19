import React, { useContext, useEffect, useState } from 'react';
import { firebaseContext } from '../../Store/FirebaseContext';
import { PostContext } from '../../Store/PostContext';
import { doc, getDoc } from 'firebase/firestore';
import './View.css';

function View() {
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true); // Added loading state

  const { post } = useContext(PostContext);
  const { db } = useContext(firebaseContext);

  useEffect(async () => {
    const { userId } = post;
    const res = doc(db, 'users', userId);
    const docSnap = await getDoc(res);
    const user = docSnap.data();
    setUserDetails(user);
    setLoading(false); // Set loading to false when data is fetched
  }, [post, db]); // Added post and db to the dependency array

  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img src={post.url} alt="" />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9;{post.price}</p>
          <span>{post.name}</span>
          <p>{post.category}</p>
          <span>{post.createdAt}</span>
        </div>
        {loading ? (
          <p>Loading...</p> // Show a loading message while fetching data
        ) : (
          userDetails && (
            <div className="contactDetails">
              <p>Seller details</p>
              <p>{userDetails.username}</p>
              <p>{userDetails.phone}</p>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default View;
