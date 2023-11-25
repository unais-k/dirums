import { camel, elephant, horse } from "../assets/gallery/index";

const Gallery = () => {
    return (
        <div className="flex h-full gap-10 flex-wrap w-full items-center justify-center md:px-mt-10 md:flex-wrap overflow-x-auto ">
            <div className="hover:bg-gray-50 hover:shadow-md transition ease-in-out duration-300 p-5">
                <div className="p-2 rounded-md md:w-full">
                    <div className="flex gap-3 text-white font-bold uppercase text-md  md:text-3xl">
                        <div className="flex flex-col gap-3 w-1/2">
                            <div className="relative">
                                <img src={camel} alt="indianFolk 1" className="h-fit w-fit object-cover" />
                                <div className="absolute bottom-0 w-full text-center bg-gradient-to-t py-5 md:py-10 from-black to-transparent">
                                    Below 10,000
                                </div>
                            </div>
                            <div className="relative">
                                <img src={horse} alt="indianFolk 3" className="h-fit w-fit object-cover" />
                                <div className="absolute bottom-0 w-full text-center bg-gradient-to-t py-5 md:py-10 from-black to-transparent">
                                    From 10,000 - 20,000
                                </div>
                            </div>
                        </div>
                        <div className="relative w-1/2">
                            <img src={elephant} alt="indianFolk 2" className="h-full w-fit object-cover" />
                            <div className="absolute bottom-0 w-full text-center bg-gradient-to-t py-5 md:py-10 from-black to-transparent">
                                above 20,000
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;
