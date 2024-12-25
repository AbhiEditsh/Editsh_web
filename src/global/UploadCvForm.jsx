import React, { useEffect, useState } from "react";
import { useTheme } from "@emotion/react";
import {
  Box,
  Button,
  Grid,
  FormControl,
  InputLabel,
  Select,
  TextField,
  MenuItem,
  Typography,
  CircularProgress,
} from "@mui/material";
import axios from "axios";
import { Formik, Form, Field } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "../../src/assets/Css/contact.css";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";

function UploadCvForm() {
  const [technology, setTechnology] = useState([]);
  const [selectedTechnology, setSelectedTechnology] = useState("");
  const theme = useTheme();
  // eslint-disable-next-line
  const [image, setImage] = useState(null);
  //Fetch Technology
  const fetchTechnology = async () => {
    try {
      const response = await axios.get(
        "https://editsh-back-anft.onrender.com/api/technology/view"
      );

      setTechnology(response?.data?.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchTechnology();
  }, []);
  const handleChange = (event) => {
    setSelectedTechnology(event.target.value);
  };
  const handleFileChange = (event, setFieldValue) => {
    const file = event.target.files[0];

    if (file) {
      const formData = new FormData();
      formData.append("image", file);

      axios
        .post(
          "https://editsh-back-anft.onrender.com/api/upload-image",
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        )
        .then((response) => {
          setImage({
            url: response.data.url,
            public_id: response.data.public_id,
          });
          setFieldValue("resumeImage", response.data.url);
        })
        .catch((error) => {
          console.error("Error uploading image:", error);
          toast.error("Error uploading image");
        });
    }
  };
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    const formData = {
      ...values,
      applyForPosition: selectedTechnology,
    };
    try {
      const response = await axios.post(
        "https://editsh-back-anft.onrender.com/api/resume/add",
        formData
      );
      if (response.status === 201) {
        toast.success(response.data.message);
        resetForm();
      }
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setSubmitting(false);
    }
  };

  const years = Array.from({ length: 11 }, (_, index) => index.toString());

  const months = Array.from({ length: 13 }, (_, index) => index.toString());

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    mobile: Yup.string().required("Mobile number is required"),
  });

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Box
        sx={{
          my: 2,
          py: { xs: 1, md: 2, lg: 4 },
          backgroundColor: theme.palette.grey.main,
        }}
      >
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            mobile: "",
            address: "",
            currentCompanyName: "",
            applyForPosition: "",
            year: "",
            month: "",
            currentSalary: "",
            expectedSalary: "",
            resumeImage: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, setFieldValue, isSubmitting }) => (
            <Form>
              <Box
                sx={{ display: "grid", gap: 3, maxWidth: 800, margin: "auto" }}
              >
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <Field
                      name="firstName"
                      as={TextField}
                      label="First Name"
                      variant="filled"
                      size="small"
                      error={touched.firstName && Boolean(errors.firstName)}
                      helperText={touched.firstName && errors.firstName}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      name="lastName"
                      as={TextField}
                      label="Last Name"
                      variant="filled"
                      size="small"
                      error={touched.lastName && Boolean(errors.lastName)}
                      helperText={touched.lastName && errors.lastName}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      name="email"
                      size="small"
                      as={TextField}
                      label="Email"
                      variant="filled"
                      error={touched.email && Boolean(errors.email)}
                      helperText={touched.email && errors.email}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      name="mobile"
                      size="small"
                      as={TextField}
                      label="Mobile"
                      variant="filled"
                      error={touched.mobile && Boolean(errors.mobile)}
                      helperText={touched.mobile && errors.mobile}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <Field
                      name="address"
                      as={TextField}
                      size="small"
                      label="Address"
                      variant="filled"
                      error={touched.address && Boolean(errors.address)}
                      helperText={touched.address && errors.address}
                      fullWidth
                      multiline
                      rows={4}
                    />
                  </Grid>

                  <Grid item xs={12} sm={12}>
                    <Field
                      name="currentCompanyName"
                      as={TextField}
                      label="Current Company Name"
                      size="small"
                      variant="filled"
                      error={
                        touched.currentCompanyName &&
                        Boolean(errors.currentCompanyName)
                      }
                      helperText={
                        touched.currentCompanyName && errors.currentCompanyName
                      }
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <FormControl variant="filled" fullWidth>
                      <InputLabel id="technology-select-label">
                        Technology
                      </InputLabel>
                      <Select
                        labelId="technology-select-label"
                        id="technology-select"
                        value={selectedTechnology}
                        onChange={handleChange}
                      >
                        {technology?.map((tech) => (
                          <MenuItem key={tech._id} value={tech.LanguagesName}>
                            {tech.LanguagesName}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      name="year"
                      size="small"
                      as={TextField}
                      label="Year"
                      select
                      variant="filled"
                      error={touched.year && Boolean(errors.year)}
                      helperText={touched.year && errors.year}
                      fullWidth
                    >
                      {years.map((year) => (
                        <MenuItem key={year} value={year}>
                          {year}
                        </MenuItem>
                      ))}
                    </Field>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      name="month"
                      as={TextField}
                      size="small"
                      label="Month"
                      select
                      variant="filled"
                      error={touched.month && Boolean(errors.month)}
                      helperText={touched.month && errors.month}
                      fullWidth
                      InputLabelProps={{
                        style: {
                          color: theme.palette.black,
                        },
                      }}
                    >
                      {months.map((month) => (
                        <MenuItem key={month} value={month}>
                          {month}
                        </MenuItem>
                      ))}
                    </Field>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      name="currentSalary"
                      as={TextField}
                      label="Current Salary"
                      variant="filled"
                      error={
                        touched.currentSalary && Boolean(errors.currentSalary)
                      }
                      helperText={touched.currentSalary && errors.currentSalary}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      name="expectedSalary"
                      as={TextField}
                      label="Expected Salary"
                      variant="filled"
                      error={
                        touched.expectedSalary && Boolean(errors.expectedSalary)
                      }
                      helperText={
                        touched.expectedSalary && errors.expectedSalary
                      }
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Grid
                      container
                      justifyContent="center"
                      direction="column"
                      alignItems="center"
                      sx={{
                        border: `1px dotted ${theme.palette.secondary.main}`,
                        borderRadius: 3,
                        p: 1,
                        cursor: "pointer",
                      }}
                      onClick={() =>
                        document.getElementById("file-input").click()
                      }
                    >
                      <input
                        id="file-input"
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        style={{ display: "none" }}
                        onChange={(event) =>
                          handleFileChange(event, setFieldValue)
                        }
                      />
                      <Box
                        sx={{
                          width: 50,
                          height: 50,
                          borderRadius: 3,
                        }}
                      >
                        <img
                          src="https://i.postimg.cc/X7yqh8mw/png-transparent-cloud-upload-folder-cloud-folder-upload-folder-cloud-computing-cloud-data-folder-3d.png"
                          alt="file-upload"
                          width={50}
                          height={50}
                        />
                      </Box>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          color: theme.palette.secondary.main,
                        }}
                      >
                        Click to Upload
                      </Typography>
                      <Typography
                        sx={{
                          textAlign: "center",
                          fontSize: "14px",
                          color: theme.palette.secondary.main,
                        }}
                      >
                        Upload only .png, .jpg, .jpeg files
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    sx={{
                      width: "150px",
                      borderRadius: 5,
                      border: `1px dotted ${theme.palette.lightwhite}`,
                      color: theme.palette.grey[500],
                      "&:hover": {
                        backgroundColor: theme.palette.secondary.main,
                        color: theme.palette.common.white,
                      },
                    }}
                    disabled={isSubmitting}
                  >
                    {isSubmitting && <CircularProgress />}
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </Button>
                </Box>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </>
  );
}

export default UploadCvForm;
