import { useEffect, useState } from "react";

export default function Navbar() {
    const [showNavbar, setShowNavbar] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const viewportHeight = window.innerHeight;

            // Show navbar only after scrolling past the first viewport height
            setShowNavbar(scrollY > viewportHeight - 50); // 50px buffer (optional)
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full transition-all duration-500 ${
                showNavbar ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
            }  z-50 bg-[#495783]/80 transition-[height]
    duration-200
    ease-[cubic-bezier(0.075,0.82,0.165,1)] 
    backdrop-blur-md`}
        >
            <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
                <h1 className="font-extrabold text-2xl">
                    JEROME <span className="sm:tracking-normal tracking-wider">LEZARD</span>
                </h1>
                <ul className="flex space-x-4">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        </nav>
    );
}
