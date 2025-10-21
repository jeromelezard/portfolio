import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Django from "../Icons/Django";
import Websocket from "../Icons/Websocket";
import Javascript from "../Icons/Javascript";
import Sass from "../Icons/Sass";

export default function WatchLobby() {
    return (
        <div className="flex flex-col gap-2">
            <img className="w-full block rounded-[14px]" src="/watchlobby.png" />
            <div className="flex justify-between items-center">
                <div className="flex flex-col">
                    <h1 className="text-2xl font-semibold">WatchLobby</h1>
                    <span className="text-white/80">Stream videos in a lobby</span>
                    <span className="flex items-center gap-5">
                        <a href="https://github.com/jeromelezard/watchLobby" target="_blank">
                            <span className="flex items-center gap-1 text-white/80">
                                <FontAwesomeIcon icon={faGithub} />
                                <span>View code</span>
                            </span>
                        </a>
                        <a href="https://www.youtube.com/watch?v=V0eKZ3YAYv0" target="_blank">
                            <span className="flex items-center gap-1 text-white/80">
                                <FontAwesomeIcon icon={faYoutube} />
                                <span>View demo</span>
                            </span>
                        </a>
                    </span>
                </div>
                <div className="flex gap-2 items-center">
                    <Django />
                    <Websocket />
                    <Javascript />
                    <Sass />
                </div>
            </div>
        </div>
    );
}
