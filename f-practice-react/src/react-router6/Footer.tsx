import React from "react";

const Footer = (): React.ReactElement => {
  return (
    <footer className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <div>
            <h4 className="font-bold">About Us</h4>
            <p className="text-sm">
              We are a company dedicated to providing the best services.
            </p>
          </div>
          <div>
            <h4 className="font-bold">Contact</h4>
            <p className="text-sm">
              Email: info@example.com
              <br />
              Phone: +123 456 7890
            </p>
          </div>
          <div>
            <h4 className="font-bold">Follow Us</h4>
            <div className="flex space-x-2">
              <a
                href="https://facebook.com"
                className="text-gray-400 hover:text-white"
              >
                Facebook
              </a>
              <a
                href="https://twitter.com"
                className="text-gray-400 hover:text-white"
              >
                Twitter
              </a>
              <a
                href="https://instagram.com"
                className="text-gray-400 hover:text-white"
              >
                Instagram
              </a>
            </div>
            <p className="text-sm">
              &copy; 2023 Your Company. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
