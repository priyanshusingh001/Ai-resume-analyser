import { Sparkles, Menu, LogOut } from "lucide-react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";

function Navbar() {

  const navigate = useNavigate();

  const {
    user,
    logout
  } = useContext(AuthContext);

  const handleLogout = () => {

    logout();

    navigate("/login");

  };

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">

      <div className="w-full px-8 py-4">

        <div className="flex items-center justify-between">

          {/* Logo */}

          <div className="flex items-center gap-3">

            <div className="p-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500">

              <Sparkles
                size={22}
                className="text-white"
              />

            </div>

            <div>

              <h1
                className="
                text-2xl
                font-extrabold
                bg-gradient-to-r
                from-blue-400
                to-cyan-400
                bg-clip-text
                text-transparent
              "
              >
                ResumeAI
              </h1>

              <p className="text-xs text-slate-400">
                AI Powered Resume Intelligence
              </p>

            </div>

          </div>

          {/* Desktop Menu */}

          <div className="hidden md:flex items-center gap-6">

            <button className="text-slate-300 hover:text-white transition">
              Dashboard
            </button>

            <button className="text-slate-300 hover:text-white transition">
              History
            </button>

            {/* User */}

            {user && (

              <div className="flex items-center gap-4">

                <div
                  className="
                  px-4
                  py-2
                  rounded-xl
                  bg-white/5
                  border
                  border-white/10
                  text-slate-300
                "
                >
                  👋 {user.name}
                </div>

                <button
                  onClick={handleLogout}
                  className="
                  flex
                  items-center
                  gap-2
                  px-4
                  py-2
                  rounded-xl
                  bg-red-500/20
                  border
                  border-red-500/30
                  text-red-300
                  hover:bg-red-500/30
                  transition
                "
                >

                  <LogOut size={16} />

                  Logout

                </button>

              </div>

            )}

          </div>

          {/* Mobile */}

          <button className="md:hidden text-white">
            <Menu size={24} />
          </button>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;