import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="border-t bg-white py-4 text-center text-sm text-gray-600">
            <p>
                &copy; {new Date().getFullYear()} My Company. All rights
                reserved.
            </p>
        </footer>
    );
};

export default Footer;
