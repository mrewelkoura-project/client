import React, { useState  } from "react";
import axios from "axios";
import formdata from "form-data"
 
const initialValues = {
  name:"",
  desc:"",
  img:"",
  price:""
}

const AddJersey = () => {

  const [values, setValues] = useState(initialValues)

  const handleInputChange = (e) =>{
    const { name , value } = e.target;
    setValues({
      ...values,
      [name]:value,
    });
    console.log(values)
  };

  const postImage = (e)=>{
    e.preventDefault();
    let img = e.target.files[0]
    const formData = new formdata();
    formData.append("file",img)
    formData.append("upload_preset", "ehzqyvxt")

    axios
    .post("http://api.cloudinary.com/v1_1/brahamtahar/upload", formData)
    .then((result)=>{
        console.log(result)
        values.img = result.data.url
    })
};

const handlePost = () => {
  axios.post("http://localhost:8080/api/post", values)
  .then((result)=>{
    alert(`${values.name && values.desc}, confirmé !`)
  })
};

  return (
    <div>
    <form>
    <div>
        <label>Jersey Name : </label>
        <input
          type="text"
          id="name"
          placeholder="Team, club..."
          name="name"
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label>Jersey Description :</label>
        <textarea
          type="text"
          id="desc"
          placeholder="color, home/ext..."
          name="desc"
          onChange={handleInputChange}
          required
        ></textarea>
      </div>

      <div>
        <label>Jersey Price : </label>
        <input
          type="text"
          id="price"
          placeholder="Price..."
          name="price"
          onChange={handleInputChange}
          required
        />
      </div>

      <div>
        <label>Upload Jersey img :</label>
        <input 
        type="file" 
        id="image" 
        name="img" 
        onChange={postImage} 
        required />
      </div>
      <div>
      <button type="submit" onClick={handlePost}>Confirm</button>
      </div>
    </form>
      
    </div>
  );
};

export default AddJersey;
