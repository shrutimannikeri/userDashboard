import { ProSidebar , Menu, MenuItem } from "react-pro-sidebar";
import {useContext, useState} from 'react'

import { Box, IconButton, useTheme ,Typography} from "@mui/material";
import { Link } from 'react-router-dom'
import { tokens} from  '../../theme'
import "react-pro-sidebar/dist/css/styles.css";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import { profileContext } from "../../App";
const Item=({title,to,icon,selected,setSelected})=>{
  const theme=useTheme()
  const colors=tokens(theme.palette.mode)
 
return (
  
  <MenuItem
    active={selected === title}
    style={{
      color: colors.grey[100],
    }}
    onClick={() => setSelected(title)}
    icon={icon}
  >
    <Typography>{title}</Typography>
    <Link to={to} />
  </MenuItem>

);
};

const Sidebars=()=>{

    const theme=useTheme()
    const colors=tokens(theme.palette.mode)
    const [isCollapsed,setIsCollapsed] =useState(false)
    const [selected, setSelected] =useState("Dashboard")

    const [profile, setProfile] = useContext(profileContext);
  // const styles={width:isCollapsed?"100px":""}

    return (
      <Box
        sx={{
          "& .pro-sidebar-inner": {
            background: `${colors.primary[400]} !important`,
          },
          "& .pro-icon-wrapper": {
            backgroundColor: "transparent !important",
          },
          "& .pro-inner-item": {
            padding: "5px 35px 5px 20px !important",
          },
          "& .pro-inner-item:hover": {
            color: "#868dfb !important",
          },
          "& .pro-menu-item.active": {
            color: "#6870fa !important",
          },
        }}
        // style={styles}
      >
        <ProSidebar collapsed={isCollapsed}>
       
          <Menu iconShape="square"
          >
            {/* LOGO AND MENU ICON */}
            <MenuItem
              onClick={() => setIsCollapsed(!isCollapsed)}
              icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
              style={{
                margin: "10px 0 20px 0",
                color: colors.grey[100],
              }}
            >
              {!isCollapsed && (
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  ml="15px"
                >
                  <Typography variant="h3" color={colors.grey[100]}>
                    ADMINIS
                  </Typography>
                  <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                    <MenuOutlinedIcon />
                  </IconButton>
                </Box>
              )}
            </MenuItem>
  
            {!isCollapsed && (
              <Box mb="25px">
                <Box display="flex" justifyContent="center" alignItems="center">
                  <img
                    alt="profile-user"
                    width="100px"
                    height="100px"
                    src={profile.avatar}
                    style={{ cursor: "pointer", borderRadius: "50%" }}
                  />
                </Box>
                <Box textAlign="center">
                  <Typography
                    variant="h2"
                    color={colors.grey[100]}
                    fontWeight="bold"
                    sx={{ m: "10px 0 0 0" }}
                  >
                   {profile.name}
                  </Typography>
                  <Typography variant="h5" color={colors.greenAccent[500]}>
                  {profile.designation}
                  </Typography>
                  
                </Box>
              </Box>
            )}
             <Box paddingLeft={isCollapsed ? undefined : "3%"}>
             <Item
                title= "Dashboard"
                to="/"
                icon={<HomeOutlinedIcon />}
                
                selected={selected}
                setSelected={setSelected}
              />
  
              <Item
                title="Users"
                to="/users"
                icon={<PeopleOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Add User"
            
                to="/adduser"
                icon={<PersonAddAltIcon />}
                selected={selected}
                setSelected={setSelected}
              />
             
  
              <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{ m: "15px 0 5px 20px" }}
              >
                Pages
              </Typography>
              <Item
               
                title="Profile Info"
                to="/profile"
                icon={<PersonOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              
              <Item
                   title="FAQ Page"
          
                to="/faq"
                icon={<HelpOutlineOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
  
              <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{ m: "15px 0 5px 20px" }}
              >
                Charts
              </Typography>
              <Item
              title="Bar Chart"
              to='/bar'
                icon={<BarChartOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                 title="Pie Chart"
             
                to="/pie"
                icon={<PieChartOutlineOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title= "Line Chart"
                to="/line"
                icon={<TimelineOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            
            </Box> 
              
          </Menu>
        </ProSidebar>
      </Box>
    );
  };
export default Sidebars