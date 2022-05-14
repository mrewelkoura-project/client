import React, { useState } from "react";
import { Link } from "react-router-dom";


const ShirtCard = (props) => {

  const [name, setName] = useState("");
  const [desc, setDesch] = useState("");

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

  return ( 
    <div className="cardContainer">
    {
      props.data.map((elem,i)=>{return(
      <Link style={{ textDecoration: 'none', color:"black" }} to={`/confirm/${elem._id}`} key={elem._id} > 
        <div className="cardBox"   >
         <img 
         className="jerseyImg" 
         src={elem.img} 
         alt="jersey" />

        <h4 className="jerseyName">{elem.name}</h4>

        <p>{elem.desc}</p>
        <h2>Prix : {elem.price}</h2>
      </div>
        </Link>
    )})}
      
        
        
   </div>
  );
};

export default ShirtCard;
