import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-100 p-4 text-center text-sm text-gray-600 w-full ">
      <div className="mx-28 flex justify-between">
        <div className="space-x-4">
          <span>Terms of Service</span>
          <span>Privacy Policy</span>
          <span>Security</span>
          <span>Sitemap</span>
        </div>
        <div>© 2024 Innozus. All rights reserved.</div>
      </div>
    </footer>
  );
}

export default Footer;
