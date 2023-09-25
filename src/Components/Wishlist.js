import React, { useEffect, useState } from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function WishList(list) {
    const userWishList = list.userWishList;
    console.log("Wishlist Component: " + list.userWishList);
  return (
    <div>{userWishList}

        {/* <ListGroup>
            {
                userWishList ? (
                    userWishList.map((pokemon) => (
                        <ListGroup.Item className="modal-bg">
                            pokemon
                        </ListGroup.Item>
                    ))
                ) : (
                    <></>
                )
            }
        </ListGroup> */}
    </div>
  );
}
