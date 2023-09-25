import React, { useEffect, useState } from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';

function WishList(userWishList) {
    if(userWishList) {
    return (
        <div></div>
        // <ListGroup>
        //     {
        //         userWishList.map((pokemon) => (
        //             <ListGroup.Item className="modal-bg">
        //                 pokemon
        //             </ListGroup.Item>
        //         ))
        //     }
        // </ListGroup>
    );
    }
}

export default WishList;
