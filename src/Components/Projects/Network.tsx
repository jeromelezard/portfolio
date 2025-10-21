import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Django from "../Icons/Django";
import Javascript from "../Icons/Javascript";
import Bootstrap from "../Icons/Bootstrap";

export default function Network() {
    return (
        <div className="flex flex-col gap-2">
            <img className="w-full block rounded-[14px]" src="/network.png" />
            <div className="flex justify-between items-center">
                <div className="flex flex-col">
                    <h1 className="text-2xl font-semibold">Network</h1>
                    <span className="text-white/80">Mock Social Network for CS50w</span>
                    <span className="flex items-center gap-5">
                        <a href="https://github.com/jeromelezard/CS50W/tree/master/project4" target="_blank">
                            <span className="flex items-center gap-1 text-white/80">
                                <FontAwesomeIcon icon={faGithub} />
                                <span>View code</span>
                            </span>
                        </a>
                        <a href="https://www.youtube.com/watch?v=3XdP9IWYOMI" target="_blank">
                            <span className="flex items-center gap-1 text-white/80">
                                <FontAwesomeIcon icon={faYoutube} />
                                <span>View demo</span>
                            </span>
                        </a>
                    </span>
                </div>
                <div className="flex gap-2 items-center">
                    <Django />
                    <Javascript />
                    <Bootstrap />
                </div>
            </div>
        </div>
    );
}
