// Blogs.js
import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Titleanimation } from "../../global/Titleanimation";
import { Link } from "react-router-dom";
import { useBlogs } from "../../Context/BlogContext";

function Blogs() {
  const theme = useTheme();
  const { blogs } = useBlogs();
  console.log(blogs);
  const [openBlogId, setOpenBlogId] = React.useState(null);

  const handleReadMoreClick = (id) => {
    setOpenBlogId(openBlogId === id ? null : id);
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
          <Titleanimation title={`Our Blogs`} />
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
          {blogs.map((blog) => (
            <Grid item xs={12} sm={12} md={6} lg={4} xl={4} key={blog.id}>
              <Box
                sx={{
                  boxShadow: 1,
                  p: 2,
                  borderBottom: `2px solid ${theme.palette.secondary.main}`,
                  borderRadius: "5px",
                }}
              >
                <Box>
                  <img
                    src={blog.blogImage}
                    alt="blog-image"
                    style={{
                      borderRadius: "5px",
                      height: "200px",
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
                  <Box>
                    <Button
                      sx={{
                        backgroundColor: theme.palette.secondary.main,
                        color: theme.palette.main,
                      }}
                    >
                      {blog.technology}
                    </Button>
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        color: theme.palette.secondary.main,
                        fontSize: "14px",
                      }}
                    >
                      {new Date(blog.date).toLocaleDateString()}
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      color: theme.palette.lightwhite,
                      fontSize: "16px",
                      fontWeight: "600",
                      py: 1,
                    }}
                  >
                    {blog.blogTitle}
                  </Typography>
                  {openBlogId === blog.id && (
                    <Typography
                      sx={{
                        color: theme.palette.secondary.main,
                        fontSize: "13px",
                        fontWeight: "400",
                        py: 1,
                      }}
                    >
                      {blog.blogDescription}
                    </Typography>
                  )}
                </Box>
                <Box>
                  <Link to={`/blogs/${blog._id}`}>
                    <Button
                      endIcon={
                        <ArrowForwardIcon
                          sx={{
                            color: theme.palette.secondary.main,
                          }}
                        />
                      }
                      onClick={() => handleReadMoreClick(blog._id)}
                      sx={{
                        color: theme.palette.black,
                        "&:hover": {
                          backgroundColor: theme.palette.white,
                        },
                      }}
                    >
                      {openBlogId === blog._id ? "Show Less" : "Read More"}
                    </Button>
                  </Link>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Blogs;
