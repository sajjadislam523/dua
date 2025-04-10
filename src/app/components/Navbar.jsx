const Navbar = () => {
    return (
        <div className="flex items-center justify-between p-4">
            <h1 className="text-xl font-bold">Dua Page</h1>
            <div className="relative">
                <input
                    type="text"
                    placeholder="Search by Dua Name"
                    // value={searchText}
                    // onChange={(e) => setSearchText(e.target.value)}
                    // onKeyDown={handleKeyDown}
                    className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
        </div>
    );
};

export default Navbar;
