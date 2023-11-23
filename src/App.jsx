import styles from "./style";
import Navbar from "./components/Navbar";
import ArtSection from "./components/ArtSection";
import NewCollection from "./components/NewCollection";

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
            <div className={`bg-primary ${styles.flexStart}  `}>
                <div className={`${styles.boxWidth}`}>
                    {/* <Stats />
                    <Business />
                    <Billing />
                    <CardDeal />
                    <Testimonials />
                    <Clients />
                    <CTA />
                    <Footer /> */}
                    <ArtSection />
                    <div className="h-[2px] w-3/4 bg-transparent md:bg-black md:mt-10 mx-auto mb-24"></div>
                    <NewCollection />
                </div>
            </div>
        </div>
    );
};

export default App;
