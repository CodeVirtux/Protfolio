import React from 'react';
import { GithubIcon, LinkedInIcon, MailIcon } from './Icons';

const socialLinks = [
  { href: "#", icon: LinkedInIcon, label: "LinkedIn" },
  { href: "#", icon: GithubIcon, label: "GitHub" },
  { href: "mailto:abdellah.aitsi@example.com", icon: MailIcon, label: "Email" },
];

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#080808] py-8">
            <div className="container mx-auto px-6 text-center text-gray-500">
                <div className="flex justify-center space-x-6 mb-4">
                    {socialLinks.map((link, index) => (
                        <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label} className="text-gray-400 hover:text-white transition-colors duration-300 social-glow">
                           <link.icon className="w-6 h-6" />
                        </a>
                    ))}
                </div>
                <p>&copy; {new Date().getFullYear()} Abdellah Ait-si. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;