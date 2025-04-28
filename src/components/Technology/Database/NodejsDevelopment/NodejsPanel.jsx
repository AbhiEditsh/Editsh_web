import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import frame1 from "../../../../assets/Technology/Backend/Nodejs/frame work/koa-js-icon.png";
import frame2 from "../../../../assets/Technology/Backend/Nodejs/frame work/express-js.webp";
import frame3 from "../../../../assets/Technology/Backend/Nodejs/frame work/meterjs-icon.png";
import frame4 from "../../../../assets/Technology/Backend/Nodejs/frame work/socket-icon.png";
import frame5 from "../../../../assets/Technology/Backend/Nodejs/frame work/babel-icon.png";
import frame6 from "../../../../assets/Technology/Backend/Nodejs/frame work/hapi-icon.png";
import frame7 from "../../../../assets/Technology/Backend/Nodejs/frame work/webpack-icon.png";
import frame8 from "../../../../assets/Technology/Backend/Nodejs/frame work/nest-js-icon.png";
import frame9 from "../../../../assets/Technology/Backend/Nodejs/frame work/sequlize-icon.png";
import frame10 from "../../../../assets/Technology/Backend/Nodejs/frame work/loopback-icon.png";


import data1 from "../../../../assets/Technology/Backend/Nodejs/database/mongo-db-icon.png";
import data2 from "../../../../assets/Technology/Backend/Nodejs/database/mariadb-icon.png";
import data3 from "../../../../assets/Technology/Backend/Nodejs/database/redis-icon.png";
import data4 from "../../../../assets/Technology/Backend/Nodejs/database/dynamodb-icon.png";
import data5 from "../../../../assets/Technology/Backend/Nodejs/database/postgre-icon.png";


import tool1 from "../../../../assets/Technology/Backend/Nodejs/tools/jirs-icon.png";
import tool2 from "../../../../assets/Technology/Backend/Nodejs/tools/slack-icon.png";
import tool3 from "../../../../assets/Technology/Backend/Nodejs/tools/aqtime-icon.png";
import tool4 from "../../../../assets/Technology/Backend/Nodejs/tools/trello-icon.png";

import palat1 from "../../../../assets/Technology/Backend/Nodejs/plateform/nodejs-icon.png";
import palat2 from "../../../../assets/Technology/Backend/Nodejs/plateform/javascript-icon.png";
import palat3 from "../../../../assets/Technology/Backend/Nodejs/plateform/typescript-icon.png";
import palat4 from "../../../../assets/Technology/Backend/Nodejs/plateform/ecma-script-icon.png";


import { useTheme } from "@emotion/react";

function NodejsPanel(props) {
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

NodejsPanel.propTypes = {
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
        <NodejsPanel value={value} index={0}>
          <FrameWorkLibraries />
        </NodejsPanel>
        <NodejsPanel value={value} index={1}>
          <DataBase />
        </NodejsPanel>
        <NodejsPanel value={value} index={2}>
          <Tools />
        </NodejsPanel>
        <NodejsPanel value={value} index={3}>
          <Platform />
        </NodejsPanel>
      </Box>
    </Box>
  );
}

export const FrameWorkLibraries = () => {
  const frameworks = [
    { id: 1, name: "Koa.Js", image: frame1 },
    { id: 2, name: "Express.Js", image: frame2 },
    { id: 3, name: "Meteor", image: frame3 },
    { id: 4, name: "Socket.Io", image: frame4 },
    { id: 5, name: "Babel", image: frame5 },
    { id: 6, name: "Hapi.JS", image: frame6 },
    { id: 7, name: "Webpack", image: frame7 },
    { id: 8, name: "Nest.Js", image: frame8 },
    { id: 9, name: "Sequelize", image: frame9 },
    { id: 10, name: "LoopBack", image: frame10 },
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
    { id: 1, name: "MongoDB", image: data1 },
    { id: 2, name: "MariaDB", image: data2 },
    { id: 3, name: "Reddis", image: data3 },
    { id: 4, name: "DynamoDB", image: data4 },
    { id: 5, name: "PostgreSQL", image: data5 },
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
    { id: 1, name: "Jira", image: tool1 },
    { id: 2, name: "Slack", image: tool2 },
    { id: 3, name: "AQtime", image: tool3 },
    { id: 4, name: "Trello", image: tool4 },
  ];

  return (
    <Grid container spacing={7} justifyContent={"center"}>
      {tools.map((item) => (
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

export const Platform = () => {
  const platforms = [
    { id: 1, name: "Node.Js", image: palat1 },
    { id: 2, name: "Java Script", image: palat2 },
    { id: 3, name: "Typescript", image: palat3 },
    { id: 4, name: "ECMA Script", image: palat4 },
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
