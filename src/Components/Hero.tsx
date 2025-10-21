import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import "../App.css";
import LinkIcon from "./LinkIcon";
import CopyEmailButton from "./CopyEmailButton";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "./ui/tooltip";
export default function Hero() {
    return (
        <div className="w-screen h-screen bg-[#495782]">
            <div className="flex justify-center items-center h-full ">
                <div className="flex flex-col justify-center items-center gap-2 mb-[100px]">
                    <span className="z-999">
                        <img height="225px" width="225px" className="rounded-full shadow-md" src="/new-pp.png" />
                    </span>
                    <div className="flex flex-col gap-2 justify-center items-center text-center">
                        <h1 className="font-extrabold text-7xl">
                            JEROME <span className="sm:tracking-normal tracking-wider">LEZARD</span>
                        </h1>
                        <span className="text-xl tracking-widest z-9999 text-[#bab3b3]">SOFTWARE ENGINEER</span>
                        <div className="flex gap-1">
                            <LinkIcon icon={faGithub} />
                            <LinkIcon icon={faLinkedin} />

                            <CopyEmailButton />
                            <Tooltip text="CV">
                                <LinkIcon icon={faFile} />
                            </Tooltip>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
