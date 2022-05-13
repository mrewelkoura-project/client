import React from "react";
import { Form } from "react-bootstrap";

const Confirm = () => {
  return (
    <div>
      <div>
        <img src="#" alt="jersey URL" />
      </div>
      <div>
        <h2>jersey description</h2>
        <p>available or not</p>
        <h2>Price</h2>
      </div>
      <div>
        <Form.Select>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
        </Form.Select>
      </div>
    </div>
  );
};

export default Confirm;
