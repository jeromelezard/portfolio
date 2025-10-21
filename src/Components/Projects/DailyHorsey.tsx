import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import Tailwind from "../Icons/Tailwind";
import Typescript from "../Icons/Typescript";
import NextJS from "../Icons/NextJS";
import Postgres from "../Icons/Postgres";

export default function DailyHorsey() {
    return (
        <div className="flex flex-col gap-2">
            <img className="w-full block rounded-[14px]" src="/daily-horsey.jpeg" />
            <div className="flex justify-between items-center">
                <div className="flex flex-col">
                    <h1 className="text-2xl font-semibold">DailyHorsey</h1>
                    <span className="text-white/80">View daily animal pictures</span>
                    <span className="flex items-center gap-5">
                        <a href="https://dailyhorsey.com/horse" target="_blank">
                            <span className="flex items-center gap-1 text-white/80">
                                <FontAwesomeIcon icon={faGlobe} />
                                <span>View site</span>
                            </span>
                        </a>
                    </span>
                </div>
                <div className="flex gap-2 items-center">
                    <Typescript />
                    <NextJS />
                    <Tailwind />
                    <Postgres />
                </div>
            </div>
        </div>
    );
}
