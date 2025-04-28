import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import frame1 from "../../../../assets/Technology/Mobile/Raectnativeappdevelopment/framwork & library/docker-icon.png";
import frame2 from "../../../../assets/Technology/Mobile/Raectnativeappdevelopment/framwork & library/es-link-icon.png";
import frame3 from "../../../../assets/Technology/Mobile/Raectnativeappdevelopment/framwork & library/javascript-icon.png";
import frame4 from "../../../../assets/Technology/Mobile/Raectnativeappdevelopment/framwork & library/mobx-icon.png";
import frame5 from "../../../../assets/Technology/Mobile/Raectnativeappdevelopment/framwork & library/react-router-icon.png";
import frame6 from "../../../../assets/Technology/Mobile/Raectnativeappdevelopment/framwork & library/redux-icon.png";
import frame7 from "../../../../assets/Technology/Mobile/Raectnativeappdevelopment/framwork & library/rx-js-icon.png";
import frame8 from "../../../../assets/Technology/Mobile/Raectnativeappdevelopment/framwork & library/typescript-icon.png";

import data1 from "../../../../assets/Technology/Mobile/Raectnativeappdevelopment/Database/firebase-icon.png";
import data2 from "../../../../assets/Technology/Mobile/Raectnativeappdevelopment/Database/google-cloud-sql.svg";
import data3 from "../../../../assets/Technology/Mobile/Raectnativeappdevelopment/Database/mongo-db-icon.png";
import data4 from "../../../../assets/Technology/Mobile/Raectnativeappdevelopment/Database/postgre-icon.png";
import data5 from "../../../../assets/Technology/Mobile/Raectnativeappdevelopment/Database/realm-icon.png";

import tool1 from "../../../../assets/Technology/Mobile/Raectnativeappdevelopment/Tools/vs-code-icon.png";
import tool2 from "../../../../assets/Technology/Mobile/Raectnativeappdevelopment/Tools/gradle-icon.png";
import tool3 from "../../../../assets/Technology/Mobile/Raectnativeappdevelopment/Tools/native-base-icon.png";
import tool4 from "../../../../assets/Technology/Mobile/Raectnativeappdevelopment/Tools/expo-icon.png";
import tool5 from "../../../../assets/Technology/Mobile/Raectnativeappdevelopment/Tools/xcode-icon.png";
import tool6 from "../../../../assets/Technology/Mobile/Raectnativeappdevelopment/Tools/npm-icon.png";
import tool7 from "../../../../assets/Technology/Mobile/Raectnativeappdevelopment/Tools/yarn-icon.png";
import tool8 from "../../../../assets/Technology/Mobile/Raectnativeappdevelopment/Tools/axios-icon.png";

import palat1 from "../../../../assets/Technology/Mobile/Raectnativeappdevelopment/plateform/react-icon.png";
import palat2 from "../../../../assets/Technology/Mobile/Raectnativeappdevelopment/plateform/saga-icon.png";
import palat3 from "../../../../assets/Technology/Mobile/Raectnativeappdevelopment/plateform/next-js-icon.png";
import palat4 from "../../../../assets/Technology/Mobile/Raectnativeappdevelopment/plateform/material-ui-icon.png";
import palat5 from "../../../../assets/Technology/Mobile/Raectnativeappdevelopment/plateform/storybook-icon.png";
import { useTheme } from "@emotion/react";

// Component for each tab panel
function ReactNativePanel(props) {
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

ReactNativePanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

// Helper function for accessibility props
function a11yProps(index) {
  return {
    id: `horizontal-tab-${index}`,
    "aria-controls": `horizontal-tabpanel-${index}`,
  };
}

// Main component with responsive tabs
export default function VerticalTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  // Handle tab change
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
          
          sx={{
            textTransform: "capitalize",
            fontWeight: "600",
            flex: "1 1 25%",
            maxWidth: "25%",
            color: value === 0 ? theme.palette.secondary.main : "inherit",
          }}
          {...a11yProps(0)}
        />
        <Tab
          label="Database"
          sx={{
            textTransform: "capitalize",
            fontWeight: "600",
            flex: "1 1 25%",
            maxWidth: "25%",
            color: value === 1 ? theme.palette.secondary.main : "inherit",
          }}
          {...a11yProps(1)}
        />
        <Tab
          label="Tools"
          sx={{
            textTransform: "capitalize",
            fontWeight: "600",
            flex: "1 1 25%",
            maxWidth: "25%",
            color: value === 2 ? theme.palette.secondary.main : "inherit",
          }}
          {...a11yProps(2)}
        />
        <Tab
          label="Platforms"
          sx={{
            textTransform: "capitalize",
            fontWeight: "600",
            flex: "1 1 25%",
            maxWidth: "25%",
            color: value === 3 ? theme.palette.secondary.main : "inherit",
          }}
          {...a11yProps(3)}
        />
      </Tabs>
      <Box sx={{ flexGrow: 1 }}>
        <ReactNativePanel value={value} index={0}>
          <FrameWorkLibraries />
        </ReactNativePanel>
        <ReactNativePanel value={value} index={1}>
          <DataBase />
        </ReactNativePanel>
        <ReactNativePanel value={value} index={2}>
          <Tools />
        </ReactNativePanel>
        <ReactNativePanel value={value} index={3}>
          <Platform />
        </ReactNativePanel>
      </Box>
    </Box>
  );
}

// FrameWorkLibraries Component
export const FrameWorkLibraries = () => {
  const frameworks = [
    { id: 1, name: "TypeScript", image: frame8 },
    { id: 2, name: "JavaScript", image: frame3 },
    { id: 3, name: "Docker", image: frame1 },
    { id: 4, name: "MobX", image: frame4 },
    { id: 5, name: "Redux", image: frame5 },
    { id: 6, name: "Router", image: frame6 },
    { id: 7, name: "ES-Lint", image: frame2 },
    { id: 8, name: "RxJS", image: frame7 },
  ];

  return (
    <Grid container spacing={3} justifyContent={"center"}>
      {frameworks.map((item) => (
        <Grid item xs={6} sm={6} md={3} lg={2}  key={item.id}>
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

// DataBase Component
export const DataBase = () => {
  const databases = [
    { id: 1, name: "Firebase", image: data1 },
    { id: 2, name: "Google Cloud SQL", image: data2 },
    { id: 3, name: "MongoDB", image: data3 },
    { id: 4, name: "PostgreSQL", image: data4 },
    { id: 5, name: "Realm", image: data5 },
  ];

  return (
    <Grid container spacing={3} justifyContent={"center"}>
      {databases.map((item) => (
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

// Tools Component
export const Tools = () => {
  const tools = [
    { id: 1, name: "VS Code", image: tool1 },
    { id: 2, name: "Gradle", image: tool2 },
    { id: 3, name: "NativeBase", image: tool3 },
    { id: 4, name: "Expo", image: tool4 },
    { id: 5, name: "XCode", image: tool5 },
    { id: 6, name: "NPM", image: tool6 },
    { id: 7, name: "YARN", image: tool7 },
    { id: 8, name: "Axios", image: tool8 },
  ];

  return (
    <Grid container spacing={3} justifyContent={"center"}>
      {tools.map((item) => (
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

// Platform Component
export const Platform = () => {
  const platforms = [
    { id: 1, name: "React", image: palat1 },
    { id: 2, name: "Saga", image: palat2 },
    { id: 3, name: "Next.js", image: palat3 },
    { id: 4, name: "Material UI", image: palat4 },
    { id: 5, name: "Storybook", image: palat5 },
  ];

  return (
    <Grid container spacing={3} justifyContent={"center"}>
      {platforms.map((item) => (
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
