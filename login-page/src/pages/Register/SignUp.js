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
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputText from "../../components/InputText/InputText";
import { useNavigate } from "react-router-dom";

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
  let { setIsLogged } = props;
  const navigate = useNavigate();
  const [disable, setDisable] = useState(false);
  const [user, setUser] = useState({});

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

  //==================================================================================
  // useEffect(() => {
  //   localStorage.setItem("user", JSON.stringify(user));
  // }, [user]);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user"));
    if (data) {
      setUser(data);
    }
  }, []);

  //==================================Default================================================
  useEffect(() => {
    reset({
      firstName: user.firstName,
      lastName: user.lastName,
      phone: user.phone,
      email: user.email,
      hobby: user.hobby,
      gender: user.gender,
      password: user.password,
      confirmPassword: user.confirmPassword,
    });
  }, [user]);
  console.log("data", user);

  const onSubmit = (data) => {
    if (data) {
      navigate("/home", { replace: true });
      setUser(data);
      setIsLogged(true);
      localStorage.setItem("user", JSON.stringify(data));
    }
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
                name="firstName"
                label="First Name"
                control={control}
                message={errors?.firstName ? errors.firstName.message : null}
              />

              <InputText
                yub={{ ...register("lastName") }}
                errors={!!errors?.lastName}
                label="Last Name"
                name="lastName"
                control={control}
                message={errors?.lastName ? errors.lastName.message : null}
              />
              <InputText
                yub={{ ...register("phone") }}
                errors={!!errors?.phone}
                label="Phone"
                name="phone"
                control={control}
                message={errors?.phone ? errors.phone.message : null}
              />
              <InputText
                yub={{ ...register("email") }}
                name="email"
                control={control}
                errors={!!errors?.email}
                label="Email"
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
                name="password"
                control={control}
                errors={!!errors?.password}
                label="Password"
                message={errors?.password ? errors.password.message : null}
              />
              <InputText
                yub={{ ...register("confirmPassword") }}
                type={"password"}
                name="confirmPassword"
                control={control}
                errors={!!errors?.confirmPassword}
                label="Confirm Password"
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
                reset({
                  firstName: "",
                  lastName: "",
                  phone: "",
                  email: "",
                  hobby: "",
                  // hobby1: "",
                  gender: "",
                  password: "",
                  confirmPassword: "",
                });
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
