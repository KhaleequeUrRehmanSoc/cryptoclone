// "use client"

import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

const CustomTabs = styled(Tabs)({
  // borderBottom: '1px solid #e8e8e8',
  '& .MuiTabs-indicator': {
    backgroundImage: 'linear-gradient(90deg,#1199fa,#11d0fa)'
  },
});

const CustomTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
  textTransform: 'none',
  minWidth: 0,
  [theme.breakpoints.up('sm')]: {
    minWidth: 0,
    fontSize: '1rem'
  },
  fontSize: '.875rem',
  fontWeight: 600,
  marginRight: theme.spacing(1),
  color: 'white',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&.Mui-selected': {
    color: 'white',
  },
}));



const CustomTabPanel = (props) => {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            {children}
          </Box>
        )}
      </div>
    );
  }
  
  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }


const  CustomizedTabs = (props) => {

    const {tabs,value,onChange, ...rest} = props;

  return (
    <Box sx={{ width: '100%' }}>
        <CustomTabs value={value} onChange={onChange}  aria-label="ant example" {...rest}>
          {
            Array.isArray(tabs) && tabs.length>0 && tabs?.map((item,i)=> (
                <CustomTab label={item && item?.tabLabel} {...a11yProps(i)} />
            ))
          }
        </CustomTabs>
        {
            Array.isArray(tabs) && tabs.length>0 && tabs?.map((item,i)=> (
                <CustomTabPanel value={value} index={i}>
                    {item && item?.tabPanel}
                </CustomTabPanel>
            ))
        }
        
    </Box>
  );
}



export default CustomizedTabs 