import React from 'react';
import ShirtCard from './ShirtCard.js';
import "./MainPage.css";

const MainPage = (props) => {
    return (
        <div>
        <ShirtCard data={props.data} />
            <p>main page</p>
            
        </div>
    )
}


export default MainPage;
