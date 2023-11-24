import { artSection } from "../constants";

const ArtSection = () => {
    return (
        <section className="text-gray-700 body-font w-full">
            <div className="mt-5 xl:mx-15 w-full mx-auto flex flex-nowrap items-center justify-start place-items-center gap-2 md:gap-5 overflow-x-auto no-scrollbar">
                {artSection.length >= 0 &&
                    artSection.map((item) => {
                        return (
                            <div
                                key={item.id}
                                className="flex flex-col items-center flex-nowrap object-cover justify-center w-[390px] hover:bg-gray-50 hover:shadow-md transition ease-in-out duration-300"
                            >
                                <div className="p-3 md:p-5 w-full h-full">
                                    <img
                                        width="180px"
                                        height="180px"
                                        src={item.img}
                                        className="w-[190px] h-auto transition object-contain ease-in-out duration-250 rounded-full"
                                    />
                                    <p className="text-center w-40 font-semibold mt-1 text-[18px]">{item.title}</p>
                                </div>
                            </div>
                        );
                    })}
            </div>
        </section>
    );
};

export default ArtSection;
