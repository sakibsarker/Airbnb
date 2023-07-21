"use client";
import React from 'react'
import Image from 'next/image'

const Avatar = () => {
  return (
    <Image
    alt="Logo"
    className="hidden md:block cursor-pointer"
    height='30'
    width='30'
    src="../../../public/images/next.svg"
    />
  )
}

export default Avatar