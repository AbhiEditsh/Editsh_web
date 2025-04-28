import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useTheme } from "@emotion/react";

// Framework
import frame1 from "../../../../assets/Technology/front/vue js/technology/framwwork/vuetify-icon.png";
import frame2 from "../../../../assets/Technology/front/vue js/technology/framwwork/quasar-icon.png";
import frame3 from "../../../../assets/Technology/front/vue js/technology/framwwork/bootstrap-vue-icon.png";
import frame4 from "../../../../assets/Technology/front/vue js/technology/framwwork/electron-icon.png";
import frame5 from "../../../../assets/Technology/front/vue js/technology/framwwork/next-js-icon.png";
import frame6 from "../../../../assets/Technology/front/vue js/technology/framwwork/vue-storefront-icon.png";

//Tools
import tools1 from "../../../../assets/Technology/front/vue js/technology/tools/adobe-xd-icon.png";
import tools2 from "../../../../assets/Technology/front/vue js/technology/tools/figma-icon.png";
import tools3 from "../../../../assets/Technology/front/vue js/technology/tools/Invision-icon.png";
import tools4 from "../../../../assets/Technology/front/vue js/technology/tools/sketch.webp";
import tools5 from "../../../../assets/Technology/front/vue js/technology/tools/zepline-icon.png";

import data1 from "../../../../assets/Technology/front/vue js/technology/database/vux-icon.png";
import data2 from "../../../../assets/Technology/front/vue js/technology/database/iview-icon.png";
import data3 from "../../../../assets/Technology/front/vue js/technology/database/element-ui-icon.png";
import data4 from "../../../../assets/Technology/front/vue js/technology/database/vue-tailwind-icon.png";
import data5 from "../../../../assets/Technology/front/vue js/technology/database/vuex-icon.png";
import data6 from "../../../../assets/Technology/front/vue js/technology/database/socket-icon.png";

import p1 from "../../../../assets/Technology/front/vue js/technology/platforms/aws-icon.png";
import p2 from "../../../../assets/Technology/front/vue js/technology/platforms/firebase-icon.png";
import p3 from "../../../../assets/Technology/front/vue js/technology/platforms/docker-icon.png";
import p4 from "../../../../assets/Technology/front/vue js/technology/platforms/heroku-icon.png";
import p5 from "../../../../assets/Technology/front/vue js/technology/platforms/azure-icon.png";
import p6 from "../../../../assets/Technology/front/vue js/technology/platforms/digital-ocean.png";
import p7 from "../../../../assets/Technology/front/vue js/technology/platforms/kubernetes.png";
import p8 from "../../../../assets/Technology/front/vue js/technology/platforms/cloud-front.png";

function VuuejsPanel(props) {
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

VuuejsPanel.propTypes = {
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
          label="UI/UX"
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
        <VuuejsPanel value={value} index={0}>
          <FrameWorkLibraries />
        </VuuejsPanel>
        <VuuejsPanel value={value} index={1}>
          <DataBase />
        </VuuejsPanel>
        <VuuejsPanel value={value} index={2}>
          <Tools />
        </VuuejsPanel>
        <VuuejsPanel value={value} index={3}>
          <Platform />
        </VuuejsPanel>
      </Box>
    </Box>
  );
}

export const FrameWorkLibraries = () => {
  const frameworks = [
    { id: 1, name: "Vuetify", image: frame1 },
    { id: 2, name: "Quasar", image: frame2 },
    { id: 3, name: "BootstrapVu...", image: frame3 },
    { id: 4, name: "Electron", image: frame4 },
    { id: 5, name: "Next.Js", image: frame5 },
    { id: 6, name: "VueStorefront...", image: frame6 },
  ];

  return (
    <Grid container spacing={3} justifyContent="center">
      {frameworks.map((item) => (
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

export const DataBase = () => {
  const Datavases = [
    { id: 1, name: "Vux", image: data1 },
    { id: 2, name: "IView", image: data2 },
    { id: 3, name: "Element UI", image: data3 },
    { id: 4, name: "VueTailwind", image: data4 },
    { id: 5, name: "Vuex", image: data5 },
    { id: 6, name: "Socket.Io", image: data6 },
  ];

  return (
    <Grid container spacing={3} justifyContent="center" sx={{ width: "100%" }}>
      {Datavases.map((item) => (
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
    { id: 1, name: "Adobe XD", image: tools1 },
    { id: 2, name: "Figma", image: tools2 },
    { id: 3, name: "Invision", image: tools3 },
    { id: 4, name: "Invision", image: tools4 },
    { id: 5, name: "Zeplin", image: tools5 },
  ];

  return (
    <Grid container spacing={7} justifyContent="center">
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
    { id: 1, name: "AWS", image: p1 },
    { id: 2, name: "Firebase", image: p2 },
    { id: 3, name: "Docker", image: p3 },
    { id: 4, name: "Heroku", image: p4 },
    { id: 5, name: "Azure", image: p5 },
    { id: 6, name: "Digital Ocean", image: p6 },
    { id: 7, name: "Kubernetes", image: p7 },
    { id: 8, name: "CloudFront", image: p8 },
  ];

  return (
    <Grid container spacing={6} justifyContent="center">
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
