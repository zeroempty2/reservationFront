import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/ItemList.css';
import axios from 'axios';

const ItemList = () => {
    const {category} = useParams();
    const [itemList,setItemList] = useState();

    //page임시 페이지네이션? 구현
    const fetchItemData = async() => {
        const response = await fetch(URL_VARIABLE + "reservationItems/" + `?page=${0}&size=5&reservationItemCategory=${category}`);
        const newData = await response.json();
        console.log(newData);
        setItemList(newData);
      };

    return(
        <div className='contenst-section'>
            
        </div>
    );

};

export default ItemList;