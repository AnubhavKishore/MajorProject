import React from "react";
import Link from "next/link";

interface NavbarProps {
    title: string;
}

const Navbar: React.FC<NavbarProps> = ({ title }) => {
    return (
        <nav className="bg-gray-800 text-white p-4 flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
                <span className="text-xl font-bold">{title}</span>
                <ul className="flex gap-4">
                    <li><Link href="/ride" className="hover:underline">Ride</Link></li>
                    <li><Link href="/drive" className="hover:underline">Drive</Link></li>
                    <li><Link href="/about" className="hover:underline">About Us</Link></li>
                </ul>
            </div>
            <ul className="flex gap-4">
                <li><Link href="/help" className="hover:underline">Help</Link></li>
                <li><Link href="/signup" className="hover:underline">Sign Up</Link></li>
                <li><Link href="/login" className="hover:underline">Login</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
