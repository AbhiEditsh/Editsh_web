import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useTheme } from "@emotion/react";

// Images
import frame1 from "../../../../assets/Technology/front/reactjs/Technology/framework/gulp-icon.png";
import frame2 from "../../../../assets/Technology/front/reactjs/Technology/framework/json-icon.png";
import frame3 from "../../../../assets/Technology/front/reactjs/Technology/framework/npm-icon.png";
import frame4 from "../../../../assets/Technology/front/reactjs/Technology/framework/redis-icon.png";
import frame5 from "../../../../assets/Technology/front/reactjs/Technology/framework/rest-icon.png";
import frame6 from "../../../../assets/Technology/front/reactjs/Technology/framework/soap-icon.png";
import frame7 from "../../../../assets/Technology/front/reactjs/Technology/framework/socket-icon.png";
import frame8 from "../../../../assets/Technology/front/reactjs/Technology/framework/xml-file.png";

import uiux1 from "../../../../assets/Technology/front/reactjs/Technology/ui-ux/bootstrap-icon.png";
import uiux2 from "../../../../assets/Technology/front/reactjs/Technology/ui-ux/material-ui-icon.png";
import uiux3 from "../../../../assets/Technology/front/reactjs/Technology/ui-ux/antd-icon.png";
import uiux4 from "../../../../assets/Technology/front/reactjs/Technology/ui-ux/telerik-icon.png";
import uiux5 from "../../../../assets/Technology/front/reactjs/Technology/ui-ux/tailwind-icon.png";

import tool1 from "../../../../assets/Technology/front/reactjs/Technology/tools/github-icon.png";
import tool2 from "../../../../assets/Technology/front/reactjs/Technology/tools/slack-icon.png";
import tool3 from "../../../../assets/Technology/front/reactjs/Technology/tools/jirs-icon.png";
import tool4 from "../../../../assets/Technology/front/reactjs/Technology/tools/trello-icon.png";
import tool5 from "../../../../assets/Technology/front/reactjs/Technology/tools/base-camp-icon.png";

import p1 from "../../../../assets/Technology/front/reactjs/Technology/Skills/react-icon.png";
import p2 from "../../../../assets/Technology/front/reactjs/Technology/Skills/jsx-icon.png";
import p3 from "../../../../assets/Technology/front/reactjs/Technology/Skills/routing-icon.png";
import p4 from "../../../../assets/Technology/front/reactjs/Technology/Skills/redux-icon.png";
import p5 from "../../../../assets/Technology/front/reactjs/Technology/Skills/hooks-icon.png";
import p6 from "../../../../assets/Technology/front/reactjs/Technology/Skills/jest-icon.png";
import p7 from "../../../../assets/Technology/front/reactjs/Technology/Skills/graph-ql-icon.png";
import p8 from "../../../../assets/Technology/front/reactjs/Technology/Skills/typescript-icon.png";

function ReactjsPanel(props) {
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

ReactjsPanel.propTypes = {
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
        <ReactjsPanel value={value} index={0}>
          <FrameWorkLibraries />
        </ReactjsPanel>
        <ReactjsPanel value={value} index={1}>
          <UIUX />
        </ReactjsPanel>
        <ReactjsPanel value={value} index={2}>
          <Tools />
        </ReactjsPanel>
        <ReactjsPanel value={value} index={3}>
          <Platform />
        </ReactjsPanel>
      </Box>
    </Box>
  );
}

export const FrameWorkLibraries = () => {
  const frameworks = [
    { id: 1, name: "Gulp", image: frame1 },
    { id: 2, name: "Json", image: frame2 },
    { id: 3, name: "NPM", image: frame3 },
    { id: 4, name: "Redis", image: frame4 },
    { id: 5, name: "Rest", image: frame5 },
    { id: 6, name: "Soap", image: frame6 },
    { id: 7, name: "Socket.Io", image: frame7 },
    { id: 8, name: "xml-file", image: frame8 },
  ];

  return (
    <Grid container spacing={3} justifyContent="center">
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

export const UIUX = () => {
  const uiux = [
    { id: 1, name: "Bootstrap", image: uiux1 },
    { id: 2, name: "Material", image: uiux2 },
    { id: 3, name: "Antd", image: uiux3 },
    { id: 4, name: "Telerik", image: uiux4 },
    { id: 5, name: "Tailwind", image: uiux5 },
  ];

  return (
    <Grid container spacing={3} justifyContent="center" sx={{ width: "100%" }}>
      {uiux.map((item) => (
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
    { id: 1, name: "GitHub", image: tool1 },
    { id: 2, name: "Slack", image: tool2 },
    { id: 3, name: "JIRA", image: tool3 },
    { id: 4, name: "Trello", image: tool4 },
    { id: 5, name: "Basecamp", image: tool5 },
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
    { id: 1, name: "Reactjs", image: p1 },
    { id: 2, name: "JSX", image: p2 },
    { id: 3, name: "Routing", image: p3 },
    { id: 4, name: "Redux", image: p4 },
    { id: 5, name: "Hooks", image: p5 },
    { id: 6, name: "Jest", image: p6 },
    { id: 7, name: "GraphQL", image: p7 },
    { id: 8, name: "TypeScript", image: p8 },
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
