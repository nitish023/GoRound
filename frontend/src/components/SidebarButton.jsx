import React from 'react';
import { NavLink } from 'react-router-dom';
import Icon from '@mdi/react';

function SidebarButton({
  to,
  end = false,
  iconPath,
  children,
  title,
  alwaysSelected = false,
  selectedBgColor = 'bg-[#ffce6d]',
  onClick
}) {
  const commonClasses = 'tab flex items-center gap-2 px-7 py-3 font-bold text-black transition-colors w-60 mx-auto';

  const activeClasses = `${selectedBgColor} rounded-lg shadow-md`;
  const inactiveClasses = 'hover:bg-[#c2d6d1]';

  if (to) {
    return (
      <NavLink
        to={to}
        end={end}
        title={title}
        className={({ isActive }) =>
          `${commonClasses} ${alwaysSelected || isActive ? activeClasses : inactiveClasses}`
        }
      >
        {iconPath && <Icon path={iconPath} size={0.9} />}
        {children}
      </NavLink>
    );
  }

  return (
    <button
      type="button"
      title={title}
      onClick={onClick}
      className={`${commonClasses} ${alwaysSelected ? activeClasses : inactiveClasses}`}
    >
      {iconPath && <Icon path={iconPath} size={0.9} />}
      {children}
    </button>
  );
}

export default SidebarButton;
