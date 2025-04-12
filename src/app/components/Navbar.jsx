import profile from "@/assets/icons/profile.png";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
const Navbar = ({ onHamburgerClick, sidebarOpen }) => {
    return (
        <div className="flex items-center justify-between p-4">
            <div className="text-black flex items-center gap-4">
                {sidebarOpen ? (
                    <RxCross2
                        className={`transition-all duration-300 ease-in-out inset-0 cursor-pointer md:hidden ${
                            sidebarOpen
                                ? "opacity-100 scale-100"
                                : "opacity-0 scale-90"
                        }`}
                        onClick={onHamburgerClick}
                    />
                ) : (
                    <RxHamburgerMenu
                        className={`transition-all duration-300 ease-in-out inset-0 cursor-pointer md:hidden ${
                            sidebarOpen
                                ? "opacity-0 scale-90"
                                : "opacity-100 scale-100"
                        }`}
                        onClick={onHamburgerClick}
                    />
                )}

                <h1 className="font-semibold font-poppins text-xl md:text-2xl font">
                    Dua Page
                </h1>
            </div>

            <div className="flex items-center md:gap-[269px] gap-4">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search by Dua Name"
                        // value={searchText}
                        // onChange={(e) => setSearchText(e.target.value)}
                        // onKeyDown={handleKeyDown}
                        className="border text-black border-gray-300 rounded-lg bg-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-200 font-inter font-medium hidden md:flex "
                    />
                    <button className="absolute right-1 top-1/2 transform -translate-y-1/2 rounded-lg p-2 bg-gray-200 text-gray-500 hover:text-gray-700">
                        <CiSearch size={20} />
                    </button>
                </div>
                <Image src={profile} alt="Profile image" />
            </div>
        </div>
    );
};

export default Navbar;
