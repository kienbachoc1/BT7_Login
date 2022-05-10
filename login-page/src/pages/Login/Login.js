import React from "react";
import {
  TextField,
  Container,
  Button,
  Stack,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  Input,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Grid,
  Checkbox,
  FormGroup,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Box } from "@mui/system";
import { Controller, useForm } from "react-hook-form";

export default function Login() {
  const [hobby, setHobby] = React.useState("");
  const [disable, setDisable] = React.useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      hobby: "",
      hobbyCheck: "",
      gender: "",
    },
  });

  const onSubmit = (data) => console.log(data);

  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Container maxWidth="md">
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)} id="form">
        <Box mb={2}>
          <Stack spacing={2}>
            <TextField
              label="First Name"
              variant="standard"
              fullWidth
              {...register("firstName", {
                required: "First name is require",
                pattern: {
                  value: /^[A-Za-z]+$/i,
                  message: "not number here",
                },
              })}
              error={!!errors?.firstName}
              helperText={errors?.firstName ? errors.firstName.message : null}
            />
            <TextField
              label="Last Name"
              variant="standard"
              fullWidth
              {...register("lastName", {
                required: "Last name is require",
                pattern: {
                  value: /^[A-Za-z]+$/i,
                  message: "not number here",
                },
              })}
              error={!!errors?.lastName}
              helperText={errors?.lastName ? errors.lastName.message : null}
            />

            <Grid container spacing={0}>
              <Grid item xs={6}>
                <Controller
                  name="hobby"
                  rules={{ required: "Hobby is require" }}
                  control={control}
                  render={({ field }) => (
                    <FormControl
                      variant="standard"
                      fullWidth
                      error={!!errors?.hobby}
                    >
                      <InputLabel id="demo-simple-select-error-label">
                        Hobby
                      </InputLabel>
                      <Select {...field} label="Hobby" defaultValue={hobby}>
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
              <Grid item xs={6} pl={2}>
                <Controller
                  name="hobbyCheck"
                  rules={{ required: "Hobby checkbox is require" }}
                  control={control}
                  render={({ field }) => (
                    <FormControl
                      component="fieldset"
                      fullWidth
                      error={!!errors?.hobbyCheck}
                    >
                      <FormLabel component="legend">Hobby:</FormLabel>
                      <FormGroup
                        {...field}
                        aria-label="position"
                        row
                        defaultValue={hobby}
                      >
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
                      <FormHelperText>
                        {errors?.hobbyCheck ? errors.hobbyCheck.message : null}
                      </FormHelperText>
                    </FormControl>
                  )}
                />
              </Grid>
            </Grid>
            <Controller
              name="gender"
              rules={{ required: "Gender is require" }}
              control={control}
              render={({ field }) => (
                <FormControl {...field} error={!!errors?.gender}>
                  <FormLabel>Gender</FormLabel>
                  <RadioGroup row>
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                    />
                    <FormControlLabel
                      value="other"
                      control={<Radio />}
                      label="Other"
                    />
                  </RadioGroup>
                  <FormHelperText>
                    {errors?.gender ? errors.gender.message : null}
                  </FormHelperText>
                </FormControl>
              )}
            />
            <TextField
              variant="standard"
              label="Email"
              fullWidth
              {...register("email", {
                required: "Email is require",
                pattern: {
                  value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                  message: "Invalid email address",
                },
              })}
              error={!!errors?.email}
              helperText={errors?.email ? errors.email.message : null}
            />
            <TextField
              variant="standard"
              label="Phone"
              fullWidth
              {...register("phone", {
                required: "Phone is require",
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Is not number",
                },
              })}
              error={!!errors?.phone}
              helperText={errors?.phone ? errors.phone.message : null}
            />
            <FormControl variant="standard">
              <InputLabel htmlFor="standard-adornment-password">
                Password
              </InputLabel>
              <Input
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange("password")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <FormControl variant="standard">
              <InputLabel htmlFor="standard-adornment-password">
                Confirm Password
              </InputLabel>
              <Input
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                defaultValue=""
                onChange={handleChange("password")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </Stack>
        </Box>
        <Stack spacing={2}>
          <Button type="submit" variant="contained" fullWidth>
            Login In
          </Button>
          <Button type="button" color="error" variant="contained">
            Reset
          </Button>
        </Stack>
      </form>
    </Container>
  );
}

// {...register("passward", {
//   required: "Please enter pasword",
//   pattern: {
//     value:
//       /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/,
//     message: "Password isn't strong",
//   },
// })}
// error={!!errors?.password}
// helperText={errors?.password ? errors.password.message : null}
