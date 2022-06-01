import {
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
// import { v4 as uuidv4 } from "uuid";
import productsSlice from "../../redux/reducers/productsSlice";
import { productsSelector } from "../../redux/selectors";

export default function FormProduct() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState("");
  const [supplier, setSupplier] = useState("");
  let { id } = useParams();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      name: "",
      quantity: "",
      price: "",
      details: "",
      supplier: "",
    },
  });

  useEffect(() => {
    let result = prods.prods.find((prod) => prod.id === +id);
    console.log(result);
    reset(result);
  }, []);

  const prods = useSelector(productsSelector);
  console.log("data:", prods.prods);

  const handleClickCancel = () => {
    navigate(`/product`, { replace: true });
  };

  const onSubmit = (data) => {
    navigate(`/product`, { replace: true });
    if (+id === 0) {
      dispatch(
        productsSlice.actions.addProduct({
          ...data,
          id: prods.prods.length + 1,
        })
      );
    } else {
      dispatch(
        productsSlice.actions.updateProduct({
          ...data,
          id: +id,
        })
      );
    }
  };

  return (
    <div>
      <Container maxWidth="sm">
        <h1>Product</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box mb={2}>
            <Stack spacing={2}>
              <Controller
                name="name"
                control={control}
                rules={{ required: "Name is require" }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Name"
                    variant="standard"
                    error={!!errors?.name}
                    helperText={errors?.name ? errors.name.message : null}
                  />
                )}
              />
              <Controller
                name="quantity"
                rules={{ required: "Quantity is require" }}
                control={control}
                render={({ field }) => (
                  <FormControl
                    variant="standard"
                    fullWidth
                    error={!!errors?.quantity}
                  >
                    <InputLabel>Quantity</InputLabel>
                    <Select {...field} label="quantity" defaultValue={quantity}>
                      <MenuItem value="Korean">Korean</MenuItem>
                      <MenuItem value="USA">USA</MenuItem>
                    </Select>
                    <FormHelperText>
                      {errors?.quantity ? errors.quantity.message : null}
                    </FormHelperText>
                  </FormControl>
                )}
              />
              <Controller
                name="price"
                control={control}
                rules={{
                  required: "Price is require",
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Is not number",
                  },
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Price"
                    variant="standard"
                    error={!!errors?.price}
                    helperText={errors?.price ? errors.price.message : null}
                  />
                )}
              />
              <Controller
                name="details"
                control={control}
                rules={{
                  required: "Details is require",
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Details"
                    multiline
                    rows={4}
                    variant="standard"
                    error={!!errors?.details}
                    helperText={errors?.details ? errors.details.message : null}
                  />
                )}
              />
              <Controller
                name="supplier"
                rules={{ required: "Supplier is require" }}
                control={control}
                render={({ field }) => (
                  <FormControl
                    variant="standard"
                    fullWidth
                    error={!!errors?.supplier}
                  >
                    <InputLabel>Supplier</InputLabel>
                    <Select {...field} label="supplier" defaultValue={supplier}>
                      <MenuItem value="samsung">Samsung</MenuItem>
                      <MenuItem value="apple">Apple</MenuItem>
                    </Select>
                    <FormHelperText>
                      {errors?.supplier ? errors.supplier.message : null}
                    </FormHelperText>
                  </FormControl>
                )}
              />
            </Stack>
          </Box>
          <Button
            type="submit"
            variant="contained"
            color="success"
            sx={{ marginRight: "10px" }}
          >
            {+id !== 0 ? "Update" : "Add"}
          </Button>
          <Button
            type="button"
            variant="contained"
            color="warning"
            onClick={() => {
              handleClickCancel();
            }}
          >
            Cancel
          </Button>
        </form>
      </Container>
    </div>
  );
}
