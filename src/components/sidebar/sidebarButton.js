import React from 'react';
import { IconContext } from "react-icons";
import './sidebarButton.css';
import { Link, useLocation } from 'react-router-dom';

export default function SidebarButton(props) {
    const location = useLocation();

    const isActive = location.pathname === props.to;

    const bntClass = isActive ? "btn-body active" : "btn-body";
    return (
        <Link to={props.to}>
            <div className={bntClass}>
                <IconContext.Provider value={{ size: "24px", className: "btn-icon" }}>
                    {props.icon}
                    <p className='btn-title'>{props.title}</p>
                </IconContext.Provider>
            </div>
        </Link>
    );
}
