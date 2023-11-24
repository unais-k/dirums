const Swiper = () => {
    return (
        <div className="swiper-wrapper">
            <div className="swiper-slide swiper-slide-active" data-swiper-slide-index="0">
                <div className="flex flex-col gap-y-4 sm:flex-row items-center w-full h-full sm:justify-center sm:items-start gap-x-3">
                    <img src="" className="w-8 sm:w-10" />
                    <div className="flex flex-col items-center sm:items-start gap-1">
                        <h2 className="font-bold text-center sm:text-left uppercase text-[12px] sm:text-sm">
                            Free Shipping
                        </h2>
                        <p className="sm:text-sm text-center text-[10.5px] sm:text-left">Worldwide</p>
                    </div>
                </div>
            </div>
            <div className="swiper-slide swiper-slide-next" data-swiper-slide-index="1">
                <div className="flex flex-col gap-y-4 sm:flex-row items-center w-full h-full sm:justify-center sm:items-start gap-x-3">
                    <img src="" className="w-8 sm:w-10" />
                    <div className="flex flex-col items-center sm:items-start gap-1">
                        <h2 className="font-bold text-center sm:text-left uppercase text-[12px] sm:text-sm">
                            Easy Returns
                        </h2>
                        <p className="sm:text-sm text-center text-[10.5px] sm:text-left">Within 7 Days</p>
                    </div>
                </div>
            </div>
            <div className="swiper-slide" data-swiper-slide-index="2">
                <div className="flex flex-col gap-y-4 sm:flex-row items-center w-full h-full sm:justify-center sm:items-start gap-x-3">
                    <img src="" className="w-8 sm:w-10" />
                    <div className="flex flex-col items-center sm:items-start gap-1">
                        <h2 className="font-bold text-center sm:text-left uppercase text-[12px] sm:text-sm">Secured </h2>
                        <p className="sm:text-sm text-center text-[10.5px] sm:text-left">Checkout and Payments</p>
                    </div>
                </div>
            </div>
            <div className="swiper-slide" data-swiper-slide-index="3">
                <div className="flex flex-col gap-y-4 sm:flex-row items-center w-full h-full sm:justify-center sm:items-start gap-x-3">
                    <img src="" className="w-8 sm:w-10" />
                    <div className="flex flex-col items-center sm:items-start gap-1">
                        <h2 className="font-bold text-center sm:text-left uppercase text-[12px] sm:text-sm">
                            COD Available
                        </h2>
                        <p className="sm:text-sm text-center text-[10.5px] sm:text-left">Pay on delivery</p>
                    </div>
                </div>
            </div>
            <div className="swiper-slide" data-swiper-slide-index="4">
                <div className="flex flex-col gap-y-4 sm:flex-row items-center w-full h-full sm:justify-center sm:items-start gap-x-3">
                    <img src="" className="w-8 sm:w-10" />
                    <div className="flex flex-col items-center sm:items-start gap-1">
                        <h2 className="font-bold text-center sm:text-left uppercase text-[12px] sm:text-sm">
                            Genuine Products
                        </h2>
                        <p className="sm:text-sm text-center text-[10.5px] sm:text-left">Handmade with love</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Swiper;
