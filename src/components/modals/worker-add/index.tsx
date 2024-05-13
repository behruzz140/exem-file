import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import * as Yup from "yup";
import { useMask } from "@react-input/mask";
import { Field, Formik, Form, ErrorMessage } from "formik";
import { Button, TextField, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import useWorkerStore from "../../../store/worker";
import { PostData } from "../../../service/worker";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const { postData } = useWorkerStore();
  const inputRef = useMask({
    mask: "+998 (93) ___-__-__",
    replacement: { _: /\d/ },
  });
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const initialValues: PostData = {
    age: "",
    email: "",
    first_name: "",
    gender: "",
    last_name: "",
    phone_number: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    age: Yup.string().required("Age is required"),
    phone_number: Yup.string().required("Phone Number is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    first_name: Yup.string().required("First Name is required"),
    gender: Yup.string().required("Gender is required"),
    last_name: Yup.string().required("Last Name is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = async (values: PostData) => {
    const phone = values.phone_number.replace(/\D/g, "");
    const newFormData = { ...values, phone_number: phone };
    const status = await postData(newFormData);
    if (status === 201) {
      handleClose();
    } else {
      handleClose();
    }
  };

  return (
    <div>
      <button
        onClick={handleOpen}
        className="py-2 px-6 text-white font-semibold bg-[#2389DA] hover:bg-blue-800 active:bg-[#2389DA] duration-200 rounded-lg"
      >
        Add a Worker
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form className="max-w-[600px] w-full grid grid-cols-2 gap-x-4">
              <h1 className="col-span-2 text-center mb-2 text-[26px] font-bold">Add a Worker</h1>
              <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-5">
                <Field
                  as={TextField}
                  label="Email"
                  name="email"
                />
                <ErrorMessage name="email" component="p" className="text-red-500 text-center" />
              
                <Field
                  as={TextField}
                  label="Age"
                  name="age"
                  type="number"
                />
                <ErrorMessage name="age" component="p" className="text-red-500 text-center" />
              
                <Field
                  as={TextField}
                  label="First Name"
                  name="first_name"
                />
                <ErrorMessage name="first_name" component="p" className="text-red-500 text-center" />

                <FormControl>
                  <InputLabel id="gender-label">Gender</InputLabel>
                  <Field
                    as={Select}
                    labelId="gender-label"
                    label="Gender"
                    name="gender"
                  >
                    <MenuItem value="male">Male</MenuItem>
                    <MenuItem value="female">Female</MenuItem>
                  </Field>
                </FormControl>
                <ErrorMessage name="gender" component="p" className="text-red-500 text-center" />

                <Field
                  as={TextField}
                  label="Last Name"
                  name="last_name"
                />
                <ErrorMessage name="last_name" component="p" className="text-red-500 text-center" />

                <Field
                  as={TextField}
                  label="Password"
                  name="password"
                  type="password"
                />
                <ErrorMessage name="password" component="p" className="text-red-500 text-center" />

                <Field
                  as={TextField}
                  label="Phone Number"
                  type="tel"
                  inputRef={inputRef}
                  name="phone_number"
                />
                <ErrorMessage name="phone_number" component="p" className="text-red-500 text-center" />
              </div>

              <Button
                variant="contained"
                type="submit"
                className="col-span-2 py-3"
              >
                Add
              </Button>
            </Form>
          </Formik>
        </Box>
      </Modal>
    </div>
  );
}
