"use client";
import { useState } from "react";
import Cookies from "js-cookie";

import React from "react";

const LoginForm = () => {
  const [username, setUsername] = useState("Unish");
  const [password, setPassword] = useState("password123");

  const handleLogin = (e) => {
    e.preventDefault();
    // Hardcoded user credentials
    const validUser = {
      username: "Unish",
      password: "password123",
    };

    if (username === validUser.username && password === validUser.password) {
      const auth = {
        authToken: "validToken",
        username: validUser.username,
      };
      Cookies.set("auth", JSON.stringify(auth), { expires: 1 });
      window.location.replace("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };
  return (
    <form
      className="mt-6 space-y-4 md:w-2/6 shadow p-6 rounded-lg"
      onSubmit={handleLogin}
    >
      <div>
        <label
          htmlFor="userName"
          className="block text-sm font-medium text-gray-600"
        >
          User Name
        </label>
        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          id="userName"
          className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>

      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-600"
        >
          Password
        </label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          id="password"
          className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Enter your password"
        />
      </div>

      <button
        type="submit"
        className="w-full px-4 py-2 text-white bg-black rounded-md hover:bg-gray-900 focus:outline-none focus:bg-gray-700"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
