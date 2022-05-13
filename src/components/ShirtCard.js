import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


const ShirtCard = () => {

  // const [data, setData] = useState(null);

  // useEffect(()=>{
  //   axios.get('/api/jerseysdata')
  //   .then((result)=>{
  //     console.log(result.data, "here")
  //     setData(result.data)
  //     // console.log(result)
  //   })
  // })

  // const navigate = useNavigate();

  return ( <div>Hello</div>
    // <div className="cardContainer">
    // {data.map((elem,i)=>{return(
    //   <Link style={{ textDecoration: 'none', color:"black" }} to="/confirm" key={i}>
    //     <div className="cardBox" >
    //     {/* <img className="jerseyImg" src={elem.img} alt="jersey" /> */}
    //     <h4 className="jerseyName">{elem.name}</h4>
    //     <p>{elem.desc}</p>
    //   </div>
    //     </Link>
    // )})}
      
        
        
    // </div>
  );
};

export default ShirtCard;
