import React, { useContext  } from "react";
import AuthContext from "../Context/AuthContext";
import { NavLink, Outlet } from "react-router";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RxDashboard } from "react-icons/rx";
import { FaRegCircleUser } from "react-icons/fa6";
import { ImUsers } from "react-icons/im";
import { IoMdSettings } from "react-icons/io";

const HEADER_HEIGHT_PX = 68;
const SIDEBAR_WIDTH = 208;

const MainLayout = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  const initial = user?.fullname
    ? user.fullname.charAt(0).toUpperCase()
    : user?.email?.charAt(0).toUpperCase();

  const dashboardTitle =
    user?.role === "admin" ? "Admin Dashboard" : "User Dashboard";

  return (
    <>
      <div className="min-h-screen flex flex-col bg-white/50">
        <header className="fixed left-0 right-0 z-30 bg-white shadow-md border-b-slate-900 h-[68px]">
          <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-4">
            {/* Left: user info */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center text-blue-100 font-semibold text-lg">
                {initial || "U"}
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-gray-800 text-lg">
                  {user?.fullname}
                </span>
                <span className="text-xs text-gray-500 uppercase">
                  {user?.role || "ROLE"}
                </span>
              </div>
            </div>

            {/* Center: page title */}
            <h1 className="text-xl font-bold text-gray-800 hidden sm:block">
              {dashboardTitle}
            </h1>

            {/* Right: notifications + logout */}
            <div className="flex gap-3 justify-center items-center">
              <div className="w-10 h-10 rounded-full flex justify-center items-center border border-slate-300 hover:bg-slate-100 cursor-pointer">
                <IoMdNotificationsOutline className="h-6 w-6 text-slate-500" />
              </div>
              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-full text-[18px] font-medium bg-red-500 text-white hover:bg-red-600 transition cursor-pointer"
              >
                Logout
              </button>
            </div>
          </div>
        </header>

        {/* BODY: sidebar + main content */}
        <div className="flex flex-1 bg-white/50">
          {/* SIDEBAR */}
          <div className="flex pt-[68px] w-full">
            <aside className=" hidden md:flex flex-col border-r-slate-500 shadow-sm overflow-auto w-52 fixed left-0 top-[68px] bottom-0">
              <div className="px-4 py-3 border-b-slate-900 shadow-sm">
                <span className="text-sm font-semibold text-gray-700">
                  Menu
                </span>
              </div>

              <nav className="flex-1 px-2 py-3 space-y-1 text-sm">
                {/* Common links */}
                <NavItem
                  className="flex"
                  to={
                    user?.role === "admin"
                      ? "/adminDashboard"
                      : "/userDashboard"
                  }
                >
                  <div className="flex items-center gap-2">
                    <RxDashboard className="text-[20px]" />
                    Dashboard
                  </div>
                </NavItem>

                <NavItem to="/profile">
                  <div className="flex items-center gap-2">
                    <FaRegCircleUser className="text-[20px]" />
                    My Profile
                  </div>
                </NavItem>

                {/* Admin-only links */}
                {user?.role === "admin" && (
                  <>
                    <SidebarSection title="Admin">
                      <NavItem to="/admin/users">
                        <div className="flex items-center gap-2">
                          <ImUsers className="text-[20px]" />
                          Manage Users
                        </div>
                      </NavItem>
                      <NavItem to="/admin/blogs">
                        <div className="flex items-center gap-2">
                          <svg
                            className="w-5 h-5 "
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M10 3v4a1 1 0 0 1-1 1H5m4 8h6m-6-4h6m4-8v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1Z"
                            />
                          </svg>
                          All Blogs
                        </div>
                      </NavItem>
                      <NavItem to="/admin/settings">
                        <div className="flex items-center gap-2">
                          <IoMdSettings className="text-[20px]" />
                          Settings
                        </div>
                      </NavItem>
                    </SidebarSection>
                  </>
                )}

                {/* User-only links */}
                {user?.role === "user" && (
                  <SidebarSection title="Blogs">
                    <NavItem to="/user/blogs">
                      <div className="flex items-center gap-2">
                        <svg
                          class="w-5 h-5 "
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M10 3v4a1 1 0 0 1-1 1H5m4 8h6m-6-4h6m4-8v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1Z"
                          />
                        </svg>
                        My Blogs
                      </div>
                    </NavItem>
                    <NavItem to="/user/blogs/create">Create Blog</NavItem>
                  </SidebarSection>
                )}
              </nav>
            </aside>

            {/* MAIN CONTENT */}
            <main className="flex-1 p-4 md:p-6 bg-slate-200/40 overflow-auto ml-52" style={{minHeight: `calc(100vh - 68px)`}}>
              <div className="">
                <Outlet />
              </div>
            </main>
          </div>

          
        </div>

        {/* FOOTER */}
        <footer className="border-t-slate-500 shadow-sm bg-white/50 text-xs text-gray-500 py-2 px-4 text-center">
          © {new Date().getFullYear()} Blog Management Panel. All rights
          reserved.
        </footer>
      </div>
    </>
  );
};

export default MainLayout;

const NavItem = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      end
      className={({ isActive }) =>
        [
          "block px-3 py-2 rounded-md font-medium transition text-[15px]",
          isActive
            ? "bg-blue-100 text-blue-700"
            : "text-gray-700 hover:bg-gray-100 hover:text-gray-900",
        ].join(" ")
      }
    >
      {children}
    </NavLink>
  );
};

const SidebarSection = ({ title, children }) => (
  <div className="mt-3">
    <p className="px-3 mb-1 text-[11px] font-semibold text-gray-400 uppercase tracking-wide">
      {title}
    </p>
    <div className="space-y-1">{children}</div>
  </div>
);
