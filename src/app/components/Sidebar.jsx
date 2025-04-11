import all_duas from "@/assets/icons/all_duas.png";
import book from "@/assets/icons/book.png";
import bookmark from "@/assets/icons/bookmark.png";
import dua_qna from "@/assets/icons/dua_Q&A.png";
import home from "@/assets/icons/Home.png";
import support from "@/assets/icons/I_want_to_support.png";
import logo from "@/assets/icons/logo.png";
import memorize from "@/assets/icons/Memorize.png";
import ruqyah from "@/assets/icons/Ruqyah.png";

import Image from "next/image";

const Sidebar = () => {
    return (
        <div className="w-3 min-w-[5rem] flex flex-col items-center justify-between h-screen bg-white rounded-xl shadow-lg">
            <Image src={logo} width={73} height={73} alt="logo" />
            <nav>
                <ul>
                    <li>
                        <a
                            href="#home"
                            className="flex items-center gap-2 p-3 text-gray-700 rounded-md"
                        >
                            <Image
                                src={home}
                                width={30}
                                height={30}
                                alt="home"
                            />
                        </a>
                    </li>
                    <li>
                        <a
                            href="#home"
                            className="flex items-center gap-2 p-3 text-gray-700 rounded-md"
                        >
                            <Image
                                src={all_duas}
                                width={30}
                                height={30}
                                alt="all dua's"
                            />
                        </a>
                    </li>
                    <li>
                        <a
                            href="#home"
                            className="flex items-center gap-2 p-3 text-gray-700 rounded-md"
                        >
                            <Image
                                src={memorize}
                                width={30}
                                height={30}
                                alt="memorize"
                            />
                        </a>
                    </li>
                    <li>
                        <a
                            href="#home"
                            className="flex items-center gap-2 p-3 text-gray-700 rounded-md"
                        >
                            <Image
                                src={bookmark}
                                width={30}
                                height={30}
                                alt="bookmark"
                            />
                        </a>
                    </li>
                    <li>
                        <a
                            href="#home"
                            className="flex items-center gap-2 p-3 text-gray-700 rounded-md"
                        >
                            <Image
                                src={ruqyah}
                                width={30}
                                height={30}
                                alt="ruqyah"
                            />
                        </a>
                    </li>
                    <li>
                        <a
                            href="#home"
                            className="flex items-center gap-2 p-3 text-gray-700 rounded-md"
                        >
                            <Image
                                src={dua_qna}
                                width={30}
                                height={30}
                                alt="dua qna"
                            />
                        </a>
                    </li>
                    <li>
                        <a
                            href="#home"
                            className="flex items-center gap-2 p-3 text-gray-700 rounded-md"
                        >
                            <Image
                                src={book}
                                width={30}
                                height={30}
                                alt="book"
                            />
                        </a>
                    </li>
                </ul>
            </nav>
            <Image src={support} width={73} height={73} alt="support icon" />
        </div>
    );
};

export default Sidebar;
