import React, { useEffect, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@mui/material";

export default function Detail(props) {
  const [prods, setProds] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("products"));
    if (data) {
      setProds(data);
    }
  }, []);

  let { id } = useParams();

  const renderProduct = () => {
    let result = prods
      .filter((prod) => prod.id === +id)
      .map((prod, index) => (
        <ul key={index}>
          <li>Id: {prod.id}</li>
          <li>Name: {prod.name}</li>
          <li>Quantity: {prod.quantity}</li>
          <li>Price: {prod.price}</li>
          <li>Details: {prod.details}</li>
          <li>Supplier: {prod.supplier}</li>
        </ul>
      ));
    return result;
  };

  return (
    <div>
      {renderProduct()}
      <Button
        onClick={() => {
          navigate("/product", { replace: true });
        }}
      >
        <ArrowBackIcon color="primary" />
      </Button>
    </div>
  );
}
