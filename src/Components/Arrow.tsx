import { motion } from "framer-motion";
export default function Arrow({ scrollToTimeline }: { scrollToTimeline: () => void }) {
    return (
        <motion.div
            animate={{
                y: [0, 0, -40, 10, -10, 5, 0],
            }}
            onClick={scrollToTimeline}
            transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
            }}
            className="absolute bottom-25 left-1/2 -translate-x-1/2 mr-px"
        >
            <svg
                className="cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                width="3em"
                height="3em"
                id="arrow"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
            >
                <path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 20V4m-7 9l7 7l7-7" />
            </svg>
        </motion.div>
    );
}
