'use client';
import React from 'react';
import menu_data from '@/data/menu-data';
import Link from 'next/link';

const Menus = () => {
  return (
    <ul>
      {menu_data?.map(menu => (
        <li key={menu.id}>
          <Link href={menu.link}>{menu.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Menus;
