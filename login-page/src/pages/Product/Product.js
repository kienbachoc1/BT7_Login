import React, { useEffect, useState } from "react";
import { Button, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";
//redux
import { useSelector, useDispatch } from "react-redux";
import { productsSelector } from "../../redux/selectors";
import productsSlice from "../../redux/reducers/productsSlice";

export default function Product(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { prods } = useSelector((state) => state.products);

  const onClickButtonEdit = (id) => {
    navigate(`/product/formprod/${id}`, { replace: true });
  };

  const handleClickAdd = () => {
    navigate(`/product/formprod/0`, { replace: true });
  };

  const handleClickDelete = (id) => {
    dispatch(productsSlice.actions.deleteProduct(id));
  };
  return (
    <div style={{ height: 400, width: "100%" }}>
      <Button
        variant="contained"
        color="success"
        sx={{ margin: "10px 0" }}
        onClick={() => {
          handleClickAdd();
        }}
      >
        Add Product
      </Button>
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
                <IconButton onClick={() => handleClickDelete(prod.id)}>
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
