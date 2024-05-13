import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleNavigation = async (path) => {
    await router.push(path);
    router.reload();
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const menuItems = [
    { path: '/', label: 'Home' },
    { path: '/things', label: 'Start Your Journey' },
    { path: '/map', label: 'Discover Victoria' },
    {
      label: 'Learning resources',
      dropdown: [
        { path: '/textdata', label: 'Australian slangs' },
        { path: '/learn', label: 'Australian accent' },
      ]
    },
    { path: '/chatbot', label: 'Australian Comprehension' },
    { path: '/about', label: 'About' },
  ];

  return (
    <div className="flex sticky top-0 z-10 bg-[#edf2ec] shadow-md mb-6 justify-between rounded-3xl p-2">
      <div className="relative w-16 h-16 z-20" onClick={() => router.push('/')}>
        <Image src="/pics/LOGO.png" layout="fill" objectFit="contain" alt="Logo" className="scale-150 cursor-pointer" />
      </div>

      <div className="flex header-menu_part items-center text-2xl space-x-6">
        {menuItems.map(item => (
          item.dropdown ? (
            <div
              key={item.label}
              className={`px-4 cursor-pointer rounded-2xl transition-transform duration-200 ease-out hover:scale-125 ${dropdownOpen && item.label === 'Learning resources' ? "underline text-[#EF7B7B] underline-offset-8 decoration-[3px]" : "hover:text-[#edf2ec] hover:bg-[#EF7B7B]"}`}
              onClick={toggleDropdown}
            >
              {item.label} {item.dropdown && '▼'}
              {dropdownOpen && item.label === 'Learning resources' && (
                <div className="absolute mt-2 bg-white text-red-400 shadow-lg rounded-xl">
                  {item.dropdown.map(subItem => (
                    <div
                      key={subItem.label}
                      className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                      onClick={() => handleNavigation(subItem.path)}
                    >
                      {subItem.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div
              key={item.label}
              className={`px-4 cursor-pointer rounded-2xl transition-transform duration-200 ease-out hover:scale-125 ${router.pathname === item.path ? "underline text-[#EF7B7B] underline-offset-8 decoration-[3px]" : "hover:text-[#edf2ec] hover:bg-[#EF7B7B]"}`}
              onClick={() => handleNavigation(item.path)}
            >
              {item.label}
            </div>
          )
        ))}
      </div>

    </div>
  );
}
