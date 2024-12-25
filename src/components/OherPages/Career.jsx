import React, { useEffect, useRef, useState } from "react";
import Pagetitle from "../../global/Pagetitle";
import { Box, Container, Button, Grid, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import ci1 from "../../assets/Career/ci1.svg";
import ci2 from "../../assets/Career/ci2.svg";
import ci3 from "../../assets/Career/ci3.svg";
import ci4 from "../../assets/Career/ci4.svg";
import ci5 from "../../assets/Career/ci5.svg";
import ci6 from "../../assets/Career/ci6.svg";
import { Titleanimation } from "../../global/Titleanimation";
import UploadCvForm from "../../global/UploadCvForm";
import axios from "axios";
import SEO from "../../global/SEO/SEO";

const hiringSteps = [
  {
    id: 1,
    title: "Identify the hiring need",
    description: `We're searching for qualified people to join our group. Should be
                  gifted in cooperation, critical thinking, and programming
                  advancement. Requires broad comprehension of programming
                  dialects and structures. The best candidates are adaptable,
                  imaginative, and focused on creating prevalent arrangements.
                  Go along with us for a dynamic and invigorating air that you
                  might add to state-of-the-art projects.`,
    icon: ci1,
  },
  {
    id: 2,
    title: "Write a job description",
    description: `To join our group, we are searching for a serious programming engineer.
     You will work with cross-utilitarian groups to deliver top-notch arrangements while being 
     accountable for creating, making, and changing programming applications. Solid programming
      abilities, critical thinking abilities, and a longing to stay aware of industry changes are 
      characteristics that characterize ideal candidates.`,
    icon: ci2,
  },
  {
    id: 3,
    title: "Source candidates",
    description: `Track down the top possibilities by decisively joining organizing, web channels, 
    and industry suggestions. Make sets of responsibilities, collaborate with candidates, and complete
     thorough assessments to match abilities and culture. Use proactive enlistment methods to captivate 
     the best people, guaranteeing major areas of strength for a business extension.`,
    icon: ci3,
  },
  {
    id: 4,
    title: "Screen candidates",
    description: `Specialized tests, coding difficulties, and social meetings ought to be generally
     used to assess candidates for programming work. Assessment of coding information, collaboration 
     and critical thinking skills. To guarantee a durable and proficient group, pick individuals who 
     show major areas of strength for programming improvement, effective correspondence, and excitement 
     for development.`,
    icon: ci4,
  },
  {
    id: 5,
    title: " Interview candidates",
    description: `Split down the gathering of new kids in town completely. Investigate your particular
     power, your definitive ability to think, and your social fit. Get some data about related commitments 
     to study adaptability and collaboration. Find contenders who are sensible with our affiliation's 
     convictions and can focus on our improvement endeavours from beginning to end.`,
    icon: ci5,
  },
  {
    id: 6,
    title: "Make an offer",
    description: `Get accomplished with our exceptional arrangements! Experience particular arrangements
     that are expertly created to propel your organization. Our group's skill guarantees imaginative results,
      and the bother-free mix gives a smooth change. Acknowledge its significance now to encounter the change 
      for yourself. With us, your example of overcoming adversity starts.`,
    icon: ci6,
  },
];

function Career() {
  const [technology, setTechnology] = useState([]);
  const theme = useTheme();
  const uploadCvRef = useRef(null);
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

  const scrollToUploadCvForm = () => {
    uploadCvRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <SEO title="Career - Best It Company" />
      <Pagetitle
        title={`Career`}
        description={`
        We are Surat-based IT Solution Providers committed to providing the best services for the growth of our valuable clients and their varied businesses.`}
      />

      <Box
        sx={{
          m: {
            xs: 4,
            sm: 4,
            lg: 10,
          },
        }}
      >
        <Titleanimation title="Our Hiring Process" />
        <Grid
          container
          rowSpacing={1}
          sx={{
            mt: {
              xs: 4,
              sm: 4,
              lg: 10,
            },
          }}
        >
          {hiringSteps.map((step) => (
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={4}
              key={step.id}
              sx={{ border: `1px dotted ${theme.palette.secondary.main}` }}
              data-aos="zoom-in"
              data-aos-duration="2000"
            >
              <Box sx={{ p: 3 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Box>
                    <img
                      src={step.icon}
                      alt={`career_icon_${step.id}`}
                      style={{
                        width: "80px",
                        height: "80px",
                      }}
                    />
                  </Box>
                  <Box
                    sx={{
                      fontSize: "50px",
                      fontWeight: "bold",
                      color: theme.palette.lightwhite,
                      fontFamily: '"Rubik Vinyl", system-ui',
                    }}
                  >
                    {`0${step.id}`}
                  </Box>
                </Box>
                <Typography
                  sx={{
                    color: theme.palette.lightwhite,
                    fontSize: "20px",
                    fontWeight: "600",
                    py: 1,
                  }}
                >
                  {step.title}
                </Typography>
                <Typography
                  sx={{
                    color: theme.palette.secondary.main,
                    fontSize: "14px",
                  }}
                >
                  {step.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box
        sx={{
          py: {
            xs: 4,
            sm: 4,
            lg: 10,
            backgroundColor: theme.palette.primary.main,
          },
        }}
      >
        <Container>
          <Grid
            container
            row
            spacing={3}
            sx={{
              py: {
                xs: 4,
                lg: 6,
              },
            }}
          >
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              xl={6}
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <img
                src="https://i.postimg.cc/tg6hWTZW/Happy-Janmastami-1.png"
                alt="CareerImage"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{ fontSize: "30px", color: theme.palette.black }}
                  >
                    &#9672;
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      color: theme.palette.secondary.main,
                      fontWeight: "700",
                      lineHeight: "34px",
                      ml: 1,
                      textTransform: "uppercase",
                    }}
                  >
                    Why Join Our Team?
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    fontSize: "26px",
                    color: theme.palette.black,
                    fontFamily: theme.typography.fontFamily,
                    letterSpacing: "1px",
                    fontWeight: "700",
                    py: 2,
                    lineHeight: "34px",
                  }}
                  data-aos="fade-left"
                  data-aos-duration="2000"
                >
                  There are many reasons why you might want to join the Settings
                  Infotech team. Here are a few
                </Typography>
                <Box data-aos="fade-left" data-aos-duration="2000">
                  <Typography
                    sx={{
                      fontSize: "14px",
                      pb: 2,
                      color: theme.palette.lightwhite,
                    }}
                  >
                    We are a fast-paced and dynamic company. We are always
                    looking for new ways to improve our products and services,
                    and we need talented individuals who are up for the
                    challenge.
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      pb: 2,
                      color: theme.palette.lightwhite,
                    }}
                  >
                    We offer competitive salaries and benefits. We want to make
                    sure that our team members are happy and well-compensated
                    for their work.
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      pb: 2,
                      color: theme.palette.lightwhite,
                    }}
                  >
                    We have a great culture. We believe that a positive and
                    supportive work environment is essential to success.
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      pb: 2,
                      color: theme.palette.lightwhite,
                    }}
                  >
                    We are always learning and growing. We offer opportunities
                    for our team members to learn new skills and grow their
                    careers.
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      pb: 2,
                      color: theme.palette.lightwhite,
                    }}
                  >
                    If you are looking for a challenging and rewarding career in
                    software development, then Settings Infotech is the perfect
                    place for you. We encourage you to apply today!
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box
        sx={{
          py: {
            xs: 4,
          },
        }}
      >
        <Titleanimation title="Current Open Position" />
        <Box
          sx={{
            py: {
              sm: 2,
              xs: 4,
              lg: 6,
            },
          }}
        >
          <Container>
            <Grid
              container
              spacing={3}
              sx={{
                justifyContent: "center",
              }}
            >
              {technology.map((tech) => (
                <Grid item xs={12} sm={12} md={6} lg={4} xl={3} key={tech.id}>
                  <Box
                    sx={{
                      border: "1px solid #f1f1f1",
                      borderRadius: 2,
                      p: 2,
                      transition: "box-shadow 0.3s ease-in-out",
                      "&:hover": {
                        boxShadow: "rgba(0, 0, 0, 0.3) 0px 10px 20px",
                        cursor: "pointer",
                      },
                    }}
                    data-aos="zoom-in"
                    data-aos-duration="2000"
                  >
                    <Box
                      sx={{
                        width: "60px",
                        height: "60px",
                        margin: "auto",
                        borderRadius: "50%",
                        p: 1,
                        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={tech.LanguagesLogo}
                        alt="language_logo"
                        style={{
                          width: "60px",
                          height: "60px",
                          padding: "14px",
                        }}
                      />
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          fontSize: "20px",
                          fontWeight: "600",
                          textAlign: "center",
                          py: 2,
                        }}
                      >
                        {tech.LanguagesName}
                      </Typography>
                    </Box>
                    <Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          fontSize: "16px",
                          color: theme.palette.lightwhite,
                        }}
                      >
                        <Box
                          sx={{
                            fontWeight: "500",
                            color: theme.palette.lightwhite,
                          }}
                        >
                          Experience:
                        </Box>
                        <Box sx={{ color: theme.palette.secondary.main }}>
                          {tech.Experience}
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          fontSize: "16px",
                          color: theme.palette.lightwhite,
                        }}
                      >
                        <Box
                          sx={{
                            fontWeight: "500",
                            color: theme.palette.lightwhite,
                          }}
                        >
                          No. of Openings:
                        </Box>
                        <Box sx={{ color: theme.palette.secondary.main }}>
                          {tech.Openings}
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          fontSize: "16px",
                          color: theme.palette.lightwhite,
                        }}
                      >
                        <Box
                          sx={{
                            fontWeight: "500",
                            color: theme.palette.lightwhite,
                          }}
                        >
                          Qualifications:
                        </Box>
                        <Box sx={{ color: theme.palette.secondary.main }}>
                          {tech.Qualification}
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          mt: 4,
                          justifyContent: "center",
                          display: "flex",
                        }}
                      >
                        <Button
                          onClick={scrollToUploadCvForm}
                          sx={{
                            border: `1px dotted ${theme.palette.secondary.main}`,
                            padding: "6px 10px",
                            borderRadius: "50px",
                            color: theme.palette.secondary.main,
                            fontWeight: "bold",
                            textDecoration: "none",
                            fontSize: "13px",
                            display: "block",
                          }}
                        >
                          Apply now
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </Box>

      <Box
        sx={{
          py: {
            xs: 4,
            sm: 4,
            lg: 6,

            backgroundColor: theme.palette.primary.main,
          },
        }}
      >
        <Container>
          <Titleanimation title="Apply For Job" />
          <Box
            ref={uploadCvRef}
            sx={{
              py: {
                xs: 2,
                sm: 4,
              },
            }}
          >
            <Grid
              container
              row
              justifyContent="center"
              alignItems="center"
              sx={{
                borderRadius: "14px",
              }}
            >
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={6}
                data-aos="fade-right"
                data-aos-duration="2000"
              >
                <Box>
                  <img
                    src="https://i.postimg.cc/CxDpWdhP/Happy-Janmastami.png"
                    alt="job_images"
                  />
                </Box>
              </Grid>

              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={6}
                data-aos="zoom-in"
                data-aos-duration="2000"
              >
                <UploadCvForm />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Career;
