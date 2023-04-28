import React from 'react'
import './Sidebare.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import ListAltIcon from '@mui/icons-material/ListAlt';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
function Sidebare() {
  return (
    <div className='sidebare'>
        <div className="top">
            <span className='logo'>GadriAdmin</span>
        </div>
        <hr />
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <li>
                    <DashboardIcon className='icon' />
                <Link to={'/'} className='link'>
                    <span>Dashbord</span>
                </Link>

                </li>
                <p className="title">LISTS</p>
                <li>
                <Link to={'/users'} className='link'>
                    <PersonIcon className='icon' />
                    <span>Users</span>
                </Link>
                </li>
                <li>
                    <ProductionQuantityLimitsIcon className='icon' />
                    <span>Products</span>
                </li>
                <li>
                <ListAltIcon className='icon' />
                    <span>Orders</span>
                </li>
                <li>
                <LocalShippingIcon className='icon' />
                    <span>Delivery</span>
                </li>
                <p className="title">USEFUL</p>
                <li>
                <InsertChartIcon className='icon' />
                    <span>Stats</span>
                </li>
                <li>
                <NotificationsIcon className='icon' />
                    <span>Notification</span>
                </li>
                <p className="title">SERVICE</p>
                <li>
                <SettingsSystemDaydreamIcon className='icon' />
                    <span>System Health</span>
                </li>
                <li>
                <PsychologyOutlinedIcon className='icon' />
                    <span>Logs</span>
                </li>
                <li>
                <AccountCircleOutlinedIcon className='icon' />
                    <span>Setting</span>
                </li>
                <p className="title">USER</p>
                <li>
                <AccountCircleIcon className='icon' />
                    <span>Profile</span>
                </li>
                <li>
                <LogoutIcon className='icon' />
                    <span>Logout</span>
                </li>
            </ul>
        </div>
        <div className="bottom">
            <div className="colorOp"></div>
            <div className="colorOp"></div>
        </div>
    </div>
  )
}
export default Sidebare;
