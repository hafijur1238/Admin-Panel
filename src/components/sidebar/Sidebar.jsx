import "./sidebar.scss"
import GridViewIcon from '@mui/icons-material/GridView';
import PortraitOutlinedIcon from '@mui/icons-material/PortraitOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import BorderOuterOutlinedIcon from '@mui/icons-material/BorderOuterOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import MarkUnreadChatAltOutlinedIcon from '@mui/icons-material/MarkUnreadChatAltOutlined';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import AddToQueueIcon from '@mui/icons-material/AddToQueue';
import SettingsIcon from '@mui/icons-material/Settings';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Link } from "react-router-dom"
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

// import {PortraitOutlinedIcon, Inventory2OutlinedIcon, BorderOuterOutlinedIcon, LocalShippingOutlinedIcon, InsertChartOutlinedIcon, MarkUnreadChatAltOutlinedIcon, SettingsSystemDaydreamOutlinedIcon, AddToQueueIcon, SettingsIcon, InsertEmoticonIcon, ExitToAppIcon} from "@mui/icons-material"

const Sidebar = () => {

    const { dispatch } = useContext(DarkModeContext);


    return (
        <div className='sidebar'>
            <div className="top">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <span className="logo">CloudeWindow</span>
                </Link>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <GridViewIcon className="icon" />
                        <span>Dashboard</span>
                    </li>
                    <p className="title">LISTS</p>
                    <Link to="/users" style={{ textDecoration: "none" }}>
                        <li>
                            <PortraitOutlinedIcon className="icon" />
                            <span>Users</span>
                        </li>
                    </Link>
                    <Link to="/products" style={{ textDecoration: "none" }}>
                        <li>
                            <Inventory2OutlinedIcon className="icon" />
                            <span>Products</span>
                        </li>
                    </Link>
                    <li>
                        <BorderOuterOutlinedIcon className="icon" />
                        <span>Orders</span>
                    </li>
                    <li>
                        <LocalShippingOutlinedIcon className="icon" />
                        <span>Delivery</span>
                    </li>
                    <p className="title">USEFUL</p>
                    <li>
                        <InsertChartOutlinedIcon className="icon" />
                        <span>Stats</span>
                    </li>
                    <li>
                        <MarkUnreadChatAltOutlinedIcon className="icon" />
                        <span>Notifications</span>
                    </li>
                    <p className="title">SERVICE</p>
                    <li>
                        <SettingsSystemDaydreamOutlinedIcon className="icon" />
                        <span>System Health</span>
                    </li>
                    <li>
                        <AddToQueueIcon className="icon" />
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsIcon className="icon" />
                        <span>Settings</span>
                    </li>
                    <p className="title">USER</p>
                    <li>
                        <InsertEmoticonIcon className="icon" />
                        <span>Profile</span>
                    </li>
                    <li>
                        <ExitToAppIcon className="icon" />
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div
                    className="colorOption"
                    onClick={() => dispatch({ type: "LIGHT" })}
                ></div>
                <div
                    className="colorOption"
                    onClick={() => dispatch({ type: "DARK" })}
                ></div>
            </div>
        </div>
    )
}

export default Sidebar


