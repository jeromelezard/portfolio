import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function LinkIcon({ icon }: { icon: IconProp }) {
    return (
        <a href={getLink(icon)} target="_blank">
            <FontAwesomeIcon icon={icon} className="hover:text-slate-900 transition-colors text-4xl text-[#bab3b3] cursor-pointer" />
        </a>
    );
}

function getLink(icon: IconProp) {
    switch (icon) {
        case faGithub:
            return "https://github.com/jeromelezard";
        case faLinkedin:
            return "https://www.linkedin.com/in/jerome-lezard/";
    }
}
