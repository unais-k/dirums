import styles from "./style";
import Navbar from "./components/Navbar";
import ArtSection from "./components/ArtSection";
import NewCollection from "./components/NewCollection";
import UnitCard from "./components/UnitCard";
import { BestSeller } from "./constants";
import Swiper from "./components/Swiper";

const App = () => {
    return (
        <div className="w-full overflow-hidden">
            <div className={` ${styles.flexCenter}sticky top-0 z-10 transition-all duration-500 bg-[#1e1e1e]`}>
                <div className="w-full">
                    <Navbar />
                </div>
            </div>
            <div className={`${styles.flexStart} bg-primary`}>
                <div className={`${styles.boxWidth}`}>{/* <Hero /> */}</div>
            </div>
            <div className={`bg-primary ${styles.flexStart} `}>
                <div className="w-full">
                    {/* <Stats />
                    <Business />
                    <Billing />
                    <CardDeal />
                    <Testimonials />
                    <Clients />
                    <CTA />
                    <Footer /> */}
                    <ArtSection />
                    <Swiper />
                    <div className="h-[2px] w-3/4 bg-transparent md:bg-black md:mt-10 mx-auto mb-24"></div>
                    <NewCollection />
                    <div className="w-full px-10">
                        <div className="w-full relative flex justify-start gap-5 items-center flex-row overflow-y-auto no-scrollbar">
                            {BestSeller.map((item) => {
                                return <UnitCard key={item.id} item={item} />;
                            })}
                        </div>
                        <div className="uppercase font-bold py-2 flex justify-end items-center gap-2">
                            view all{" "}
                            <span className="rounded-full bg-[#ba8249] text-white p-2 shadow-md">
                                <i className="fa-solid fa-arrow-right"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
