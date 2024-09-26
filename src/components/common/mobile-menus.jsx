import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { mobile_menu } from '@/data/menu-data';

const MobileMenus = () => {
  const [isActiveMenu, setIsActiveMenu] = useState('');

  // handleOpenSubMenu
  const handleOpenSubMenu = title => {
    if (title === isActiveMenu) {
      setIsActiveMenu('');
    } else {
      setIsActiveMenu(title);
    }
  };
  return (
    <>
      <nav className="tp-main-menu-content">
        {mobile_menu?.map((menu, i) => (
          <li key={menu.id}>
            <Link href={menu.link}>{menu.title}</Link>
          </li>
        ))}
      </nav>
    </>
  );
};

export default MobileMenus;
