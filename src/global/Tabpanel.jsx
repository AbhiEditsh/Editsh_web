import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

// Component for each tab panel
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
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

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

// Helper function for accessibility props
function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

// Main component with responsive tabs
export default function VerticalTabs() {
    const [value, setValue] = React.useState(0);

    // Handle tab change
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Tabs example"
                sx={{
                    borderRight: { md: 1 },
                    borderBottom: { xs: 1, sm: 1, md: 0 },
                    width: { xs: '100%', sm: '100%', md: 'auto' },
                }}
            >
                <Tab label="Frameworks & Libraries" {...a11yProps(0)} />
                <Tab label="DataBase" {...a11yProps(1)} />
                <Tab label="Tools" {...a11yProps(2)} />
                <Tab label="Platforms" {...a11yProps(3)} />
            </Tabs>
            <Box sx={{ flexGrow: 1 }}>
                <TabPanel value={value} index={0}>
                    <FrameWorkLibraries />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <DataBase />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <Tools />
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <Platform />
                </TabPanel>
            </Box>
        </Box>
    );
}

import frame1 from '../../src/assets/Technology/Mobile/Raectnativeappdevelopment/framwork & library/docker-icon.png';
import frame2 from '../../src/assets/Technology/Mobile/Raectnativeappdevelopment/framwork & library/es-link-icon.png';
import frame3 from '../../src/assets/Technology/Mobile/Raectnativeappdevelopment/framwork & library/javascript-icon.png';
import frame4 from '../../src/assets/Technology/Mobile/Raectnativeappdevelopment/framwork & library/mobx-icon.png';
import frame5 from '../../src/assets/Technology/Mobile/Raectnativeappdevelopment/framwork & library/react-router-icon.png';
import frame6 from '../../src/assets/Technology/Mobile/Raectnativeappdevelopment/framwork & library/redux-icon.png';
import frame7 from '../../src/assets/Technology/Mobile/Raectnativeappdevelopment/framwork & library/rx-js-icon.png';
import frame8 from '../../src/assets/Technology/Mobile/Raectnativeappdevelopment/framwork & library/typescript-icon.png';

export const FrameWorkLibraries = () => {
    const Framework = [
        { id: 1, name: 'TypeScript', image: frame8 },
        { id: 2, name: 'JavaScript', image: frame3 },
        { id: 3, name: 'Docker', image: frame1 },
        { id: 4, name: 'MobX', image: frame4 },
        { id: 5, name: 'Redux', image: frame5 },
        { id: 6, name: 'Router', image: frame6 },
        { id: 7, name: 'ES-Lint', image: frame2 },
        { id: 8, name: 'RxJS', image: frame7 },
    ];

    return (
        <Grid container spacing={3} justifyContent={'center'}>
            {Framework.map((item) => (
                <Grid item xs={12} sm={6} md={3} key={item.id}>
                    <Box
                        sx={{
                            boxShadow: 1,
                            width: '100%',
                            height: 'auto',
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <img
                            src={item.image}
                            alt={item.name}
                            style={{
                                width: '50px',
                                height: '50px',
                                marginBottom: '8px',
                            }}
                        />
                        <Typography
                            sx={{
                                fontSize: '14px',
                                textAlign: 'center',
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

import data1 from '../../src/assets/Technology/Mobile/Raectnativeappdevelopment/Database/firebase-icon.png';
import data2 from '../../src/assets/Technology/Mobile/Raectnativeappdevelopment/Database/google-cloud-sql.svg';
import data3 from '../../src/assets/Technology/Mobile/Raectnativeappdevelopment/Database/mongo-db-icon.png';
import data4 from '../../src/assets/Technology/Mobile/Raectnativeappdevelopment/Database/postgre-icon.png';
import data5 from '../../src/assets/Technology/Mobile/Raectnativeappdevelopment/Database/realm-icon.png';

export const DataBase = () => {
    const Framework = [
        { id: 1, name: 'Firebase', image: data1 },
        { id: 2, name: 'Google Cloud SQL', image: data2 },
        { id: 3, name: 'MongoDB', image: data3 },
        { id: 4, name: 'PostgreSQL', image: data4 },
        { id: 5, name: 'Realm', image: data5 },
    ];

    return (
        <Grid container spacing={3} justifyContent={'center'}>
            {Framework.map((item) => (
                <Grid item xs={12} sm={6} md={3} key={item.id}>
                    <Box
                        sx={{
                            boxShadow: 1,
                            width: '100%',
                            height: 'auto',
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <img
                            src={item.image}
                            alt={item.name}
                            style={{
                                width: '50px',
                                height: '50px',
                                marginBottom: '8px',
                            }}
                        />
                        <Typography
                            sx={{
                                fontSize: '14px',
                                textAlign: 'center',
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

import tool1 from '../../src/assets/Technology/Mobile/Raectnativeappdevelopment/Tools/vs-code-icon.png';
import tool2 from '../../src/assets/Technology/Mobile/Raectnativeappdevelopment/Tools/gradle-icon.png';
import tool3 from '../../src/assets/Technology/Mobile/Raectnativeappdevelopment/Tools/native-base-icon.png';
import tool4 from '../../src/assets/Technology/Mobile/Raectnativeappdevelopment/Tools/expo-icon.png';
import tool5 from '../../src/assets/Technology/Mobile/Raectnativeappdevelopment/Tools/xcode-icon.png';
import tool6 from '../../src/assets/Technology/Mobile/Raectnativeappdevelopment/Tools/npm-icon.png';
import tool7 from '../../src/assets/Technology/Mobile/Raectnativeappdevelopment/Tools/yarn-icon.png';
import tool8 from '../../src/assets/Technology/Mobile/Raectnativeappdevelopment/Tools/axios-icon.png';

export const Tools = () => {
    const Framework = [
        { id: 1, name: 'VS Code', image: tool1 },
        { id: 2, name: 'Gradle', image: tool2 },
        { id: 3, name: 'NativeBase', image: tool3 },
        { id: 4, name: 'Expo', image: tool4 },
        { id: 5, name: 'XCode', image: tool5 },
        { id: 6, name: 'NPM', image: tool6 },
        { id: 7, name: 'YARN', image: tool7 },
        { id: 8, name: 'Axios', image: tool8 },
    ];

    return (
        <Grid container spacing={3} justifyContent={'center'}>
            {Framework.map((item) => (
                <Grid item xs={12} sm={6} md={3} key={item.id}>
                    <Box
                        sx={{
                            boxShadow: 1,
                            width: '100%',
                            height: 'auto',
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <img
                            src={item.image}
                            alt={item.name}
                            style={{
                                width: '50px',
                                height: '50px',
                                marginBottom: '8px',
                            }}
                        />
                        <Typography
                            sx={{
                                fontSize: '14px',
                                textAlign: 'center',
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

import palat1 from '../../src/assets/Technology/Mobile/Raectnativeappdevelopment/plateform/react-icon.png';
import palat2 from '../../src/assets/Technology/Mobile/Raectnativeappdevelopment/plateform/saga-icon.png';
import palat3 from '../../src/assets/Technology/Mobile/Raectnativeappdevelopment/plateform/next-js-icon.png';
import palat4 from '../../src/assets/Technology/Mobile/Raectnativeappdevelopment/plateform/material-ui-icon.png';
import palat5 from '../../src/assets/Technology/Mobile/Raectnativeappdevelopment/plateform/storybook-icon.png';

export const Platform = () => {
    const Framework = [
        { id: 1, name: 'React', image: palat1 },
        { id: 2, name: 'Saga', image: palat2 },
        { id: 3, name: 'Next.js', image: palat3 },
        { id: 4, name: 'Material UI', image: palat4 },
        { id: 5, name: 'Storybook', image: palat5 },
    ];

    return (
        <Grid container spacing={3} justifyContent={'center'}>
            {Framework.map((item) => (
                <Grid item xs={12} sm={6} md={3} key={item.id}>
                    <Box
                        sx={{
                            boxShadow: 1,
                            width: '100%',
                            height: 'auto',
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <img
                            src={item.image}
                            alt={item.name}
                            style={{
                                width: '50px',
                                height: '50px',
                                marginBottom: '8px',
                            }}
                        />
                        <Typography
                            sx={{
                                fontSize: '14px',
                                textAlign: 'center',
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
