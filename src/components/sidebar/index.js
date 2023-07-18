import React from 'react';
import './sidebar.css';
import SidebarButton from './sidebarButton';
import { MdFavorite } from "react-icons/md";
import { FaGripfire, FaPlay } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";

export default function Sidebar() {
  return (
    <div className='sidebar-container'>
      <img src='https://i.pinimg.com/originals/f8/63/8d/f8638da91cca61c2cf98e0065bb28026.jpghttps://warehouse-camo.ingress.cmh1.psfhosted.org/ecf9e97a8ad1f143d6a0a9d13b82bdb6e014b7f0/68747470733a2f2f7365637572https://warehouse-camo.ingress.us-east-2.pypi.io/ecf9e97a8ad1f143d6a0a9d13b82bdb6e014b7f0/https://hi-static.z-dn.net/files/d2b/497268f6b78dab7f7c1a16331234b46e.jpg' className='profile-image' alt='profile' />
      <div>
        <SidebarButton title="Feed" to="/feed" icon={<MdSpaceDashboard />} />
        <SidebarButton title="Trending" to="/trending" icon={<FaGripfire />} />
        <SidebarButton title="Player" to="/player" icon={<FaPlay />} />
        <SidebarButton title="Favorites" to="/favorites" icon={<MdFavorite />} />
        <SidebarButton title="Library" to="/library" icon={<IoLibrary />} />
      </div>
      <SidebarButton title="Sing Out" to="" icon={<FaSignOutAlt />} />
    </div>
  )
}
