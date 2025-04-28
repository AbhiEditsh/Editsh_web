import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  Box,
  Container,
  Grid,
  Button,
  TextField,
  Typography,
  CircularProgress,
} from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useTheme } from "@emotion/react";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "react-toastify/dist/ReactToastify.css";
import "../../src/assets/Css/contact.css";
import axios from "axios";

const GetInTouch = () => {
  const theme = useTheme();
  // eslint-disable-next-line
  const [image, setImage] = useState(null);
  const validationSchema = Yup.object({
    fullName: Yup.string().required("Full Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    mobile: Yup.string().required("Mobile number is required"),
    projectDescription: Yup.string().required(
      "Project Description is required"
    ),
    budget: Yup.string().required("Budget is required"),
    document: Yup.string().url("Invalid URL"),
  });

  const contactInfo = [
    {
      icon: (
        <AddLocationAltIcon
          sx={{ color: theme.palette.white, width: "40px" }}
        />
      ),
      text: "414, Pavitra Point, Opp BBC, Near Savaliya Circle, Yogichowk, Surat",
    },
    {
      icon: <EmailIcon />,
      text: "contact@editsh.com",
      link: "mailto:contact@editsh.com",
    },
    {
      icon: <PhoneIcon />,
      text: "+91 96011 75985",
      link: "tel:+91 96011 75985",
    },
  ];

  const socialMediaLinks = [
    {
      icon: <InstagramIcon />,
      link: "https://www.instagram.com/editsh_technology/",
    },
    {
      icon: <WhatsAppIcon />,
      link: "https://wa.me/+919601175985?text=Welcome Editsh",
    },
    {
      icon: <LinkedInIcon />,
      link: "https://www.linkedin.com/company/editsh/about/",
    },
  ];

  const handleFileChange = (event, setFieldValue) => {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("image", file);

      axios
        .post(`${process.env.REACT_APP_API_BASE_URL}/upload-image`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((response) => {
          setImage({
            url: response.data.url,
            public_id: response.data.public_id,
          });
          setFieldValue("document", response.data.url);
        })
        .catch((error) => {
          console.error("Error uploading image:", error);
          toast.error("Error uploading image");
        });
    }
  };

  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/gettouch/add`,
        values
      );

      toast.success(response.data.message);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Error submitting form!");
    } finally {
      setSubmitting(false);
      resetForm();
    }
  };

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
          backgroundImage: `url("https://i.postimg.cc/x16rRyCz/129199.jpg")`,
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          "@media (max-width:600px)": {
            backgroundImage: `url("https://i.postimg.cc/x16rRyCz/129199.jpg")`,
          },
        }}
      >
        <Container sx={{ py: 10 }}>
          <Box className="form">
            <Box className="contact-info">
              <Typography
                sx={{
                  fontSize: "30px",
                  mb: 2,
                  fontWeight: "bold",
                  fontFamily: theme.typography.fontFamily,
                }}
              >
                Let's get in touch
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                Ready to start a project?
              </Typography>
              <Box className="info">
                {contactInfo?.map((info, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mb: 2,
                    }}
                  >
                    <Box
                      sx={{
                        width: "40px",
                        height: "40px",
                        lineHeight: "40px",
                        textAlign: "center",
                        backgroundColor: theme.palette.lightWhite,
                        color: theme.palette.white,
                        borderRadius: "10%",
                        mr: 2,
                        pt: 1,
                      }}
                    >
                      {info.icon}
                    </Box>
                    <Box>
                      {info.link ? (
                        <Link to={info.link} style={{ fontSize: "14px" }}>
                          {info.text}
                        </Link>
                      ) : (
                        <Typography sx={{ fontSize: "14px" }}>
                          {info.text}
                        </Typography>
                      )}
                    </Box>
                  </Box>
                ))}
              </Box>
              <Box className="social-media">
                <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>
                  Connect with Us
                </Typography>
                <Box className="social-icons">
                  {socialMediaLinks.map((media, index) => (
                    <Link
                      key={index}
                      to={media.link}
                      color="inherit"
                      target="_blank"
                    >
                      {media.icon}
                    </Link>
                  ))}
                </Box>
              </Box>
            </Box>
            <Box className="contact-form" sx={{ p: 2 }}>
              <Formik
                initialValues={{
                  fullName: "",
                  email: "",
                  mobile: "",
                  projectDescription: "",
                  budget: "",
                  document: "",
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting, setFieldValue, errors, touched }) => (
                  <Form>
                    <Field
                      as={TextField}
                      name="fullName"
                      label="Full Name"
                      variant="filled"
                      fullWidth
                      size="small"
                      margin="normal"
                      InputLabelProps={{
                        style: {
                          color: theme.palette.white,
                        },
                      }}
                      InputProps={{
                        sx: {
                          "&::placeholder": {
                            color: theme.palette.white,
                            opacity: 1,
                          },
                        },
                      }}
                      inputProps={{
                        style: { color: theme.palette.white },
                      }}
                      helperText={<ErrorMessage name="fullName" />}
                      error={touched.fullName && Boolean(errors.fullName)}
                    />
                    <Field
                      as={TextField}
                      name="email"
                      label="Email"
                      variant="filled"
                      fullWidth
                      margin="normal"
                      size="small"
                      InputLabelProps={{
                        style: {
                          color: theme.palette.white,
                        },
                      }}
                      InputProps={{
                        sx: {
                          "&::placeholder": {
                            color: theme.palette.white,
                            opacity: 1,
                          },
                        },
                      }}
                      inputProps={{
                        style: { color: theme.palette.white },
                      }}
                      helperText={<ErrorMessage name="email" />}
                      error={touched.email && Boolean(errors.email)}
                    />
                    <Field
                      as={TextField}
                      name="mobile"
                      label="Mobile"
                      variant="filled"
                      fullWidth
                      margin="normal"
                      size="small"
                      InputLabelProps={{
                        style: {
                          color: theme.palette.white,
                        },
                      }}
                      InputProps={{
                        sx: {
                          "&::placeholder": {
                            color: theme.palette.white,
                            opacity: 1,
                          },
                        },
                      }}
                      inputProps={{
                        style: { color: theme.palette.white },
                      }}
                      helperText={<ErrorMessage name="mobile" />}
                      error={touched.mobile && Boolean(errors.mobile)}
                    />
                    <Field
                      as={TextField}
                      name="projectDescription"
                      label="Project Description"
                      variant="filled"
                      fullWidth
                      InputLabelProps={{
                        style: {
                          color: theme.palette.white,
                        },
                      }}
                      multiline
                      size="small"
                      InputProps={{
                        sx: {
                          "&::placeholder": {
                            color: theme.palette.white,
                            opacity: 1,
                          },
                        },
                      }}
                      inputProps={{
                        style: { color: theme.palette.white },
                      }}
                      rows={4}
                      margin="normal"
                      helperText={<ErrorMessage name="projectDescription" />}
                      error={
                        touched.projectDescription &&
                        Boolean(errors.projectDescription)
                      }
                    />
                    <Field
                      as={TextField}
                      name="budget"
                      label="Budget"
                      variant="filled"
                      fullWidth
                      margin="normal"
                      InputLabelProps={{
                        style: {
                          color: theme.palette.white,
                        },
                      }}
                      helperText={<ErrorMessage name="budget" />}
                      error={touched.budget && Boolean(errors.budget)}
                      size="small"
                      InputProps={{
                        sx: {
                          "&::placeholder": {
                            color: theme.palette.white,
                            opacity: 1,
                          },
                        },
                      }}
                      inputProps={{
                        style: { color: theme.palette.white },
                      }}
                    />

                    <Box>
                      <Grid item xs={12}>
                        <Grid
                          container
                          justifyContent="center"
                          direction="column"
                          alignItems="center"
                          InputLabelProps={{
                            style: {
                              color: theme.palette.white,
                            },
                          }}
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
                              overflow: "hidden", // Ensure the image fits within the box
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
                              color: theme.palette.common.white,
                            }}
                          >
                            Click to Upload
                          </Typography>
                          <Typography
                            sx={{
                              textAlign: "center",
                              fontSize: "14px",
                              color: theme.palette.common.white,
                            }}
                          >
                            Upload only .png, .jpg, .jpeg files
                          </Typography>
                        </Grid>
                      </Grid>
                    </Box>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      fullWidth
                      disabled={isSubmitting}
                      sx={{ mt: 2 }}
                    >
                      {isSubmitting ? <CircularProgress size={24} /> : "Submit"}
                    </Button>
                  </Form>
                )}
              </Formik>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default GetInTouch;
