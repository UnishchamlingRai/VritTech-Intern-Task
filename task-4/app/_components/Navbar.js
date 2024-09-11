"use client";
import Link from "next/link";
import { useIsAuthenticated } from "../hooks/useIsAuthenticated";
import Cookies from "js-cookie";

const Navbar = () => {
  const { authenticated } = useIsAuthenticated();

  function onLogOut() {
    Cookies.remove("auth");
    window.location.reload();
  }
  return (
    <nav className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="/">Logo</Link>
        </div>
        <div className="flex items-center gap-3">
          {authenticated && (
            <div className="hidden md:flex space-x-6">
              <Link href="/dashboard" className="hover:text-gray-400">
                Dashboard
              </Link>
            </div>
          )}

          {!authenticated ? (
            <div>
              <Link
                href="/login"
                className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600"
              >
                Login
              </Link>
            </div>
          ) : (
            <button
              onClick={onLogOut}
              className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600"
            >
              Log Out
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
