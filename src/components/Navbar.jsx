import logo from "../assets/logo.webp";

const Navbar = () => {
    return (
        <div className="">
            <div className="capitalize bg-[#1e1e1e] text-white tracking-wider leading-6 mx-auto flex justify-center items-center text-[8px] md:text-[13px]">
                <div>Worldwide Shipping* | Free returns* | Handpicked artworks</div>
            </div>
            <div className=" bg-[#1e1e1e] lg:px-20 px-4 pt-3 pb-3 hidden md:block">
                <div className="flex lg:space-x-4 items-center lg:px-24 justify-between flex-col md:flex-row">
                    <div className="flex items-center justify-center h-[40px]">
                        <a href="/">
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
                        <a href="/wishlist" className="relative">
                            <i className="far fa-heart text-2xl text-[#ffcc7e]"></i>
                        </a>
                        <a href="/cart" className="relative mt-1">
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
                            viewBox="0 0 100 80"
                            width="16"
                            height="24"
                        >
                            <rect width="100" height="10"></rect>
                            <rect y="30" width="100" height="10"></rect>
                            <rect y="60" width="100" height="10"></rect>
                        </svg>
                        {/* 3 div */}
                        <div className="top-0 right-0 w-full bg-white p-10 pt-16 pl-10 text-white fixed h-screen z-40 ease-in-out duration-300 -translate-x-[999px]">
                            <div>
                                {/* 3 div */}
                                <div className="flex w-full justify-between items-center py-2 rounded-sm border-b-[1px]">
                                    <div className="flex pl-2">
                                        <div className="text-black font-bold">Artworks for wall</div>
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth="0"
                                            viewBox="0 0 24 24"
                                            className="w-8 h-8 text-black"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path fill="none" d="M0 0h24v24H0V0z"></path>
                                            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="flex w-full justify-between items-center py-2 rounded-sm border-b-[1px]">
                                    <div className="flex pl-2">
                                        <div className="text-black font-bold">Indian Painting</div>
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth="0"
                                            viewBox="0 0 24 24"
                                            className="w-8 h-8 text-black"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path fill="none" d="M0 0h24v24H0V0z"></path>
                                            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="flex w-full justify-between items-center py-2 rounded-sm border-b-[1px]">
                                    <div className="flex pl-2">
                                        <div className="text-black font-bold">Religious Paintings</div>
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth="0"
                                            viewBox="0 0 24 24"
                                            className="w-8 h-8 text-black"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path fill="none" d="M0 0h24v24H0V0z"></path>
                                            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* a tag start here */}

                            <div className="my-5 ml-2 border-b-[1px] py-3 flex justify-between items-center pr-3">
                                <p className="text-black font-bold">Wildlife Paintings</p>
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 16 16"
                                    color="black"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                                    ></path>
                                </svg>
                            </div>

                            <div className="my-5 ml-2 border-b-[1px] py-3 flex justify-between items-center pr-3">
                                <p className="text-black font-bold">Table Decor</p>
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 16 16"
                                    color="black"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                                    ></path>
                                </svg>
                            </div>

                            <div className="my-5 ml-2 border-b-[1px] py-3 flex justify-between items-center pr-3">
                                <p className="text-black font-bold">Table Decor</p>
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 16 16"
                                    color="black"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                                    ></path>
                                </svg>
                            </div>

                            <div className="my-5 ml-2 border-b-[1px] py-3 flex justify-between items-center pr-3">
                                <p className="text-black font-bold">Table Decor</p>
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 16 16"
                                    color="black"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                                    ></path>
                                </svg>
                            </div>

                            {/* a tag end here */}
                        </div>
                        <div className="ml-5">
                            <a href="/">
                                <img className="w-16 h-auto mt-2" src={logo} alt="logo" />
                            </a>
                        </div>
                        <div className=" gap-x-4 flex mt-3 items-center">
                            <a href="/wishlist" className="relative">
                                <i className="far fa-heart text-base text-[#ffcc7e]"></i>
                            </a>
                            <a href="/cart" className="relative">
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
                            <a href="#">
                                <div className="rounded-md bg-white outline-none py-2 pl-8 font-content caret-[#eba352] text-gray-500 text-[10px] tracking-wide h-8 w-full">
                                    <p>Search for artworks, artists, themes and many more</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" w-full bg-[#CC8E51] hidden md:flex items-center justify-center text-white">
                <div className="dropdown dropdown-hover bg-transparent hover:bg-[#cfa374]">
                    <label className="btn rounded-none font-sans min-w-[12vw] lg:text-lg md:text-base text-[14px] normal-case bg-transparent text-white border-none hover:bg-[#cfa374]">
                        Artworks for wall
                    </label>
                    {/* <ul className="dropdown-content menu shadow m-0 p-0 bg-base-100 min-w-full list-disc text-black font-sans font-light text-[16px]">
                        <li>
                            <a href="/artworks/medium/acrylic-paintings">Acrylic painting</a>
                        </li>
                        <li>
                            <a href="/artworks/medium/watercolor-paintings-for-sale">Watercolor painting</a>
                        </li>
                        <li>
                            <a href="/artworks/medium/oil-paintings">Oil painting</a>
                        </li>
                        <li>
                            <a href="/artworks/medium/mix-media-paintings">Mixed Media Painting</a>
                        </li>
                        <li className="font-bold">
                            <a href="/artworks">View All</a>
                        </li>
                    </ul> */}
                </div>
                <div className="dropdown dropdown-hover bg-transparent hover:bg-[#cfa374]">
                    <label className="btn rounded-none font-sans min-w-[12vw] lg:text-lg md:text-base text-[14px] normal-case bg-transparent text-white border-none hover:bg-[#cfa374]">
                        Folk art &amp; craft
                    </label>
                    {/* <ul className="dropdown-content menu shadow m-0 p-0 bg-base-100 min-w-full list-disc text-black font-sans font-light text-[16px]">
                        <li>
                            <a href="/artworks/mandala-art">Mandala art</a>
                        </li>
                        <li>
                            <a href="/artworks/madhubani-paintings">Madhubani art</a>
                        </li>
                        <li>
                            <a href="/collection/dhokra-metal-craft">Dhokra art</a>
                        </li>
                        <li>
                            <a href="/artworks/gond-art">Gond art</a>
                        </li>
                        <li>
                            <a href="/artworks/pattachitra-painting">Pattachitra art</a>
                        </li>
                        <li className="font-bold">
                            <a href="/artworks/folkart">view all</a>
                        </li>
                    </ul> */}
                </div>
                <div className="dropdown dropdown-hover bg-transparent hover:bg-white hover:text-[#CC8E51]">
                    <a href="/artworks/wildlife-paintings">
                        <label className="btn rounded-none font-sans min-w-[12vw] lg:text-lg md:text-base text-[14px] normal-case bg-transparent text-white border-none hover:bg-white hover:text-[#CC8E51]">
                            Wildlife paintings
                        </label>
                    </a>
                </div>
                <div className="dropdown dropdown-hover bg-transparent hover:bg-[#cfa374]">
                    <label className="btn rounded-none font-sans min-w-[12vw] lg:text-lg md:text-base text-[14px] normal-case bg-transparent text-white border-none hover:bg-[#cfa374]">
                        Home &amp; Living
                    </label>
                    {/* <ul className="dropdown-content menu shadow m-0 p-0 bg-base-100 min-w-full list-disc text-black font-sans font-light text-[16px]">
                        <li>
                            <a href="/artworks/table-decor">Table decor</a>
                        </li>
                        <li>
                            <a href="/collection/resin-art">Resin art</a>
                        </li>
                        <li>
                            <a href="/collection/lippan-art">Lippan art</a>
                        </li>
                        <li>
                            <a href="/collection/diwali-home-decor">Diwali decor</a>
                        </li>
                    </ul> */}
                </div>
                <div className="dropdown dropdown-hover bg-transparent hover:bg-white hover:text-[#CC8E51]">
                    <a href="/artworks/home-office-art/paintings-artworks-for-living-room">
                        <label className="btn rounded-none font-sans min-w-[12vw] lg:text-lg md:text-base normal-case text-[14px] bg-transparent text-white border-none hover:bg-white hover:text-[#CC8E51]">
                            Painting for living room
                        </label>
                    </a>
                </div>
                <div className="dropdown dropdown-hover bg-transparent hover:bg-[#cfa374]">
                    <label className="btn rounded-none font-sans min-w-[12vw] lg:text-lg md:text-base text-[14px] normal-case bg-transparent text-white border-none hover:bg-[#cfa374]">
                        Religious Paintings
                    </label>
                    {/* <ul className="dropdown-content menu shadow m-0 p-0 bg-base-100 min-w-full list-disc text-black font-sans font-light text-[16px]">
                        <li>Radha Krishna</li>
                        <li>Buddha</li>
                        <li>Lord Ganesh</li>
                        <li>Hanuman</li>
                    </ul> */}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
