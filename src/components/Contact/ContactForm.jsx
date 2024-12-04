import React from "react";
import axios from "axios";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useTheme } from "@emotion/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const theme = useTheme();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      mobile: "",
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      mobile: Yup.string().required("Mobile number is required"),
      subject: Yup.string().required("Subject is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        const response = await axios.post(
          "https://editsh-back.onrender.com/api/contact/add",
          values
        );
        console.log("Submitted Data:", response.data);
        toast.success(response.data.message);
      } catch (error) {
        console.error("Error submitting form:", error);
        toast.error("Error submitting form!");
      } finally {
        setSubmitting(false);
        resetForm();
      }
    },
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
          backgroundColor: theme.palette.black,
          py: {
            xs: 2,
            sm: 4,
            lg: 10,
          },
        }}
      >
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={6}>
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.530529819246!2d72.88687117352991!3d21.210800881504532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f1f68e54d09%3A0xe1d3d1a8bc631529!2sEditsh%20Technology!5e0!3m2!1sen!2sin!4v1720786780182!5m2!1sen!2sin"
                width="100%"
                className="map-iframe"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <Box component="form" onSubmit={formik.handleSubmit}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    backgroundColor: theme.palette.lightBlack,
                    borderRadius: "10px",
                    p: 3,
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      color: theme.palette.white,
                      fontWeight: 600,
                      fontFamily: theme.typography.fontFamily,
                    }}
                  >
                    Leave A Message
                  </Typography>
                  <TextField
                    id="name"
                    name="name"
                    label="Name"
                    variant="filled"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                    InputLabelProps={{
                      style: { color: theme.palette.white },
                      shrink: true,
                    }}
                    InputProps={{
                      style: { color: theme.palette.white },
                      placeholder: "Name",
                    }}
                  />
                  <TextField
                    id="email"
                    name="email"
                    label="Email"
                    type="email"
                    fullWidth
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    InputLabelProps={{
                      style: { color: theme.palette.white },
                      shrink: true,
                    }}
                    InputProps={{
                      style: { color: theme.palette.white },
                      placeholder: "Email",
                    }}
                  />
                  <TextField
                    id="mobile"
                    name="mobile"
                    label="Mobile Number"
                    type="tel"
                    variant="filled"
                    placeholder="+91 00000 00000"
                    fullWidth
                    value={formik.values.mobile}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.mobile && Boolean(formik.errors.mobile)
                    }
                    helperText={formik.touched.mobile && formik.errors.mobile}
                    InputLabelProps={{
                      style: { color: theme.palette.white },
                      shrink: true,
                    }}
                    InputProps={{
                      style: { color: theme.palette.white },
                      placeholder: "+91 00000 00000",
                    }}
                  />
                  <TextField
                    id="subject"
                    name="subject"
                    placeholder="Subject"
                    label="Subject"
                    variant="filled"
                    fullWidth
                    value={formik.values.subject}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.subject && Boolean(formik.errors.subject)
                    }
                    helperText={formik.touched.subject && formik.errors.subject}
                    InputLabelProps={{
                      style: { color: theme.palette.white },
                      shrink: true,
                    }}
                    InputProps={{
                      style: { color: theme.palette.white },
                      placeholder: "Subject",
                    }}
                  />
                  <TextField
                    id="message"
                    name="message"
                    label="Message"
                    placeholder="Messages"
                    multiline
                    rows={4}
                    variant="filled"
                    fullWidth
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.message && Boolean(formik.errors.message)
                    }
                    helperText={formik.touched.message && formik.errors.message}
                    InputLabelProps={{
                      style: { color: theme.palette.white },
                      shrink: true,
                    }}
                    InputProps={{
                      style: { color: theme.palette.white },
                      placeholder: "Message",
                    }}
                  />
                  <Button
                    type="submit"
                    variant="outlined"
                    sx={{
                      width: "130px",
                      borderRadius: 5,
                      borderColor: theme.palette.grey[500],
                      color: theme.palette.grey[500],
                      "&:hover": {
                        backgroundColor: theme.palette.grey[800],
                        color: theme.palette.common.white,
                      },
                    }}
                  >
                    Submit
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default ContactForm;
