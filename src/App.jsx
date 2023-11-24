import styles from "./style";
import Navbar from "./components/Navbar";
import ArtSection from "./components/ArtSection";
import NewCollection from "./components/NewCollection";
import UnitCard from "./components/UnitCard";
import { BestSeller, newArrival } from "./constants";
import Swiper from "./components/Swiper";
import banner from "../src/assets/bann.png";
import Gallery from "./components/Gallery";

const App = () => {
    return (
        <div className="w-full overflow-hidden">
            <div className={` ${styles.flexCenter}sticky top-0 z-10 transition-all duration-500 bg-[#1e1e1e]`}>
                <div className="w-full">
                    <Navbar />
                </div>
            </div>
            <img src={banner} className="w-full h-auto" alt="banner" />
            <div className={`bg-primary ${styles.flexStart} `}>
                <div className="w-full">
                    <div className="md:px-16 p-0">
                        <ArtSection />
                    </div>
                    <Swiper />
                    {/* <div className="h-[2px] w-3/4 bg-transparent md:bg-black md:mt-10 mx-auto mb-24"></div> */}
                    <NewCollection />
                    <div className="w-full px-10">
                        <div className="w-full relative flex justify-start gap-5 items-center flex-row overflow-y-auto no-scrollbar">
                            {BestSeller.map((item) => {
                                return <UnitCard key={item.id} item={item} />;
                            })}
                        </div>
                        <div className="uppercase font-bold py-2 flex justify-end items-center gap-2">
                            view all
                            <span className="rounded-full bg-[#ba8249] text-white p-2 shadow-md">
                                <i className="fa-solid fa-arrow-right"></i>
                            </span>
                        </div>
                    </div>
                    <div className="w-full px-10">
                        <h2 className="uppercase font-bold text-center md:text-[30px] text-[17px] w-full mx-auto drop-shadow-md text-black">
                            New Arrival
                        </h2>
                        <hr className="border-[rgb(186,130,73)] border w-1/5 mx-auto my-3"></hr>
                        <div className="w-full relative flex justify-start gap-5 items-center flex-row overflow-y-auto no-scrollbar">
                            {newArrival.map((item) => {
                                return <UnitCard key={item.id} item={item} />;
                            })}
                        </div>
                        <div className="uppercase font-bold py-2 flex justify-end items-center gap-2">
                            view all
                            <span className="rounded-full bg-[#ba8249] text-white p-2 shadow-md">
                                <i className="fa-solid fa-arrow-right"></i>
                            </span>
                        </div>
                    </div>
                    <Gallery />
                </div>
            </div>
        </div>
    );
};

export default App;
