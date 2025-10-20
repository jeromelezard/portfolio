import { useState } from "react";

interface TooltipProps {
    text: string;
    children: React.ReactNode;
}

export function Tooltip({ text, children }: TooltipProps) {
    const [visible, setVisible] = useState(false);

    return (
        <div className="relative inline-block" onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)}>
            {children}
            {visible && (
                <div
                    className="absolute top-full left-1/2 -translate-x-1/2 mb-2
                     bg-slate-900 text-white rounded-lg px-2 py-1
                     whitespace-nowrap shadow-lg z-50"
                >
                    {text}
                </div>
            )}
        </div>
    );
}
