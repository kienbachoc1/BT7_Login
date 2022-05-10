import {
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Grid,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Stack,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputText from "../../components/InputText/InputText";
import { useHistory } from "react-router-dom";

const schema = yup
  .object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    phone: yup.number().required(),
    email: yup.string().email().required(),
    hobby: yup.string().required(),
    // hobby1: yup.string().required(),
    gender: yup.string().required(),
    password: yup
      .string()
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      )
      .required(),
    confirmPassword: yup
      .string()
      .test("passwords-match", "Passwords must match", function (value) {
        return this.parent.password === value;
      })
      .required(),
  })
  .required();

export default function SignUp(props) {
  const history = useHistory();
  const [disable, setDisable] = useState(false);
  const [user, setUser] = useState([]);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      hobby: "",
      // hobby1: "",
      gender: "",
      password: "",
      confirmPassword: "",
    },
    mode: "onBlur",
  });

  const onSubmit = (data, e) => {
    history.push("/home");
    e.preventDefault();
    setUser([...user, data]);

    console.log(data);
  };
  return (
    <div>
      <Container maxWidth="md">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box mb={2}>
            <Stack spacing={2}>
              <InputText
                yub={{ ...register("firstName") }}
                errors={!!errors?.firstName}
                name="First Name"
                message={errors?.firstName ? errors.firstName.message : null}
              />

              <InputText
                yub={{ ...register("lastName") }}
                errors={!!errors?.lastName}
                name="Last Name"
                message={errors?.lastName ? errors.lastName.message : null}
              />
              <InputText
                yub={{ ...register("phone") }}
                errors={!!errors?.phone}
                name="Phone"
                message={errors?.phone ? errors.phone.message : null}
              />
              <InputText
                yub={{ ...register("email") }}
                errors={!!errors?.email}
                name="Email"
                message={errors?.email ? errors.email.message : null}
              />
              <Grid container spacing={0}>
                <Grid item xs={6}>
                  <Controller
                    name="hobby"
                    control={control}
                    render={({ field }) => (
                      <FormControl
                        variant="standard"
                        fullWidth
                        error={!!errors?.hobby}
                      >
                        <InputLabel>Hobby</InputLabel>
                        <Select {...field} label="Hobby" defaultValue={""}>
                          <MenuItem value="Listen to music">
                            Listen to music
                          </MenuItem>
                          <MenuItem value="Watch TV">Watch TV</MenuItem>
                          <MenuItem value="Play game">Play game</MenuItem>
                        </Select>
                        <FormHelperText>
                          {errors?.hobby ? errors.hobby.message : null}
                        </FormHelperText>
                      </FormControl>
                    )}
                  />
                </Grid>
                <Grid item xs={6} pl={3}>
                  <FormControl error={!!errors?.gender}>
                    <FormLabel>Gender</FormLabel>
                    <Controller
                      name="gender"
                      control={control}
                      render={({ field }) => (
                        <RadioGroup {...field} row>
                          <FormControlLabel
                            onClick={() => {
                              setDisable(false);
                            }}
                            value="female"
                            control={<Radio />}
                            label="Female"
                          />
                          <FormControlLabel
                            onClick={() => {
                              setDisable(false);
                            }}
                            value="male"
                            control={<Radio />}
                            label="Male"
                          />
                          <FormControlLabel
                            onClick={() => {
                              setDisable(true);
                            }}
                            value="other"
                            control={<Radio />}
                            label="Other"
                          />
                        </RadioGroup>
                      )}
                    />
                    <FormHelperText>
                      {errors?.gender ? errors.gender.message : null}
                    </FormHelperText>
                  </FormControl>
                </Grid>
              </Grid>
              {disable && <InputText name="Info" />}
              {/* 
              <FormControl
                component="fieldset"
                fullWidth
                error={!!errors?.hobby1}
              >
                <FormLabel component="legend">Hobby:</FormLabel>
                <Controller
                  name="hobby1"
                  control={control}
                  render={({ field }) => (
                    <FormGroup {...field} aria-label="position" row>
                      <FormControlLabel
                        value="Listen to music"
                        control={<Checkbox />}
                        label="Listen to music"
                        labelPlacement="end"
                      />
                      <FormControlLabel
                        value="Watch TV"
                        control={<Checkbox />}
                        label="Watch TV"
                        labelPlacement="end"
                      />
                      <FormControlLabel
                        value="Play game"
                        control={<Checkbox />}
                        label="Play game"
                        labelPlacement="end"
                      />
                    </FormGroup>
                  )}
                />
                <FormHelperText>
                  {errors?.hobby1 ? errors.hobby1.message : null}
                </FormHelperText>
              </FormControl> */}

              <InputText
                yub={{ ...register("password") }}
                type={"password"}
                errors={!!errors?.password}
                name="Password"
                message={errors?.password ? errors.password.message : null}
              />
              <InputText
                yub={{ ...register("confirmPassword") }}
                type={"password"}
                errors={!!errors?.confirmPassword}
                name="Confirm Password"
                message={
                  errors?.confirmPassword
                    ? errors.confirmPassword.message
                    : null
                }
              />
            </Stack>
          </Box>
          <Stack spacing={2}>
            <Button type="submit" variant="contained" fullWidth>
              Login In
            </Button>
            <Button
              type="button"
              color="error"
              variant="contained"
              fullWidth
              onClick={() => {
                reset();
              }}
            >
              Reset
            </Button>
          </Stack>
        </form>
      </Container>
    </div>
  );
}
