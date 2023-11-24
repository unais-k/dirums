import { camel, elephant, horse } from "../assets/gallery/index";

const Gallery = () => {
    return (
        <div className="flex h-full gap-10 flex-wrap w-full items-center justify-center md:px-mt-10 md:flex-wrap overflow-x-auto ">
            <div className="hover:bg-gray-50 hover:shadow-md transition ease-in-out duration-300 p-5">
                <div className="p-2 border-[3px] rounded-md border-black md:w-full">
                    <div className="flex gap-3">
                        <div className="w-1/2">
                            <img src={camel} alt="indianFolk 1" className="h-fit w-full object-cover" />
                        </div>
                        <div className=" flex flex-col gap-3 w-1/2">
                            <img src={elephant} alt="indianFolk 2" className="h-fit w-fit object-cover" />
                            <img src={horse} alt="indianFolk 3" className="h-fit w-fit object-cover" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;
