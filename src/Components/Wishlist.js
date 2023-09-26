import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function WishList(props) {
    const userWishList = props.userWishList;
    // console.log("Wishlist Component value of userWishList: " + userWishList);
    // console.log("Wishlist list: " + JSON.stringify(props));
  return (
    <div>
        <ListGroup>
            {
                userWishList.map((pokemon) => (
                    <ListGroup.Item className="modal-bg">
                        {pokemon}
                    </ListGroup.Item>
                ))
            }
        </ListGroup>
    </div>
  );
}
