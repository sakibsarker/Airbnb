"use client";
import React from 'react'

interface MenuItemProps{
    onClick:()=>void;
    label:string;
}

const MenuItems:React.FC<MenuItemProps> = ({onClick,label}) => {
  return (
    <div onClick={onClick} className="px-4 py-1 hover:bg-neutral-100 transition">
        {label}
    </div>
  )
} 

export default MenuItems 