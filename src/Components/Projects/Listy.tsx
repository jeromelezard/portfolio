import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Javascript from "../Icons/Javascript";
import Bootstrap from "../Icons/Bootstrap";
import Flask from "../Icons/Flask";

export default function Listy() {
    return (
        <div className="flex flex-col gap-2">
            <img className="w-full block rounded-[14px]" src="/listy.png" />
            <div className="flex justify-between items-center">
                <div className="flex flex-col">
                    <h1 className="text-2xl font-semibold">Listy</h1>
                    <span className="text-white/80">Create and share movie/TV lists</span>
                    <span className="flex items-center gap-5">
                        <a href="https://github.com/jeromelezard/CS50XPROJECT" target="_blank">
                            <span className="flex items-center gap-1 text-white/80">
                                <FontAwesomeIcon icon={faGithub} />
                                <span>View code</span>
                            </span>
                        </a>
                        <a href="https://www.youtube.com/watch?v=WhtRdWVcUz4" target="_blank">
                            <span className="flex items-center gap-1 text-white/80">
                                <FontAwesomeIcon icon={faYoutube} />
                                <span>View demo</span>
                            </span>
                        </a>
                    </span>
                </div>
                <div className="flex gap-2 items-center">
                    <Flask />
                    <Javascript />
                    <Bootstrap />
                </div>
            </div>
        </div>
    );
}
