import { useRef } from "react";
import "./App.css";
import Arrow from "./Components/Arrow";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import TimelineSection from "./Components/TimelineSection";

function App() {
    const timeLineRef = useRef<HTMLDivElement>(null);
    function scrollToTimeline() {
        timeLineRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    return (
        <>
            <Navbar />
            <Hero />
            <Arrow scrollToTimeline={scrollToTimeline} />
            <TimelineSection ref={timeLineRef} />
        </>
    );
}

export default App;
