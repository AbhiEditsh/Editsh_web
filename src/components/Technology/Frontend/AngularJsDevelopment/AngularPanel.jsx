import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import frame1 from "../../../../assets/Technoogy/front/angular/Framework/angular-icon.png";
import frame2 from "../../../../assets/Technoogy/front/angular/Framework/core-ui-icon.png";
import frame3 from "../../../../assets/Technoogy/front/angular/Framework/cypress-icon.png";
import frame4 from "../../../../assets/Technoogy/front/angular/Framework/fuse-icon.png";
import frame5 from "../../../../assets/Technoogy/front/angular/Framework/prime-ng.png";
import frame6 from "../../../../assets/Technoogy/front/angular/Framework/redux-icon.png";
import frame7 from "../../../../assets/Technoogy/front/angular/Framework/storybook-icon.png";
import frame8 from "../../../../assets/Technoogy/front/angular/Framework/total-js-icon.png";
import frame9 from "../../../../assets/Technoogy/front/angular/Framework/wordpress-icon.png";
import data1 from "../../../../assets/Technoogy/front/angular/Database/dynamodb-icon.png";
import data2 from "../../../../assets/Technoogy/front/angular/Database/graph-ql-icon.png";
import data3 from "../../../../assets/Technoogy/front/angular/Database/mongo-db-icon.png";
import data4 from "../../../../assets/Technoogy/front/angular/Database/mysql-icon.png";
import data5 from "../../../../assets/Technoogy/front/angular/Database/postgre-icon.png";
import tool1 from "../../../../assets/Technoogy/front/angular/Tools/adobe-xd-icon.png";
import tool2 from "../../../../assets/Technoogy/front/angular/Tools/jirs-icon.png";
import tool3 from "../../../../assets/Technoogy/front/angular/Tools/slack-icon.png";
import tool4 from "../../../../assets/Technoogy/front/angular/Tools/trello-icon.png";
import tool5 from "../../../../assets/Technoogy/front/angular/Tools/zepline-icon.png";
import palat1 from "../../../../assets/Technoogy/front/angular/platforms/firebase-icon.png";
import palat2 from "../../../../assets/Technoogy/front/angular/platforms/docker-icon.png";
import palat3 from "../../../../assets/Technoogy/front/angular/platforms/azure-icon.png";
import palat4 from "../../../../assets/Technoogy/front/angular/platforms/heroku-icon.png";
import palat5 from "../../../../assets/Technoogy/front/angular/platforms/aws-lamda-icon.png";
import { useTheme } from "@emotion/react";

function AngularPanel(props) {
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

AngularPanel.propTypes = {
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
        <AngularPanel value={value} index={0}>
          <FrameWorkLibraries />
        </AngularPanel>
        <AngularPanel value={value} index={1}>
          <DataBase />
        </AngularPanel>
        <AngularPanel value={value} index={2}>
          <Tools />
        </AngularPanel>
        <AngularPanel value={value} index={3}>
          <Platform />
        </AngularPanel>
      </Box>
    </Box>
  );
}

export const FrameWorkLibraries = () => {
  const frameworks = [
    { id: 1, name: "AngularJS", image: frame1 },
    { id: 2, name: "Core UI", image: frame2 },
    { id: 3, name: "Cypress", image: frame3 },
    { id: 4, name: "Fuse", image: frame4 },
    { id: 5, name: "PrimeNG", image: frame5 },
    { id: 6, name: "Redux", image: frame6 },
    { id: 7, name: "Storybook", image: frame7 },
    { id: 8, name: "Total.Js", image: frame8 },
    { id: 9, name: "Wordpress", image: frame9 },
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
    { id: 1, name: "DynamoDB", image: data1 },
    { id: 2, name: "GraphQL", image: data2 },
    { id: 3, name: "MongoDB", image: data3 },
    { id: 4, name: "MySQL", image: data4 },
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
    { id: 1, name: "Adobe XD", image: tool1 },
    { id: 2, name: "Slack", image: tool2 },
    { id: 3, name: "Trello", image: tool3 },
    { id: 4, name: "Zeplin", image: tool4 },
    { id: 5, name: "JIRA", image: tool5 },
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
    { id: 1, name: "Firebase", image: palat1 },
    { id: 2, name: "Docker", image: palat2 },
    { id: 3, name: "Azure", image: palat3 },
    { id: 4, name: "Heroku", image: palat4 },
    { id: 5, name: "AWS Lambda", image: palat5 },
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
