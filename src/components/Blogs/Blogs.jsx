import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import { TitleAnimation } from "../../global/TitleAnimation";
import { Link } from "react-router-dom";
import { useBlogs } from "../../Context/BlogContext";

function Blogs() {
  const theme = useTheme();
  const { blogs } = useBlogs();
  const [openBlogId, setOpenBlogId] = React.useState(null);

  const handleReadMoreClick = (id) => {
    setOpenBlogId(openBlogId === id ? null : id);
  };

  const uniqueTechnologies = [...new Set(blogs.map((item) => item.technology))];

  const filterBlogsByTechnology = (tech) => {
    return blogs.find((blog) => blog.technology === tech);
  };

  return (
    <Box sx={{ py: { xs: 2, sm: 3, lg: 4 } }}>
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
            mb: 4,
            fontFamily: theme.typography.fontFamily,
          }}
        >
          <TitleAnimation title={`Our Blogs`} />
        </Box>
        <Grid
          container
          spacing={3}
          sx={{
            py: {
              xs: 4,
              sm: 4,
              lg: 6,
            },
          }}
        >
          {uniqueTechnologies.slice(0, 3).map((tech) => {
            const blog = filterBlogsByTechnology(tech);
            return (
              blog && (
                <Grid item xs={12} sm={12} md={6} lg={4} xl={4} key={blog._id}>
                  <Box
                    sx={{
                      boxShadow: 3,
                      p: 2,
                      borderBottom: `5px solid ${theme.palette.secondary.main}`,
                      borderRadius: "5px",
                      width: "100%",
                      height: "auto",
                      maxWidth: "100%",
                      marginBottom: 2,
                    }}
                    data-aos="zoom-in"
                    data-aos-duration="2000"
                  >
                    <Link to={`/blogs/${blog._id}`}>
                      <Box
                        onClick={() => handleReadMoreClick(blog._id)}
                        sx={{
                          color: theme.palette.black,
                          "&:hover": {
                            backgroundColor: theme.palette.white,
                          },
                          height: "100%",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                        }}
                      >
                        <Box sx={{ flex: 1 }}>
                          <img
                            src={blog.blogImage}
                            alt="blog-image"
                            style={{
                              width: "100%",
                              height: "auto",
                              borderRadius: "5px",
                            }}
                          />
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            py: 2,
                          }}
                        >
                          <Box
                            sx={{
                              backgroundColor: theme.palette.secondary.main,
                              color: theme.palette.white,
                              p: "4px",
                              borderRadius: "5px",
                              fontSize: "14px",
                            }}
                          >
                            {blog.technology}
                          </Box>
                          <Box>
                            <Typography
                              sx={{
                                color: theme.palette.secondary.main,
                                fontSize: "14px",
                              }}
                            >
                              {new Date(blog.date).toLocaleDateString("en-GB", {
                                day: "numeric",
                                month: "short",
                              })}
                            </Typography>
                          </Box>
                        </Box>
                        <Box>
                          <Typography
                            sx={{
                              color: theme.palette.lightWhite,
                              fontSize: "14px",
                              py: 1,
                              fontWeight: "600",
                            }}
                          >
                            {blog.blogTitle}
                          </Typography>
                          {openBlogId === blog._id && (
                            <Typography
                              sx={{
                                color: theme.palette.secondary.main,
                                fontSize: "14px",
                                fontWeight: "400",
                                py: 1,
                              }}
                            >
                              {blog.blogDescription}
                            </Typography>
                          )}
                        </Box>
                      </Box>
                    </Link>
                  </Box>
                </Grid>
              )
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}

export default Blogs;
