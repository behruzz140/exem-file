import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputMask from "react-input-mask";

export default function TextFieldSizes() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [gender, setGender] = useState("");
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleEmailChange = (event) => {
    const { value } = event.target;
    setEmail(value);
    setEmailError(!validateEmail(value));
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleNameChange = (event) => {
    const { value } = event.target;
    setName(value);
    setNameError(value.trim() === '');
  };

  const handleSubmit = () => {
    if (!emailError && gender && !nameError && !phoneError) {
      console.log("Form submitted successfully with gender:", gender);
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Phone Number:", phoneNumber);
    } else {
      console.log("Form validation failed.");
    }
  };

  return (
    <div>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            label="Name"
            id="outlined-size-small"
            size="small"
            error={nameError}
            helperText={nameError ? "Name is required" : ""}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <TextField
            label="Email"
            id="filled-size-small"
            size="small"
            error={emailError}
            helperText={emailError ? "Invalid email address" : ""}
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <TextField
            select
            label="Gender"
            id="filled-size-small"
            size="small"
            value={gender}
            onChange={handleGenderChange}
            SelectProps={{
              native: true,
            }}
            error={!gender}
            helperText={!gender ? "Gender is required" : ""}
          >
            <option value=""> </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </TextField>
        </div>
        <div>
          <InputMask
          
            mask="(99) 999-99-99"
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
          >
            {(inputProps) => (
              <TextField
                {...inputProps}
                label="Phone Number"
                id="filled-size-small"
                size="small"
                InputProps={{
                                startAdornment: "+998 ",
                              }}
                error={!!phoneError}
                helperText={phoneError}
              />
            )}
          </InputMask>
        </div>
      </Box>
      <div className="ml-[8px]">
        <Button variant="contained" onClick={handleSubmit}>
          Save
        </Button>
      </div>
    </div>
  );
}



