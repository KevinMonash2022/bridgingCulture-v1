import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Footer() {
  const router = useRouter();

  const menuItems = [
    { path: '/things', label: 'Start Your Journey  |' },
    { path: '/map', label: 'Discover Victoria  |' },
    { path: '/learn', label: 'Aussie Accent  |' },
    { path: '/chatbot', label: 'Chatbot |' },
    { path: '/about', label: 'About us' },
  ];

  return (
    <footer className="bg-red-300 text-white p-6 text-center">
      <div className="flex justify-center items-center space-x-4 mb-6">
        <div className="shrink-0">
          {/* Update the src path to the correct location */}
          <Image src="/pics/Logo-01.png" alt="Logo" width={50} height={50} />
        </div>
        <span className="text-lg font-semibold">Bridge Beyond Borders</span>
      </div>
      <div className="flex justify-center space-x-4 mb-6">
        {menuItems.map(item => (
          <span
            key={item.label}
            onClick={() => router.push(item.path)}
            className="cursor-pointer text-lg hover:text-blue-300"
          >
            {item.label}
          </span>
        ))}
      </div>
      <div>
        <span className="text-sm">
          Copyright © 2024 Bridge Beyond Borders
        </span>
      </div>
    </footer>
  );
}
