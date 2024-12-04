import React, { useState, useEffect } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Grid,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Collapse,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { NavLink } from "react-router-dom";
import logo from "../assets/footer/logo.png";
import { useTheme, useMediaQuery } from "@mui/material";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [mobileExpandedCategory, setMobileExpandedCategory] = useState(null);
  //eslint-disable-next-line
  const [expandedSubCategories, setExpandedSubCategories] = useState({});
  const [mobileExpandedSubCategories, setMobileExpandedSubCategories] =
    useState({});
  const [currentMenu, setCurrentMenu] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleSubMenuOpen = (event, menuIndex) => {
    setAnchorEl(event.currentTarget);
    setCurrentMenu(menuIndex);
  };

  const handleSubMenuClose = () => {
    setAnchorEl(null);
    setCurrentMenu(null);
  };
  //eslint-disable-next-line
  const toggleExpandCategory = (category) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  const toggleMobileExpandCategory = (category) => {
    setMobileExpandedCategory(
      mobileExpandedCategory === category ? null : category
    );
  };
  //eslint-disable-next-line
  const toggleSubCategoryExpand = (category, subCategory) => {
    setExpandedSubCategories((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [subCategory]: !prev[category]?.[subCategory],
      },
    }));
  };

  const toggleMobileSubCategoryExpand = (category, subCategory) => {
    setMobileExpandedSubCategories((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [subCategory]: !prev[category]?.[subCategory],
      },
    }));
  };


  const menuItems = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    {
      label: "Technology",
      to: "/technology",
      subItems: [
        {
          category: "App Development",
          items: [
            {
              label: "React Native Development",
              to: "/mobile/reactNativeAppDevelopment",
            },
            {
              label: "Flutter Development",
              to: "/mobile/FlutterAppDevelopment",
            },
            { label: "iOS Development", to: "/mobile/iosAppDevelopment" },
            {
              label: "Android Development",
              to: "/mobile/androidAppDevelopment",
            },
          ],
        },
        {
          category: "Web Development",
          items: [
            {
              label: "React JS Development",
              to: "/frontend/reactJsDevelopment",
            },
            {
              label: "Angular Development",
              to: "/frontend/angularJsDevelopment",
            },
            { label: "Vue JS Development", to: "/frontend/vueJsDevelopment" },
          ],
        },
        {
          category: "Backend Development",
          items: [
            { label: "Node.js Development", to: "/backend/nodejsDevelopment" },
            { label: ".NET Development", to: "/backend/netDevelopment" },
            { label: "Python Development", to: "/backend/pythonDevelopment" },
          ],
        },
      ],
    },
    { label: "Portfolio", to: "/portfolio" },
    { label: "Client", to: "/client" },
    { label: "Career", to: "/career" },
    { label: "Blog", to: "/blogs" },
    { label: "Contact Us", to: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <AppBar
        sx={{
          position: "fixed",
          backgroundColor: scrolled ? "black" : "transparent",
          boxShadow: 0,
          transition: "background-color 0.5s",
        }}
      >
        <Toolbar>
          <Box
            sx={{ width: "100%" }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                  mr: 2,
                  flexGrow: 1,
                }}
              >
                <NavLink to={"/"}>
                  <Box className="logo-inner">
                    <img src={logo} alt="Logo" height="70px" width="42%" />
                  </Box>
                </NavLink>
              </Typography>
              {/* Mobile Menu Toggle */}
              <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="menu"
                  onClick={toggleMobileMenu}
                  sx={{
                    color: theme.palette.white,
                  }}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
              {/* Desktop Menu */}
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  justifyContent: "flex-end",
                  alignItems: "center",
                }}
              >
                {menuItems.map((item, index) => {
                  if (item.subItems) {
                    return (
                      <Box key={index}>
                        <Typography
                          onMouseEnter={(e) => handleSubMenuOpen(e, index)}
                          onClick={(e) => handleSubMenuOpen(e, index)}
                          sx={{
                            mx: 1.5,
                            color: theme.palette.white,
                            display: "flex",
                            alignItems: "center",
                            fontWeight: "500",
                            fontSize: "15px",
                            cursor: "pointer",
                            transition: "0.5s",
                            "&:hover": {
                              color: theme.palette.secondary.main,
                            },
                          }}
                        >
                          {item.label}
                          <ArrowDropDownIcon />
                        </Typography>
                        <Menu
                          anchorEl={anchorEl}
                          open={Boolean(anchorEl) && currentMenu === index}
                          onClose={handleSubMenuClose}
                          MenuListProps={{
                            onMouseLeave: handleSubMenuClose,
                          }}
                          sx={{ mt: 2 }}
                        >
                          <Box
                            sx={{
                              padding: 2,
                              backgroundColor: theme.palette.background.default,
                            }}
                          >
                            <Grid container spacing={2}>
                              {item.subItems.map((subItem, subIndex) => (
                                <Grid item xs={12} md={4} key={subIndex}>
                                  <Typography
                                    variant="subtitle1"
                                    sx={{ fontWeight: "bold", mb: 1 }}
                                  >
                                    {subItem.category}
                                  </Typography>
                                  {subItem.items.map(
                                    (nestedItem, nestedIndex) => (
                                      <NavLink
                                        key={nestedIndex}
                                        to={nestedItem.to}
                                        style={{ textDecoration: "none" }}
                                      >
                                        <MenuItem
                                          sx={{
                                            fontSize: "14px",
                                            paddingLeft: 1,
                                            color: theme.palette.text.primary,
                                            "&:hover": {
                                              color:
                                                theme.palette.secondary.main,
                                            },
                                          }}
                                          onClick={handleSubMenuClose}
                                        >
                                          {nestedItem.label}
                                        </MenuItem>
                                      </NavLink>
                                    )
                                  )}
                                </Grid>
                              ))}
                            </Grid>
                          </Box>
                        </Menu>
                      </Box>
                    );
                  } else {
                    return (
                      <NavLink
                        key={index}
                        to={item.to}
                        style={{ textDecoration: "none" }}
                      >
                        <Typography
                          sx={{
                            mx: 1.5,
                            color: theme.palette.white,
                            display: "block",
                            fontWeight: "500",
                            fontSize: "15px",
                            transition: "0.5s",
                            "&:hover": {
                              color: theme.palette.secondary.main,
                            },
                          }}
                        >
                          {item.label}
                        </Typography>
                      </NavLink>
                    );
                  }
                })}
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        sx={{ "& .MuiDrawer-paper": { width: "250px" } }}
      >
        <Box
          sx={{
            width: 250,
          }}
          role="presentation"
        >
          <List>
            {menuItems.map((item, index) => {
              if (item.subItems) {
                return (
                  <Box key={index}>
                    <ListItem
                      button
                      onClick={() => toggleMobileExpandCategory(item.label)}
                    >
                      <ListItemText primary={item.label} />
                      {mobileExpandedCategory === item.label ? (
                        <ExpandLess />
                      ) : (
                        <ExpandMore />
                      )}
                    </ListItem>
                    <Collapse
                      in={mobileExpandedCategory === item.label}
                      timeout="auto"
                      unmountOnExit
                    >
                      <List component="div" disablePadding>
                        {item.subItems.map((subItem, subIndex) => (
                          <Box key={subIndex}>
                            <ListItem
                              button
                              onClick={() =>
                                toggleMobileSubCategoryExpand(
                                  item.label,
                                  subItem.category
                                )
                              }
                            >
                              <ListItemText
                                primary={
                                  <Box
                                    sx={{
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "space-between",
                                    }}
                                  >
                                    <Typography
                                      sx={{ ml: 1, fontWeight: "bold" }}
                                    >
                                      {subItem.category}
                                    </Typography>
                                    {isMobile && (
                                      <IconButton
                                        onClick={() =>
                                          toggleMobileSubCategoryExpand(
                                            item.label,
                                            subItem.category
                                          )
                                        }
                                      >
                                        {mobileExpandedSubCategories[
                                          item.label
                                        ]?.[subItem.category] ? (
                                          <RemoveIcon />
                                        ) : (
                                          <AddIcon />
                                        )}
                                      </IconButton>
                                    )}
                                  </Box>
                                }
                              />
                            </ListItem>
                            <Collapse
                              in={
                                mobileExpandedSubCategories[item.label]?.[
                                  subItem.category
                                ]
                              }
                              timeout="auto"
                              unmountOnExit
                            >
                              <List component="div" disablePadding>
                                {subItem.items.map(
                                  (nestedItem, nestedIndex) => (
                                    <NavLink
                                      key={nestedIndex}
                                      to={nestedItem.to}
                                      style={{ textDecoration: "none" }}
                                    >
                                      <ListItem button sx={{ ml: 1 }}>
                                        <ListItemText
                                          primary={nestedItem.label}
                                        />
                                      </ListItem>
                                    </NavLink>
                                  )
                                )}
                              </List>
                            </Collapse>
                          </Box>
                        ))}
                      </List>
                    </Collapse>
                  </Box>
                );
              } else {
                return (
                  <NavLink
                    key={index}
                    to={item.to}
                    style={{ textDecoration: "none" }}
                  >
                    <ListItem button>
                      <ListItemText primary={item.label} />
                    </ListItem>
                  </NavLink>
                );
              }
            })}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
