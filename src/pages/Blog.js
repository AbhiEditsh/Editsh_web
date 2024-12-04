import React from "react";
import Pagetitle from "../global/Pagetitle";
import {
  Box,
  Container,
  Grid,
  Typography,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";
import { useBlogs } from "../Context/BlogContext";
import { useTheme } from "@emotion/react";
import { Link } from "react-router-dom";
import SEO from "../global/SEO/SEO";

function Blog() {
  const { blogs } = useBlogs();
  const theme = useTheme();
  const [openBlogId, setOpenBlogId] = React.useState(null);
  const [selectedTechnology, setSelectedTechnology] = React.useState("");

  const uniqueTechnologies = [...new Set(blogs.map((item) => item.technology))];

  const filteredBlogs = selectedTechnology
    ? blogs.filter((blog) => blog.technology === selectedTechnology)
    : blogs;

  const handleReadMoreClick = (id) => {
    setOpenBlogId(openBlogId === id ? null : id);
  };

  return (
    <>
      <SEO title="Blog at Editsh - Let's Share Some Facts and Solutions" />
      <Pagetitle
        title={`Blogs`}
        description={`
        We are Surat-based IT Solution Providers committed to providing the best services for the growth of our valuable clients and their varied businesses.`}
      />
      <Container>
        {/* Dropdown Filter */}

        <Grid
          container
          sx={{
            display: "flex",
            py: {
              xs: 2,
              md: 4,
            },
            justifyContent: {
              xs: "center",
              sm: "center",
              md: "end",
            },
          }}
        >
          <Grid item xs={12} sm={6} md={2} lg={3}>
            <FormControl fullWidth variant="outlined">
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                  gap: 2,
                }}
              >
                <Box>
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 700,
                    }}
                  >
                    Blog Category:
                  </Typography>
                </Box>
                <Box>
                  <Select
                    labelId="technology-select-label"
                    id="technology"
                    name="technology"
                    value={selectedTechnology}
                    size="small"
                    onChange={(e) => setSelectedTechnology(e.target.value)}
                    displayEmpty
                    MenuProps={{
                      PaperProps: {
                        style: {
                          maxHeight: 120,
                          overflowY: "auto",
                          padding: 0,
                        },
                      },
                    }}
                    InputLabelProps={{
                      style: { color: theme.palette.secondary.main },
                    }}
                    sx={{
                      width: "150px",
                    }}
                  >
                    <MenuItem value="">
                      <em>All</em>
                    </MenuItem>
                    {uniqueTechnologies.map((tech) => (
                      <MenuItem
                        key={tech}
                        value={tech}
                        style={{ fontSize: "0.875rem", padding: "8px 16px" }}
                      >
                        {tech}
                      </MenuItem>
                    ))}
                  </Select>
                </Box>
              </Box>
            </FormControl>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={3}
          sx={{
            py: {
              sm: 3,
              md: 3,
              lg: 5,
            },
          }}
        >
          {filteredBlogs.map((blog) => (
            <Grid item xs={12} sm={12} md={6} lg={4} xl={4} key={blog.id}>
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
                          height: "200px",
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
                      <Box>
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
                          color: theme.palette.lightwhite,
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
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default Blog;
