import React, { useState } from 'react';
import { mdiHomeVariant, mdiTarget, mdiAccountCircle, mdiPlus } from '@mdi/js';
import SidebarButton from './SidebarButton';
import GoRoundLogo from '../assets/GoRoundLogo.png';
import Modal from './Modal';

function Sidebar() {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <div className="w-70 bg-[#FFF7E8] h-screen flex flex-col py-4 space-y-4 border-2  border-gray-300">
                <img src={GoRoundLogo} alt="GoRoundLogo" className="w-60 h-auto object-contain mx-auto" />
                <SidebarButton
                    iconPath={mdiPlus}
                    title="New Goal"
                    alwaysSelected
                    selectedBgColor='bg-black text-white shadow-md'
                    onClick={() => setShowModal(true)}
                >
                    Create Task
                </SidebarButton>
                <div className="w-full border-b border-gray-300" />
                <SidebarButton to="/" end iconPath={mdiHomeVariant}>
                    Home
                </SidebarButton>

                <SidebarButton to="/goals" iconPath={mdiTarget}>
                    Goals
                </SidebarButton>

                 <SidebarButton to="/friends" iconPath={mdiAccountCircle}>
                    Friends
                </SidebarButton>
                
                <SidebarButton to="/profile" iconPath={mdiAccountCircle}>
                    Profile
                </SidebarButton>
               
            </div>
            {showModal && <Modal onClose={() => setShowModal(false)} />}
        </>
    );
}

export default Sidebar;
