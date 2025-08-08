import { NavLink } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiHomeVariant } from '@mdi/js';

function Sidebar() {
  return (
    <div className="w-20 bg-gray-900 h-screen flex flex-col items-center py-4 space-y-10 border-2 border-[#1abc9c]">
      <NavLink 
        to="/" 
        end
        className={({ isActive }) => 
          `flex items-center justify-center w-12 h-12 text-white hover:bg-gray-700 ${
            isActive ? 'bg-gray-700' : ''
          }`
        } 
        title="home"
      >
        <Icon path={mdiHomeVariant} size={1} />
      </NavLink>

      <NavLink
        to="/goals"
        className={({ isActive }) => 
          `text-white px-4 py-2 hover:bg-gray-700 rounded-none ${
            isActive ? 'bg-gray-700' : ''
          }`
        }
      >
        Goals
      </NavLink>

      <NavLink
        to="/profile"
        className={({ isActive }) => 
          `text-white px-4 py-2 hover:bg-gray-700 rounded-none ${
            isActive ? 'bg-gray-700' : ''
          }`
        }
      >
        Profile
      </NavLink>
    </div>
  );
}

export default Sidebar;
