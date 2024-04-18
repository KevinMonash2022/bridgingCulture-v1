import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();


  const menuItems = [
    { path: '/', label: 'Home' },
    { path: '/things', label: 'Explore' },
    { path: '/map', label: 'Discover Victoria' }
  ];

  return (
    <div className="flex sticky top-0 z-50 bg-[#edf2ec] shadow-md p-1">
      <div className="cursor-pointer hover:scale-150 transition-transform duration-200 ease-out" onClick={() => router.push('/')}>
        <div className="relative" style={{ width: '144px', height: '90px' }}>
          <Image src="/pics/LOGO-pre.png" layout="fill" objectFit="cover" alt="Logo" />
        </div>
      </div>

      <div className="flex items-center text-2xl space-x-6">
        {menuItems.map(item => (
          <div
            key={item.label}
            className={`px-4 cursor-pointer rounded-2xl transition-transform duration-200 ease-out hover:scale-125 ${router.pathname === item.path ? "underline text-[#EF7B7B] underline-offset-8 decoration-[3px]" : "hover:text-[#edf2ec] hover:bg-[#EF7B7B]"
              }`}
            onClick={() => router.push(item.path)}
          >
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
}
