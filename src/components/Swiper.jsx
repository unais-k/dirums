import { swiperConst } from "../constants";

const Swiper = () => {
    return (
        <div className="sm:px-16 ps-4">
            <div className="flex justify-between items-center w-full mt-5 overflow-auto no-scrollbar">
                {swiperConst.map((item) => {
                    return (
                        <div key={item.id} className=" w-52 me-3 sm:me-10">
                            <div className="flex gap-y-4 flex-col items-center py-3 w-full h-full justify-center gap-x-3">
                                <img src={item.img} className="w-8 sm:w-10" />
                                <div className="flex flex-col items-center gap-1 w-56 h-11">
                                    <h2 className="font-bold text-left uppercase text-[12px] sm:text-sm">{item.title}</h2>
                                    <p className="sm:text-sm text-[10.5px] ">{item.p}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Swiper;
