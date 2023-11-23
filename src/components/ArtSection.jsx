import { artSection } from "../constants";

const ArtSection = () => {
    return (
        <section className="text-gray-700 body-font w-screen">
            <div className="mt-5 xl:mx-15 md:max-w-[50rem] w-screen lg:max-w-[100rem] mx-auto md:flex md:items-center md:justify-center place-items-center md:flex-wrap font-helvetica grid grid-cols-2 gap-2 md:gap-5">
                {artSection.length >= 0 &&
                    artSection.map((item) => {
                        return (
                            <>
                                <div key={item.id} className="flex items-center justify-center w-fit">
                                    <div className="md:mb-5 hover:bg-gray-50 hover:shadow-md transition ease-in-out duration-300 p-3 md:p-5">
                                        <img
                                            width="180"
                                            height="180"
                                            loading="lazy"
                                            src={item.img}
                                            className="w-[11.5rem] h-auto object-contain transition ease-in-out duration-250 rounded-full"
                                        />
                                        <p className="font-helvetica text-center font-semibold lg:text-base text-sm">
                                            {item.title}
                                        </p>
                                    </div>
                                </div>
                            </>
                        );
                    })}
            </div>
        </section>
    );
};

export default ArtSection;
