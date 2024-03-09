import React from "react";

const SocialLinks = ({ vertical }) => {
  const socialLinks = [
    {
      media: "facebook",
      svg: (
        <svg
          className="w-8 h-8 fill-current"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
        </svg>
      ),
      label: "Facebook",
      href: "https://facebook.com/gm",
      show: true,
    },
    {
      media: "linkedin",
      svg: (
        <svg
          className="w-8 h-8 fill-current"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
        </svg>
      ),
      label: "LinkedIn",
      href: "https://linkedin.com/gm",
      show: true,
    },
    {
      media: "x",
      svg: (
        <svg
          className="w-8 h-8 fill-current"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
        </svg>
      ),
      label: "Twitter",
      href: "https://twitter.com/gm",
      show: true,
    },
    {
      media: "instagram",
      svg: (
        <svg
          className="w-8 h-8 fill-current"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="20.145" cy="11.892" r="1" />
          <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
          <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
        </svg>
      ),
      label: "Instagram",
      href: "https://Instagram.com/gm",
      show: true,
    },
    {
      media: "github",
      svg: (
        <svg
          className="w-8 h-8 fill-current"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="20.145" cy="11.892" r="1" />
          <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
          <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
        </svg>
      ),
      label: "Github",
      href: "https://github.com/gm",
      show: false,
    },
  ];
  if (vertical) {
    return (
      <div className="flex flex-row justify-around ">
        <ul className="md:order-1  md:mb-0 gap-2 mx-2 flex justify-center items-center flex-col">
          {socialLinks.map((i, index) => {
            if (i.show) {
              return (
                <li key={index} className="cursor-pointer">
                  <a
                    href={i.href}
                    target="_blank" // This will open the link in a new tab
                    rel="noopener noreferrer" // Required for security reasons
                    className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out"
                    aria-label={i.label}
                  >
                    {i.svg}
                  </a>
                </li>
              );
            }
            return null; // Render nothing if show is false
          })}
        </ul>
      </div>
    );
  } else {
    return (
      <div className="flex flex-row justify-around">
        {/* Social links */}
        <ul className="md:order-1 md:ml-4 md:mb-0 gap-2 mx-2 flex justify-center items-center">
          {socialLinks.map((i, index) => {
            if (i.show) {
              return (
                <li key={index} className="cursor-pointer">
                  <a
                    href={i.href}
                    target="_blank" // This will open the link in a new tab
                    rel="noopener noreferrer" // Required for security reasons
                    className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out"
                    aria-label={i.label}
                  >
                    {i.svg}
                  </a>
                </li>
              );
            }
            return null; // Render nothing if show is false
          })}
        </ul>

        {/* Copyrights note */}
        <div className="text-gray-400 text-sm mr-4 text-center flex justify-center items-center">
          &copy; GMachines.com. All rights reserved.
        </div>
      </div>
    );
  }
};

export default SocialLinks;
