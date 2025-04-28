import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import frame1 from "../../../../assets/Technology/Backend/phython/Framework/django-logo.png";
import frame2 from "../../../../assets/Technology/Backend/phython/Framework/flask.svg";
import frame3 from "../../../../assets/Technology/Backend/phython/Framework/zope-icon.png";
import frame4 from "../../../../assets/Technology/Backend/phython/Framework/web2py.svg";
import frame5 from "../../../../assets/Technology/Backend/phython/Framework/pyramid.png";
import frame6 from "../../../../assets/Technology/Backend/phython/Framework/scrapy-icon.png";
import frame7 from "../../../../assets/Technology/Backend/phython/Framework/requests-icon.png";
import frame8 from "../../../../assets/Technology/Backend/phython/Framework/fabric-icon-1.png";
import frame9 from "../../../../assets/Technology/Backend/phython/Framework/pika-icon.png";

import data1 from "../../../../assets/Technology/Backend/phython/database/net-core-icon.png";
import data2 from "../../../../assets/Technology/Backend/phython/database/oracle-icon.png";
import data3 from "../../../../assets/Technology/Backend/phython/database/sqlite-icon.png";
import data4 from "../../../../assets/Technology/Backend/phython/database/ms-sql.svg";
import data5 from "../../../../assets/Technology/Backend/phython/database/mongo-db-icon.png";
import data6 from "../../../../assets/Technology/Backend/phython/database/postgre-icon.png";
import data7 from "../../../../assets/Technology/Backend/phython/database/redis-icon.png";

import tool1 from "../../../../assets/Technology/Backend/phython/tools/slack-icon.png";
import tool2 from "../../../../assets/Technology/Backend/phython/tools/asana-icon.png";
import tool3 from "../../../../assets/Technology/Backend/phython/tools/trello-icon.png";
import tool4 from "../../../../assets/Technology/Backend/phython/tools/jira-logo.png";


import palat1 from "../../../../assets/Technology/Backend/phython/platforms/numpy.png";
import palat2 from "../../../../assets/Technology/Backend/phython/platforms/celery.png";
import palat3 from "../../../../assets/Technology/Backend/phython/platforms/gunicorn-icon.png";
import palat4 from "../../../../assets/Technology/Backend/phython/platforms/numpy.png";
import palat5 from "../../../../assets/Technology/Backend/phython/platforms/pytest.png";


import { useTheme } from "@emotion/react";

function PhythonPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`horizontal-tabpanel-${index}`}
      aria-labelledby={`horizontal-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

PhythonPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `horizontal-tab-${index}`,
    "aria-controls": `horizontal-tabpanel-${index}`,
  };
}

export default function HorizontalTabs() {
  const theme = useTheme();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        margin: "auto",
        py: {
          xs: 4,
          sm: 4,
          lg: 8,
        },
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="Horizontal Tabs Example"
        variant="scrollable"
        scrollButtons="auto"
        textColor="secondary"
        indicatorColor="secondary"
        sx={{}}
      >
        <Tab
          label="Frameworks & Libraries"
          {...a11yProps(0)}
          sx={{
            textTransform: "capitalize",
            fontWeight: "600",
            flex: "1 1 25%",
            maxWidth: "25%",
            color: value === 0 ? theme.palette.secondary.main : "inherit",
          }}
        />
        <Tab
          label="Database"
          {...a11yProps(1)}
          sx={{
            textTransform: "capitalize",
            fontWeight: "600",
            flex: "1 1 25%",
            maxWidth: "25%",
            color: value === 1 ? theme.palette.secondary.main : "inherit",
          }}
        />
        <Tab
          label="Tools"
          {...a11yProps(2)}
          sx={{
            textTransform: "capitalize",
            fontWeight: "600",
            flex: "1 1 25%",
            maxWidth: "25%",
            color: value === 2 ? theme.palette.secondary.main : "inherit",
          }}
        />
        <Tab
          label="Platforms"
          {...a11yProps(3)}
          sx={{
            textTransform: "capitalize",
            fontWeight: "600",
            flex: "1 1 25%",
            maxWidth: "25%",
            color: value === 3 ? theme.palette.secondary.main : "inherit",
          }}
        />
      </Tabs>

      <Box
        sx={{
          flexGrow: 1,
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <PhythonPanel value={value} index={0}>
          <FrameWorkLibraries />
        </PhythonPanel>
        <PhythonPanel value={value} index={1}>
          <DataBase />
        </PhythonPanel>
        <PhythonPanel value={value} index={2}>
          <Tools />
        </PhythonPanel>
        <PhythonPanel value={value} index={3}>
          <Platform />
        </PhythonPanel>
      </Box>
    </Box>
  );
}

export const FrameWorkLibraries = () => {
  const frameworks = [
    { id: 1, name: "Django", image: frame1 },
    { id: 2, name: "Flask", image: frame2 },
    { id: 3, name: "Zope", image: frame3 },
    { id: 4, name: "Web2py", image: frame4 },
    { id: 5, name: "Pyramid", image: frame5 },
    { id: 6, name: "Scrapy", image: frame6 },
    { id: 7, name: "Requests", image: frame7 },
    { id: 8, name: "Fabric", image: frame8 },
    { id: 9, name: "Pika", image: frame9 },
  ];

  return (
    <Grid container spacing={3} justifyContent={"center"}>
      {frameworks.map((item) => (
        <Grid item xs={6} sm={6} md={3} lg={2} key={item.id}>
          <Box
            sx={{
              boxShadow: 1,
              width: "100%",
              height: "auto",
              p: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src={item.image}
              alt={item.name}
              style={{
                width: "50px",
                height: "50px",
                marginBottom: "8px",
              }}
            />
            <Typography
              sx={{
                fontSize: "14px",
                textAlign: "center",
              }}
            >
              {item.name}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export const DataBase = () => {
  const databases = [
    { id: 1, name: "MySQL", image: data1 },
    { id: 2, name: "Oracle", image: data2 },
    { id: 3, name: "SQLite", image: data3 },
    { id: 4, name: "MS SQL", image: data4 },
    { id: 5, name: "MongoDB", image: data5 },
    { id: 6, name: "Postgress", image: data6 },
    { id: 7, name: "Redis", image: data7 },
  ];

  return (
    <Grid
      container
      spacing={3}
      justifyContent={"center"}
      sx={{
        width: "100%",
      }}
    >
      {databases.map((item) => (
        <Grid item xs={6} sm={6} md={3} lg={3} key={item.id}>
          <Box
            sx={{
              boxShadow: 1,
              width: "100%",
              height: "auto",
              p: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src={item.image}
              alt={item.name}
              style={{
                width: "50px",
                height: "50px",
                marginBottom: "8px",
              }}
            />
            <Typography
              sx={{
                fontSize: "14px",
                textAlign: "center",
              }}
            >
              {item.name}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export const Tools = () => {
  const tools = [
    { id: 1, name: "Slack", image: tool1 },
    { id: 2, name: "Asana", image: tool2 },
    { id: 3, name: "Trello", image: tool3 },
    { id: 4, name: "Jira", image: tool4 },
  ];

  return (
    <Grid container spacing={7} justifyContent={"center"}>
      {tools.map((item) => (
        <Grid item xs={6} sm={6} md={3} lg={3} key={item.id}>
          <Box
            sx={{
              boxShadow: 1,
              width: "150px",
              height: "auto",
              p: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src={item.image}
              alt={item.name}
              style={{
                width: "50px",
                height: "50px",
                marginBottom: "8px",
              }}
            />
            <Typography
              sx={{
                fontSize: "14px",
                textAlign: "center",
              }}
            >
              {item.name}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export const Platform = () => {
  const platforms = [
    { id: 1, name: "Numpy", image: palat1 },
    { id: 2, name: "Celery", image: palat2 },
    { id: 3, name: "Gunicorn", image: palat3 },
    { id: 4, name: "Memcached", image: palat4 },
    { id: 5, name: "Pytest", image: palat5 },
   
  ];

  return (
    <Grid container spacing={6} justifyContent={"center"}>
      {platforms.map((item) => (
        <Grid item xs={6} sm={6} md={3} lg={3} key={item.id}>
          <Box
            sx={{
              boxShadow: 1,
              width: "100%",
              height: "auto",
              p: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src={item.image}
              alt={item.name}
              style={{
                width: "50px",
                height: "50px",
                marginBottom: "8px",
              }}
            />
            <Typography
              sx={{
                fontSize: "14px",
                textAlign: "center",
              }}
            >
              {item.name}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};
