import React, { useState } from "react";

const SubscriptionForm = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Email submitted:", email);
  };

  return (
    <form
      onSubmit={handleSubmit}
      id="revue-form"
      name="revue-form"
      target="_blank"
      className="p-2 mt-8 transition duration-500 ease-in-out transform border-2 bg-gray-50 md:mx-auto rounded-xl sm:max-w-lg sm:flex"
    >
      <div className="flex-1 min-w-0 revue-form-group">
        <label htmlFor="member_email" className="sr-only">
          Email address
        </label>
        <input
          id="cta-email"
          type="email"
          value={email}
          onChange={handleEmailChange}
          className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform bg-transparent border border-transparent rounded-md text-neutral-600 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
          placeholder="Enter your email"
        />
      </div>
      <div className="mt-4 sm:mt-0 sm:ml-3 revue-form-actions">
        <button
          type="submit"
          className="block w-full px-5 py-3 text-base font-medium text-white bg-blue-600 border border-transparent rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 sm:px-10"
        >
          Notify me
        </button>
      </div>
    </form>
  );
};

export default SubscriptionForm;
