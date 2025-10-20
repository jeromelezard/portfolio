import { forwardRef } from "react";

const TimelineSection = forwardRef<HTMLDivElement>((_, ref) => {
    return (
        <div className="h-screen w-screen bg-[#303135]" ref={ref}>
            <span>xd</span>
        </div>
    );
});

export default TimelineSection;
