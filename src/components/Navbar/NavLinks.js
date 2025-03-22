import React from 'react';
import { HashLink } from 'react-router-hash-link';

const NavLinks = ({ navdata = [], ctadata = {} }) => {
    return (
        <>
            {navdata.map((navlink, index) => (
                <HashLink 
                    key={index} 
                    className="px-4 font-extrabold text-gray-500 hover:text-blue-900" 
                    smooth={true.toString()} 
                    to={navlink.href}
                >
                    {navlink.linktext}
                </HashLink>
            ))}
            {ctadata.CTAHref && (
                <HashLink 
                    className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-xl" 
                    smooth={true.toString()} 
                    to={ctadata.CTAHref}
                >
                    {ctadata.CTAText}
                </HashLink>
            )}
        </>
    );
};

export default NavLinks;
