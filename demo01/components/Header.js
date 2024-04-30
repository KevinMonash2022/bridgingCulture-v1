import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();

  const handleNavigation = async (path) => {
    await router.push(path);
    router.reload();
  };

  const menuItems = [
    { path: '/', label: 'Home' },
    { path: '/things', label: 'Start Your Journey' },
    { path: '/map', label: 'Discover Victoria' },
    { path: '/chatbot', label: 'Aussie bot' },
    { path: '/learn', label: 'Aussie Accent' },
  ];

  return (
    <div className="flex sticky top-0 z-10 bg-[#edf2ec] shadow-md mb-6 justify-between">
      <div className="relative w-12 h-12 z-20" onClick={() => router.push('/')}>
        <div className="absolute -left-4 -top-12 w-40 h-40 z-30 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out">
          <Image src="/pics/LOGO.png" layout="fill" objectFit="contain" alt="Logo" className="header-logo" />
        </div>
      </div>

      <div className="flex header-menu_part items-center text-2xl space-x-6">
        {menuItems.map(item => (
          <div
            key={item.label}
            className={`px-4 cursor-pointer rounded-2xl transition-transform duration-200 ease-out hover:scale-125 ${router.pathname === item.path ? "underline text-[#EF7B7B] underline-offset-8 decoration-[3px]" : "hover:text-[#edf2ec] hover:bg-[#EF7B7B]"}`
            }
            onClick={() => handleNavigation(item.path)}
          >
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
}
