import { Tooltip } from "./ui/tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function CopyEmailButton() {
    const [copied, setCopied] = useState(false);
    function copyEmail() {
        navigator.clipboard.writeText("jerome.lezard@gmail.com");
        setCopied(true);
    }

    return (
        <Tooltip text={copied ? "Email copied!" : "Click to copy email"}>
            <FontAwesomeIcon
                icon={faEnvelope}
                onMouseLeave={() => setTimeout(() => setCopied(false), 300)}
                className="hover:text-slate-900 transition-colors text-4xl text-[#bab3b3] cursor-pointer"
                onClick={(e) => {
                    e.preventDefault();
                    copyEmail();
                }}
            />
        </Tooltip>
    );
}
