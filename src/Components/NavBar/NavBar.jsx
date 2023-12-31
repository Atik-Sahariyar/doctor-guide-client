const NavBar = () => {
  const navLinks = (
    <>
      <li>
        <a> {`HOME >`}</a>
      </li>
      <li>
        <a>{`FEATURES >`}</a>
      </li>
      <li>
        <a>{`DEPARTMENT >`}</a>
      </li>
      <li>
        <a>{`EVENT  >`}</a>
      </li>
      <li>
        <a>{`CONTACT US >`}</a>
      </li>
      <li>
        <button className="btn btn-sm bg-[#FF8B42] md:hidden  w-full hover:bg-[#b84d0b] text-white">
          LOGIN
        </button>
      </li>
      <li>
        <button className="btn btn-sm bg-[#FF8B42] md:hidden  w-full hover:bg-[#b84d0b] text-white ml-4">
          SIGNUP
        </button>
      </li>
    </>
  );
  return (
    <div className="navbar md:px-10 bg-[#273240] py-3 text-white">
      <div className="navbar-start w-full">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm text-gray-800 dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <img
          src="https://i.ibb.co/YNhQDPL/logo.png"
          className=" w-[49px] h-[55px]"
          alt="logo"
        />
        <a className=" text-3xl font-bold text-[#FF8B42]">Doctor Guide</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          { navLinks}
        </ul>
      </div>
      <div className="navbar-end ">
        <button className="btn bg-[#FF8B42] hidden md:block hover:bg-[#b84d0b] text-white">
          LOGIN
        </button>
        <button className="btn bg-[#FF8B42] hidden md:block hover:bg-[#b84d0b] text-white ml-4">
         SIGNUP
         </button>
      </div>
    </div>
  );
};

export default NavBar;
