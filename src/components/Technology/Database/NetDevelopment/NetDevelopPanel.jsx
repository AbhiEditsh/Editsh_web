import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import frame1 from "../../../../assets/Technology/Backend/net/framework/net-icon.png";
import frame2 from "../../../../assets/Technology/Backend/net/framework/net-core-icon.png";
import frame3 from "../../../../assets/Technology/Backend/net/framework/xamarin-icon.svg";
import frame4 from "../../../../assets/Technology/Backend/net/framework/adonet.svg";
import frame5 from "../../../../assets/Technology/Backend/net/framework/wcf.svg";
import frame6 from "../../../../assets/Technology/Backend/net/framework/uwp-icon.svg";
import frame7 from "../../../../assets/Technology/Backend/net/framework/windows-forms.svg";
import frame8 from "../../../../assets/Technology/Backend/net/framework/wcf.svg";

import lang1 from "../../../../assets/Technology/Backend/net/language/c-icon.png";
import lang2 from "../../../../assets/Technology/Backend/net/language/powershell.svg";
import lang3 from "../../../../assets/Technology/Backend/net/language/vb-net.svg";
import lang4 from "../../../../assets/Technology/Backend/net/language/ms-sql.svg";
import lang5 from "../../../../assets/Technology/Backend/net/language/javascript-icon.png";
import lang6 from "../../../../assets/Technology/Backend/net/language/css.png";
import lang7 from "../../../../assets/Technology/Backend/net/language/typescript-icon.png";
import lang8 from "../../../../assets/Technology/Backend/net/language/python-icon.svg";

import tool1 from "../../../../assets/Technology/Backend/net/tools/azure-devops.svg";
import tool2 from "../../../../assets/Technology/Backend/net/tools/postman-icon.svg";
import tool3 from "../../../../assets/Technology/Backend/net/tools/selenium-icon.svg";
import tool4 from "../../../../assets/Technology/Backend/net/tools/docker-icon.png";
import tool5 from "../../../../assets/Technology/Backend/net/tools/gitlab.svg";
import tool6 from "../../../../assets/Technology/Backend/net/tools/Jenkins-logo.png";
import tool7 from "../../../../assets/Technology/Backend/net/tools/kubernets-icon.png";

import palat1 from "../../../../assets/Technology/Backend/net/Api&cloude services/core-web-api.svg";
import palat2 from "../../../../assets/Technology/Backend/net/Api&cloude services/cloud-ai-platform.svg";
import palat3 from "../../../../assets/Technology/Backend/net/Api&cloude services/aws-sagemaker.svg";
import palat4 from "../../../../assets/Technology/Backend/net/Api&cloude services/azure-ml-studio.svg";
import palat5 from "../../../../assets/Technology/Backend/net/Api&cloude services/graph-ql-icon.png";
import palat6 from "../../../../assets/Technology/Backend/net/Api&cloude services/odata-api.svg";
import palat7 from "../../../../assets/Technology/Backend/net/Api&cloude services/rest-api.webp";
import palat8 from "../../../../assets/Technology/Backend/net/Api&cloude services/swagger.svg";


import { useTheme } from "@emotion/react";

function NetDevelopPanel(props) {
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

NetDevelopPanel.propTypes = {
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

export default function VerticalTabs() {
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
          label="APIs, Integrations & Cloud Services"
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
        <NetDevelopPanel value={value} index={0}>
          <FrameWorkLibraries />
        </NetDevelopPanel>
        <NetDevelopPanel value={value} index={1}>
          <DataBase />
        </NetDevelopPanel>
        <NetDevelopPanel value={value} index={2}>
          <Tools />
        </NetDevelopPanel>
        <NetDevelopPanel value={value} index={3}>
          <Platform />
        </NetDevelopPanel>
      </Box>
    </Box>
  );
}

export const FrameWorkLibraries = () => {
  const frameworks = [
    { id: 1, name: ".NET Framework", image: frame1 },
    { id: 2, name: ".NET Core", image: frame2 },
    { id: 3, name: "Xamarin", image: frame3 },
    { id: 4, name: "ADO.NET", image: frame4 },
    { id: 5, name: "WPF", image: frame5 },
    { id: 6, name: "UWP", image: frame6 },
    { id: 7, name: "ASP.NET Web Forms", image: frame7 },
    { id: 8, name: "WCF", image: frame8 },
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
    { id: 1, name: "C#", image: lang1 },
    { id: 2, name: "PowerShell", image: lang2 },
    { id: 3, name: "VB.NET", image: lang3 },
    { id: 4, name: "SQL", image: lang4 },
    { id: 5, name: "JavaScript", image: lang5 },
    { id: 6, name: "CSS", image: lang6 },
    { id: 7, name: "Typescript", image: lang7 },
    { id: 8, name: "Python", image: lang8 },
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
    { id: 1, name: "Azure DevOps", image: tool1 },
    { id: 2, name: "Postman", image: tool2 },
    { id: 3, name: "Selenium", image: tool3 },
    { id: 4, name: "Docker", image: tool4 },
    { id: 5, name: "GitLab", image: tool5 },
    { id: 6, name: "Jenkins", image: tool6 },
    { id: 7, name: "Kubernetes", image: tool7 },
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
    { id: 1, name: "ASP.NET Core Web API", image: palat1 },
    { id: 2, name: "Google Cloud AI Platform", image: palat2 },
    { id: 3, name: "AWS SageMaker", image: palat3 },
    { id: 4, name: "Azure ML Studio", image: palat4 },
    { id: 5, name: "GraphQL", image: palat5 },
    { id: 6, name: "OData API", image: palat6 },
    { id: 7, name: "REST API", image: palat7 },
    { id: 8, name: "Swagger", image: palat8 },
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
