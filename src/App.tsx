import { useRef } from "react";
import "./App.css";
import Arrow from "./Components/Arrow";
import Hero from "./Components/Hero";
import TimelineSection from "./Components/TimelineSection";
import Footer from "./Components/Footer";

function App() {
    const timeLineRef = useRef<HTMLDivElement>(null);
    function scrollToTimeline() {
        timeLineRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    return (
        <>
            {/* <Navbar /> */}
            <Hero />
            <Arrow scrollToTimeline={scrollToTimeline} />
            <TimelineSection ref={timeLineRef} />
            <Footer />
        </>
    );
}

export default App;
