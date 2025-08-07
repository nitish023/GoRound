import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';
// import { 
//   MdHomeOutline, 
//   MdTargetVariantOutline, 
//   MdAccountOutline 
// } from 'react-icons/md'; // <-- These are *Material* icons, not community

// // For Material Community Icons (from mdi), import from mdi:
// import { 
//   MdiHomeOutline, 
//   MdiTarget, 
//   MdiAccountCircleOutline 
// } from 'react-icons/mdi';
import Icon from '@mdi/react';
import { mdiHomeVariant } from '@mdi/js';

function Sidebar() {
  return (
    <div className="sidebar">
      <NavLink to="/" className="tab" title="home" end>
        <Icon path={mdiHomeVariant} size={1} color="white" />
      </NavLink>
      <NavLink to="/goals" className="tab">
        Goals
      </NavLink>
      <NavLink to="/profile" className="tab">
        Profile
      </NavLink>
    </div>
  );
}

export default Sidebar;
