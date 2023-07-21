"use client";
import React, {useState,useCallback} from 'react';
import Avatar from './Avatar';
import {AiOutlineMenu} from 'react-icons/ai';
import MenuItems from './MenuItems';
const UserMenu = () => {
    const [isOpen,setIsOpen]=useState(false)
    const taggleOpen=useCallback(()=>{
        setIsOpen((value)=>!value);
    },[])
  return (
    <div className="relative">
        <div className="flex flex-row items-center gap-3">
            <div  className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointers">
                Airbnb your home
            </div>
            <div onClick={taggleOpen} className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition">
                <AiOutlineMenu size={18}/>
                <div className="hidden md:block">
                    <Avatar/>
                </div>
            </div> 
        </div>
        {isOpen && (
            <div className="absolute rounded-xl bg-white shadow-md w-[40vm] md:w-3/6 overflow-hidden right-0 top-12 text-sm">
                <div className="flex flex-col cursor-pointer">
                    <>
                    <MenuItems
                    onClick={()=>{}}
                     label='login'/>
                     <MenuItems
                    onClick={()=>{}}
                     label='Signup'/>
                    </>
                  
                </div>
            </div>
        )}
    </div>
  )
}

export default UserMenu