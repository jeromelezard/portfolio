import { TooltipContent, TooltipTrigger } from "@radix-ui/react-tooltip";
import { Tooltip } from "./ui/tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function CopyEmailButton() {
    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <FontAwesomeIcon icon={faEnvelope} className="hover:text-slate-900 transition-colors text-4xl text-[#bab3b3] cursor-pointer" />
            </TooltipTrigger>
            <TooltipContent side="bottom" className="bg-slate-900 rounded-lg px-2 py-1">
                <p>Click to copy email</p>
            </TooltipContent>
        </Tooltip>
    );
}
