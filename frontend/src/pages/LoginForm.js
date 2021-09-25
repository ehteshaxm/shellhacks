import React, { useState } from "react";
import firebase from "firebase";

const LoginForm = ({ firebase }) => {
  const [register, setRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = () => {
    firebase
      .login({
        email,
        password,
      })
      .catch((err) => alert("Invalid Login Credentials"));
  };

  const registerHandler = () => {
    firebase
      .createUser({ email, password })
      .catch((err) => alert("That User Already Exists", "error"));
  };

  return (
    <div className="flex items-center justify-center mt-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-sm w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-90">
            {register ? "Create a new account" : "Sign in to your account"}
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{" "}
            {register ? (
              <button
                onClick={() => setRegister(false)}
                className="font-medium text-green-500 hover:text-green-600"
              >
                Login to an existing account
              </button>
            ) : (
              <button
                onClick={() => setRegister(true)}
                className="font-medium text-green-500 hover:text-green-600"
              >
                Register for a new one
              </button>
            )}
          </p>
        </div>
        <form className="mt-8 space-y-6">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-green-500 hover:text-green-600 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              {register ? (
                <button
                  className="font-medium text-green-500 hover:text-green-600"
                  onClick={() => setRegister(false)}
                >
                  Already a User? Sign In
                </button>
              ) : (
                <button
                  className="font-medium text-green-500 hover:text-green-600"
                  onClick={() => setRegister(true)}
                >
                  New User? Register
                </button>
              )}
            </div>
          </div>

          <div>
            {register ? (
              <button
                onClick={registerHandler}
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Register
              </button>
            ) : (
              <button
                onClick={loginHandler}
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign in
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
