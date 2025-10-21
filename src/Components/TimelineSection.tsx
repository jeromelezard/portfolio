import { forwardRef } from "react";
import WatchLobby from "./Projects/WatchLobby";
import Network from "./Projects/Network";
import Listy from "./Projects/Listy";
import DailyHorsey from "./Projects/DailyHorsey";

const TimelineSection = forwardRef<HTMLDivElement>((_, ref) => {
    return (
        <div className="" ref={ref}>
            <div className="max-w-3xl m-auto px-5">
                <div className="pt-[40px]">
                    <h1 className="font-normal tracking-widest text-[2rem] mb-10 ">PROJECTS</h1>
                </div>
                <div className="flex flex-col gap-14">
                    <DailyHorsey />
                    <WatchLobby />
                    <Network />
                    <Listy />
                </div>
            </div>
        </div>
    );
});

export default TimelineSection;
