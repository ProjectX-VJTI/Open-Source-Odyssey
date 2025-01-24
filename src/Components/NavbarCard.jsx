import React from 'react';

const NavbarCard = ({ title, description, icon }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-6 mb-4">
            {icon && (
                <img
                    src={icon}
                    alt={title}
                    className="w-16 h-16 mb-4 mx-auto"
                />
            )}
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <p className="text-sm">{description}</p>
        </div>
    );
};

export default NavbarCard;
