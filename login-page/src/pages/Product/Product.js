import React, { useEffect, useState } from "react";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";

export default function Product(props) {
  const navigate = useNavigate();
  const [prods, setProd] = useState([
    {
      id: 1,
      name: "Galaxy S10",
      quantity: "Korean",
      price: 10000000,
      details: "new product",
      supplier: "samsung",
    },
    {
      id: 2,
      name: "iphone 11",
      quantity: "USA",
      price: 11000000,
      details: "new product",
      supplier: "apple",
    },
    {
      id: 3,
      name: "Galaxy a11",
      quantity: "Korean",
      price: 2000000,
      details: "new product",
      supplier: "samsung",
    },
    {
      id: 4,
      name: "ipad 11",
      quantity: "USA",
      price: 10000000,
      details: "new product",
      supplier: "apple",
    },
    {
      id: 5,
      name: "Galaxy S20",
      quantity: "Korean",
      price: 20000000,
      details: "new product",
      supplier: "samsung",
    },
  ]);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(prods));
  }, [prods]);

  const onClickButtonEdit = (id) => {
    navigate(`/detail/${id}`, { replace: true });
  };

  return (
    <div style={{ height: 400, width: "100%" }}>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Details</th>
            <th>Supplier</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {prods.map((prod, index) => (
            <tr key={index}>
              <td>{prod.id}</td>
              <td>{prod.name}</td>
              <td>{prod.quantity}</td>
              <td>{prod.price}</td>
              <td>{prod.details}</td>
              <td>{prod.supplier}</td>
              <td>
                <IconButton onClick={() => onClickButtonEdit(prod.id)}>
                  <EditIcon color="primary" />
                </IconButton>
                <IconButton>
                  <DeleteIcon color="error" />
                </IconButton>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
