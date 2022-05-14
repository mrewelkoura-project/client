import React, { useState } from "react";
import axios from "axios";
import formdata from "form-data"

const AddJersey = () => {

  const [formValue, setFormValue] = useState({
    name:"",
    desc:"",
    img:"",
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    console.log(e.target.value)
    setFormValue((prevState)=>{
      return {
        ...prevState,
        [name]:value,
      };
    });
  };

  const {name, desc, img } = formValue;

  const postImage = (e)=>{
    e.preventDefault();
    console.log(e)
    let img= e.target.files[0]
    const formData = new formdata();
    formData.append("file",img)
    formData.append("upload_preset", "ehzqyvxt")

    axios
    .post("http://api.cloudinary.com/v1_1/brahamtahar/upload", formData)
    .then((result)=>{
        console.log(result)
        img = result.data.url
    })
};

const handlePost = () => {
  axios.post("http://localhost:3001/api/postjersey", {
    name: name,
    desc: desc,
    img:img
  })
  .then((result)=>{
    console.log(result, "posted!")
  })
};

  return (
    <div>
    <form onSubmit={handlePost}>
    <div>
        <label>Jersey Name :</label>
        <input
          type="text"
          id="name"
          placeholder="Team, club..."
          name="name"
          value={formValue.name}
          onChange={handleChange}
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
          value={formValue.desc}
          onChange={handleChange}
          required
        ></textarea>
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
      <input type="submit" value="Add Jersey"/>
      </div>
    </form>
      
    </div>
  );
};

export default AddJersey;
