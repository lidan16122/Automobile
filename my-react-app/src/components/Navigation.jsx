import React from "react";
import { NavLink } from "react-router-dom";
//the navigation bar
export default function Navigation({ links }) {
    if (!links) return null;
    return (
        <>
            <ul className="Navigation">
                
                {links.map((l, i) => {
                    return (
                        <NavLink
                            key={i}
                            to={l.route}
                            className={({ isActive }) => isActive ? "isActiveNav" : ""}
                        >
                            {l.text}
                        </NavLink>
                    )
                })}
            </ul>
        </>
    )
}