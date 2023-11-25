import { useState } from "react";
import logo from "../assets/logo.webp";
import { navArrow } from "../assets/svg";
import { navItems } from "../constants";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="">
            <div className="capitalize bg-[#1e1e1e] text-white tracking-wider leading-6 mx-auto flex justify-center items-center text-[8px] md:text-[13px]">
                <div>Worldwide Shipping* | Free returns* | Handpicked artworks</div>
            </div>
            <div className=" bg-[#1e1e1e] lg:px-20 px-4 pt-3 pb-3 hidden md:block">
                <div className="flex lg:space-x-4 items-center lg:px-24 justify-between flex-col md:flex-row">
                    <div className="flex items-center justify-center h-[40px]">
                        <a href="">
                            <img src={logo} alt="DiRums LOGO " className="w-[200px]" height="auto" />
                        </a>
                        <div className="ml-8 mt-2 md:block rounded-md bg-[#1e1e1e] outline-none text-[#ffcc7e] tracking-wider"></div>
                    </div>
                    <div className=" w-full pl-4 pr-24 flex space-x-3">
                        <div className="relative grow bg-white rounded-md">
                            <input
                                type="text"
                                className="rounded-md outline-none ms-10 py-3 pl-2 text-[#ba8249] text-sm tracking-wide h-8 w-full"
                                placeholder="Search for artworks, artists, themes and many more"
                                required=""
                                id="search"
                            />
                            <svg
                                width="19"
                                height="19"
                                viewBox="0 0 19 19"
                                fill="#000000"
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute top-1.5 left-4 active:animate-spin hover:cursor-pointer hover:scale-110"
                            >
                                <path
                                    d="M13.1538 8.03846C13.1538 6.63021 12.6533 5.42558 11.6523 4.42458C10.6513 3.42358 9.44671 2.92308 8.03846 2.92308C6.63021 2.92308 5.42558 3.42358 4.42458 4.42458C3.42358 5.42558 2.92308 6.63021 2.92308 8.03846C2.92308 9.44671 3.42358 10.6513 4.42458 11.6523C5.42558 12.6533 6.63021 13.1538 8.03846 13.1538C9.44671 13.1538 10.6513 12.6533 11.6523 11.6523C12.6533 10.6513 13.1538 9.44671 13.1538 8.03846ZM19 17.5385C19 17.9343 18.8554 18.2768 18.5661 18.5661C18.2768 18.8554 17.9343 19 17.5385 19C17.1274 19 16.7849 18.8554 16.5108 18.5661L12.5944 14.6611C11.2318 15.605 9.71314 16.0769 8.03846 16.0769C6.94992 16.0769 5.90895 15.8657 4.91557 15.4432C3.92218 15.0207 3.06581 14.4498 2.34645 13.7305C1.6271 13.0111 1.05619 12.1547 0.633714 11.1614C0.211238 10.168 0 9.127 0 8.03846C0 6.94992 0.211238 5.90895 0.633714 4.91557C1.05619 3.92218 1.6271 3.06581 2.34645 2.34645C3.06581 1.6271 3.92218 1.05619 4.91557 0.633714C5.90895 0.211238 6.94992 0 8.03846 0C9.127 0 10.168 0.211238 11.1614 0.633714C12.1547 1.05619 13.0111 1.6271 13.7305 2.34645C14.4498 3.06581 15.0207 3.92218 15.4432 4.91557C15.8657 5.90895 16.0769 6.94992 16.0769 8.03846C16.0769 9.71314 15.605 11.2318 14.6611 12.5944L18.5775 16.5108C18.8592 16.7925 19 17.135 19 17.5385Z"
                                    fill="#000000"
                                ></path>
                            </svg>
                            <div className="results px-2 absolute bg-white w-full z-[999] hidden"></div>
                        </div>
                    </div>
                    <div className="gap-x-5 flex">
                        <a href="/" className="relative">
                            <i className="far fa-heart text-2xl text-[#ffcc7e]"></i>
                        </a>
                        <a href="/" className="relative mt-1">
                            <svg
                                fill="#ffcc7e"
                                xmlns="http://www.w3.org/2000/svg"
                                id="Bold"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                            >
                                <path d="M20.5,6.2H18V6A6,6,0,0,0,6,6v.2H3.5A3.543,3.543,0,0,0,0,9.7v8.8A5.549,5.549,0,0,0,5.5,24h13A5.549,5.549,0,0,0,24,18.5V9.7A3.543,3.543,0,0,0,20.5,6.2ZM9,6a3,3,0,0,1,6,0v.2H9ZM21,18.5A2.476,2.476,0,0,1,18.5,21H5.5A2.476,2.476,0,0,1,3,18.5V9.7a.472.472,0,0,1,.5-.5H6v1.3a1.5,1.5,0,0,0,3,0V9.2h6v1.3a1.5,1.5,0,0,0,3,0V9.2h2.5a.472.472,0,0,1,.5.5Z"></path>
                            </svg>
                        </a>
                        <i className="far fa-user-circle text-2xl text-[#ffcc7e] cursor-pointer"></i>
                    </div>
                </div>
            </div>
            <div className="bg-[#1e1e1e] px-5 pt-1 pb-1 md:hidden">
                <div className="flex items-center flex-col md:flex-row">
                    {/* two div */}
                    <div className="flex w-full justify-between items-center">
                        <svg
                            className="z-30 flex items-center cursor-pointer"
                            fill="#ffcc7e"
                            onClick={() => setIsOpen(!isOpen)}
                            viewBox="0 0 100 80"
                            width="16"
                            height="24"
                        >
                            <rect width="100" height="10"></rect>
                            <rect y="30" width="100" height="10"></rect>
                            <rect y="60" width="100" height="10"></rect>
                        </svg>

                        {/* 3 div */}
                        {isOpen && (
                            <div className="top-0 left-0 w-3\4 ss:w-1/2 bg-white p-3 pt-5 ss:pt-10 sm:p-10 text-white fixed min-h-screen z-40 ease-in-out duration-500">
                                <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    className="flex text-4xl text-[#ffcc7e] items-center cursor-pointer fixed left-5 transition ease-in-out duration-300 ss:left-10 top-3 ss:top-6 z-50"
                                >
                                    x
                                </button>
                                {/* nav-item start here */}
                                {navItems.map((item, i) => {
                                    return (
                                        <div
                                            key={i}
                                            onClick={() => setIsOpen(!isOpen)}
                                            className="my-5 ml-2 border-b-[1px] gap-3 py-3 flex justify-between items-center pr-3"
                                        >
                                            <p className="text-black text-[12px] font-semibold sm:font-bold">
                                                {item.title}
                                            </p>
                                            <img src={navArrow} alt="arrow" />
                                        </div>
                                    );
                                })}

                                {/* nav-item end here */}
                            </div>
                        )}
                        <div className="ml-5">
                            <a href="/">
                                <img className="w-16 h-auto mt-2" src={logo} alt="logo" />
                            </a>
                        </div>
                        <div className=" gap-x-4 flex mt-3 items-center">
                            <a href="" className="relative">
                                <i className="far fa-heart text-base text-[#ffcc7e]"></i>
                            </a>
                            <a href="" className="relative">
                                <svg
                                    fill="#ffcc7e"
                                    xmlns="http://www.w3.org/2000/svg"
                                    id="Bold"
                                    viewBox="0 0 24 24"
                                    width="16"
                                    height="24"
                                >
                                    <path d="M20.5,6.2H18V6A6,6,0,0,0,6,6v.2H3.5A3.543,3.543,0,0,0,0,9.7v8.8A5.549,5.549,0,0,0,5.5,24h13A5.549,5.549,0,0,0,24,18.5V9.7A3.543,3.543,0,0,0,20.5,6.2ZM9,6a3,3,0,0,1,6,0v.2H9ZM21,18.5A2.476,2.476,0,0,1,18.5,21H5.5A2.476,2.476,0,0,1,3,18.5V9.7a.472.472,0,0,1,.5-.5H6v1.3a1.5,1.5,0,0,0,3,0V9.2h6v1.3a1.5,1.5,0,0,0,3,0V9.2h2.5a.472.472,0,0,1,.5.5Z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="w-full ml-0 flex items-center">
                        <div className="relative w-full mx-auto">
                            <svg
                                width="15"
                                height="15"
                                viewBox="0 0 19 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute top-2 left-2 active:animate-spin hover:cursor-pointer hover:scale-110"
                            >
                                <path
                                    d="M13.1538 8.03846C13.1538 6.63021 12.6533 5.42558 11.6523 4.42458C10.6513 3.42358 9.44671 2.92308 8.03846 2.92308C6.63021 2.92308 5.42558 3.42358 4.42458 4.42458C3.42358 5.42558 2.92308 6.63021 2.92308 8.03846C2.92308 9.44671 3.42358 10.6513 4.42458 11.6523C5.42558 12.6533 6.63021 13.1538 8.03846 13.1538C9.44671 13.1538 10.6513 12.6533 11.6523 11.6523C12.6533 10.6513 13.1538 9.44671 13.1538 8.03846ZM19 17.5385C19 17.9343 18.8554 18.2768 18.5661 18.5661C18.2768 18.8554 17.9343 19 17.5385 19C17.1274 19 16.7849 18.8554 16.5108 18.5661L12.5944 14.6611C11.2318 15.605 9.71314 16.0769 8.03846 16.0769C6.94992 16.0769 5.90895 15.8657 4.91557 15.4432C3.92218 15.0207 3.06581 14.4498 2.34645 13.7305C1.6271 13.0111 1.05619 12.1547 0.633714 11.1614C0.211238 10.168 0 9.127 0 8.03846C0 6.94992 0.211238 5.90895 0.633714 4.91557C1.05619 3.92218 1.6271 3.06581 2.34645 2.34645C3.06581 1.6271 3.92218 1.05619 4.91557 0.633714C5.90895 0.211238 6.94992 0 8.03846 0C9.127 0 10.168 0.211238 11.1614 0.633714C12.1547 1.05619 13.0111 1.6271 13.7305 2.34645C14.4498 3.06581 15.0207 3.92218 15.4432 4.91557C15.8657 5.90895 16.0769 6.94992 16.0769 8.03846C16.0769 9.71314 15.605 11.2318 14.6611 12.5944L18.5775 16.5108C18.8592 16.7925 19 17.135 19 17.5385Z"
                                    fill="#000"
                                ></path>
                            </svg>
                            <a href="">
                                <div className="rounded-md bg-white outline-none py-2 pl-8 font-content text-gray-500 text-[10px] tracking-wide h-8 w-full">
                                    <p>Search for artworks, artists, themes and many more</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* navbar hidden content end here */}
            <div className=" w-full bg-[#CC8E51] hidden md:flex items-center justify-center text-white">
                <div className="bg-transparent hover:bg-[#cfa374]">
                    <label className="btn rounded-none font-montserrat min-w-[12vw] lg:text-lg md:text-base text-[14px] normal-case bg-transparent text-white border-none hover:bg-[#cfa374]">
                        Artworks for wall
                    </label>
                </div>
                <div className="bg-transparent hover:bg-[#cfa374]">
                    <label className="btn rounded-none font-montserrat min-w-[12vw] lg:text-lg md:text-base text-[14px] normal-case bg-transparent text-white border-none hover:bg-[#cfa374]">
                        Folk art &amp; craft
                    </label>
                </div>
                <div className="bg-transparent hover:bg-[#cfa374]">
                    <label className="btn rounded-none font-montserrat min-w-[12vw] lg:text-lg md:text-base text-[14px] normal-case bg-transparent text-white border-none  hover:bg-[#cfa374] ">
                        Wildlife paintings
                    </label>
                </div>
                <div className="bg-transparent hover:bg-[#cfa374]">
                    <label className="btn rounded-none font-montserrat min-w-[12vw] lg:text-lg md:text-base text-[14px] normal-case bg-transparent text-white border-none hover:bg-[#cfa374]">
                        Home &amp; Living
                    </label>
                </div>
                <div className="bg-transparent hover:bg-[#cfa374] ">
                    <label className="btn rounded-none font-montserrat min-w-[12vw] lg:text-lg md:text-base normal-case text-[14px] bg-transparent text-white border-none hover:bg-[#cfa374] ">
                        Painting for living room
                    </label>
                </div>
                <div className="bg-transparent hover:bg-[#cfa374]">
                    <label className="btn rounded-none font-montserrat min-w-[12vw] lg:text-lg md:text-base text-[14px] normal-case bg-transparent text-white border-none hover:bg-[#cfa374]">
                        Religious Paintings
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
