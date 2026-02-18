// "use client";

// import { useState, useEffect, useRef } from "react";
// import {
//     Stethoscope,
//     Users,
//     Info,
//     ArrowUp,
//     ArrowDown,
//     MessageCircle,
//     ChevronDown,
// } from "lucide-react";

// const slides = [
//     {
//         type: "video",
//         src: "https://marblemedicals.com/wp-content/uploads/2023/09/video-one.mp4",
//     },
//     {
//         type: "image",
//         src: "https://marblemedicals.com/wp-content/uploads/2023/10/banner2.jpg",
//     },
//     {
//         type: "image",
//         src: "https://marblemedicals.com/wp-content/uploads/2023/10/banner2.jpg",
//     },
// ];

// export default function HeroBanner() {
//     const [current, setCurrent] = useState(0);
//     const videoRef = useRef(null);
//     const intervalRef = useRef(null);

//     const goTo = (index) => {
//         setCurrent(index);
//     };

//     const nextSlide = () => {
//         setCurrent((prev) => (prev + 1) % slides.length);
//     };

//     const prevSlide = () => {
//         setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
//     };

//     // Auto slide for images (5s)
//     useEffect(() => {
//         if (intervalRef.current) clearInterval(intervalRef.current);

//         if (slides[current].type === "image") {
//             intervalRef.current = setInterval(() => {
//                 nextSlide();
//             }, 5000);
//         }

//         return () => {
//             if (intervalRef.current) clearInterval(intervalRef.current);
//         };
//     }, [current]);

//     // Auto play video
//     useEffect(() => {
//         if (slides[current].type === "video" && videoRef.current) {
//             videoRef.current.currentTime = 0;
//             videoRef.current.muted = true;
//             videoRef.current.play().catch(() => { });
//         }
//     }, [current]);

//     const handleVideoEnd = () => {
//         nextSlide();
//     };

//     return (
//         <section className="relative w-full h-screen overflow-hidden font-transducer">
//             {/* ===== NAVBAR OVER HERO ===== */}
//             <div className="absolute top-0 left-0 w-full z-30 flex items-center justify-between px-10 py-6">
//                 <img
//                     src="https://marblemedicals.com/wp-content/uploads/2023/08/logo.svg"
//                     alt="logo"
//                     className="h-16 object-contain"
//                 />

//                 <div className="flex items-center gap-12 text-white text-[15px] font-medium">
//                     <div className="flex items-center gap-2 cursor-pointer hover:text-blue-200 transition">
//                         <Stethoscope size={18} />
//                         <span>Doctors</span>
//                     </div>

//                     <div className="flex items-center gap-2 cursor-pointer hover:text-blue-200 transition">
//                         <Users size={18} />
//                         <span>Departments</span>
//                     </div>

//                     <div className="flex items-center gap-2 cursor-pointer hover:text-blue-200 transition">
//                         <Info size={18} />
//                         <span>About us</span>
//                     </div>
//                 </div>

//                 <button className="text-white border-b-2 border-white pb-1 text-[15px] font-medium hover:text-blue-200 hover:border-blue-200 transition">
//                     Book an Appointment
//                 </button>
//             </div>

//             {/* ===== SLIDES ===== */}
//             {slides.map((slide, index) => (
//                 <div
//                     key={index}
//                     className="absolute inset-0 transition-opacity duration-1000"
//                     style={{
//                         opacity: index === current ? 1 : 0,
//                         zIndex: index === current ? 10 : 0,
//                     }}
//                 >
//                     {slide.type === "video" ? (
//                         <video
//                             ref={index === current ? videoRef : null}
//                             src={slide.src}
//                             muted
//                             autoPlay
//                             playsInline
//                             onEnded={handleVideoEnd}
//                             className="w-full h-full object-cover"
//                         />
//                     ) : (
//                         <img
//                             src={slide.src}
//                             alt="hero"
//                             className="w-full h-full object-cover"
//                         />
//                     )}

//                     {/* Marble exact blue gradient overlay */}
//                     <div
//                         className="absolute inset-0"
//                         style={{
//                             background:
//                                 "linear-gradient(to bottom, rgba(25,120,170,0.55), rgba(25,120,170,0.75))",
//                         }}
//                     />
//                 </div>
//             ))}

//             {/* ===== CENTER TEXT ===== */}
//             <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
//                 <h1 className="text-white font-black leading-none mb-4 text-[clamp(52px,8vw,100px)]">
//                     World-class medical
//                     <br />
//                     services
//                 </h1>

//                 <p className="text-white/90 text-lg tracking-wide">
//                     Your trust is our success
//                 </p>

//                 {/* Down Arrow Animation */}

//             </div>

//             {/* ===== RIGHT SIDE DOTS (STICKY) ===== */}
//             <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-4">
//                 {slides.map((_, index) => (
//                     <button
//                         key={index}
//                         onClick={() => goTo(index)}
//                         className={`w-3 h-3 rounded-full transition-all duration-300 ${current === index
//                             ? "bg-white scale-125"
//                             : "bg-white/50 hover:bg-white"
//                             }`}
//                     />
//                 ))}
//             </div>
//             {/* ===== STICKY ARROWS (EXACT MARBLE STYLE) ===== */}
//             <div className="fixed bottom-[30px] left-1/2 -translate-x-1/2 z-[999] flex gap-2">

//                 {/* UP ARROW (light blue square) */}
//                 <button
//                     onClick={prevSlide}
//                     className="flex items-center justify-center rounded-md transition hover:opacity-90"
//                     style={{
//                         width: 32,
//                         height: 32,
//                         background: "rgba(120, 180, 210, 0.55)", // light blue transparent
//                         backdropFilter: "blur(2px)",
//                     }}
//                 >
//                     <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="30"
//                         height="32"
//                         fill="white"
//                         viewBox="0 0 24 24"
//                     >
//                         <path d="M12 4l-7 7h4v9h6v-9h4z" />
//                     </svg>
//                 </button>

//                 {/* DOWN ARROW (dark square) */}
//                 <button
//                     onClick={nextSlide}
//                     className="flex items-center justify-center rounded-md transition hover:opacity-90"
//                     style={{
//                         width: 32,
//                         height: 32,
//                         background: "rgba(40, 40, 40, 0.85)", // dark grey like screenshot
//                     }}
//                 >
//                     <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="30"
//                         height="32"
//                         fill="white"
//                         viewBox="0 0 24 24"
//                     >
//                         <path d="M12 20l7-7h-4V4h-6v9H5z" />
//                     </svg>
//                 </button>

//             </div>
//             {/* ===== STICKY WHATSAPP (EXACT MARBLE SVG) ===== */}
//             <a
//                 href="https://wa.me/97444483000"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="fixed bottom-6 left-6 z-40 flex items-center justify-center rounded-full shadow-xl hover:scale-110 transition"
//                 style={{ width: 60, height: 60, background: "#25D366" }}
//             >
//                 <img
//                     src="https://marblemedicals.com/wp-content/uploads/2023/09/whatsapp.svg"
//                     alt="WhatsApp"
//                     className="w-12 h-12"
//                 />
//             </a>
//             {/* ===== STICKY CHAT (EXACT SVG ICON) ===== */}
//             <button
//                 className="fixed bottom-6 right-6 z-[999] flex items-center justify-center rounded-full shadow-lg hover:scale-110 transition"
//                 style={{
//                     width: 60,
//                     height: 60,
//                     background: "#3397D4", // blue circle
//                 }}
//             >
//                 <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 576 512"
//                     width="28"
//                     height="28"
//                     fill="none"            // ❗ IMPORTANT (removes solid fill)
//                     stroke="#ffffff"       // white border outline icon
//                     strokeWidth="28"       // thickness of outline
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                 >
//                     <path d="M512 160h-96V64c0-35.3-28.7-64-64-64H64C28.7 0 0 28.7 0 64v160c0 35.3 28.7 64 64 64h32v52c0 7.1 5.8 12 12 12 2.4 0 4.9-.7 7.1-2.4l76.9-43.5V384c0 35.3 28.7 64 64 64h96l108.9 61.6c2.2 1.6 4.7 2.4 7.1 2.4 6.2 0 12-4.9 12-12v-52h32c35.3 0 64-28.7 64-64V224c0-35.3-28.7-64-64-64z" />
//                 </svg>
//             </button>

//         </section>
//     );
// }
"use client";

import { useState, useEffect, useRef } from "react";
import {
    Stethoscope,
    Users,
    Info,
    ArrowUp,
    ArrowDown,
    MessageCircle,
    MoveDown,
} from "lucide-react";

const slides = [
    {
        type: "video",
        src: "https://marblemedicals.com/wp-content/uploads/2023/09/video-one.mp4",
    },
    {
        type: "image",
        src: "https://marblemedicals.com/wp-content/uploads/2023/10/banner2.jpg",
    },
    {
        type: "image",
        src: "https://marblemedicals.com/wp-content/uploads/2023/10/banner2.jpg",
    },
];

export default function HeroBanner() {
    const [current, setCurrent] = useState(0);
    const videoRef = useRef(null);
    const intervalRef = useRef(null);

    const goTo = (index) => {
        setCurrent(index);
    };

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    };

    // Auto slide for images (5s)
    useEffect(() => {
        if (intervalRef.current) clearInterval(intervalRef.current);

        if (slides[current].type === "image") {
            intervalRef.current = setInterval(() => {
                nextSlide();
            }, 5000);
        }

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [current]);

    // Auto play video
    useEffect(() => {
        if (slides[current].type === "video" && videoRef.current) {
            videoRef.current.currentTime = 0;
            videoRef.current.muted = true;
            videoRef.current.play().catch(() => { });
        }
    }, [current]);

    const handleVideoEnd = () => {
        nextSlide();
    };

    return (
        <section className="relative w-full h-screen overflow-hidden font-transducer">
            {/* ===== NAVBAR OVER HERO ===== */}
            <div className="absolute top-0 left-0 w-full z-30 flex items-center justify-between px-10 py-6">
                <img
                    src="https://marblemedicals.com/wp-content/uploads/2023/08/logo.svg"
                    alt="logo"
                    className="h-16 object-contain"
                />

                <div className="flex items-center gap-12 text-white text-[15px] font-medium">
                    <div className="flex items-center gap-2 cursor-pointer hover:text-blue-200 transition">
                        <Stethoscope size={18} />
                        <span>Doctors</span>
                    </div>

                    <div className="flex items-center gap-2 cursor-pointer hover:text-blue-200 transition">
                        <Users size={18} />
                        <span>Departments</span>
                    </div>

                    <div className="flex items-center gap-2 cursor-pointer hover:text-blue-200 transition">
                        <Info size={18} />
                        <span>About us</span>
                    </div>
                </div>

                <button className="text-white border-b-2 border-white pb-1 text-[15px] font-medium hover:text-blue-200 hover:border-blue-200 transition">
                    Book an Appointment
                </button>
            </div>

            {/* ===== SLIDES ===== */}
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className="absolute inset-0 transition-opacity duration-1000"
                    style={{
                        opacity: index === current ? 1 : 0,
                        zIndex: index === current ? 10 : 0,
                    }}
                >
                    {slide.type === "video" ? (
                        <video
                            ref={index === current ? videoRef : null}
                            src={slide.src}
                            muted
                            autoPlay
                            playsInline
                            onEnded={handleVideoEnd}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <img
                            src={slide.src}
                            alt="hero"
                            className="w-full h-full object-cover"
                        />
                    )}

                    {/* Marble exact blue gradient overlay */}
                    <div
                        className="absolute inset-0"
                        style={{
                            background:
                                "linear-gradient(to bottom, rgba(25,120,170,0.55), rgba(25,120,170,0.75))",
                        }}
                    />
                </div>
            ))}
            {/* ===== CENTER TEXT ===== */}
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-white font-black leading-none mb-4 text-[clamp(52px,8vw,100px)]">
                    World-class medical
                    <br />
                    services
                </h1>
                <p className="text-white/90 text-lg tracking-wide">
                    Your trust is our success
                </p>
                {/* Down Arrow Animation */}
                <div className="mt-80 animate-bounce">
                    <MoveDown
                        size={60}
                        strokeWidth={0.9}
                        className="text-white opacity-90"
                    />
                </div>
            </div>
            {/* ===== RIGHT SIDE DOTS (STICKY) ===== */}
            <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-4">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goTo(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${current === index
                            ? "bg-white scale-125"
                            : "bg-white/50 hover:bg-white"
                            }`}
                    />
                ))}
            </div>
             {/* ===== STICKY ARROWS (EXACT MARBLE STYLE) ===== */}
            <div className="fixed bottom-[30px] left-1/2 -translate-x-1/2 z-[999] flex gap-2">

                {/* UP ARROW (light blue square) */}
                <button
                    onClick={prevSlide}
                    className="flex items-center justify-center rounded-md transition hover:opacity-90"
                    style={{
                        width: 32,
                        height: 32,
                        background: "rgba(120, 180, 210, 0.55)", // light blue transparent
                        backdropFilter: "blur(2px)",
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="32"
                        fill="white"
                        viewBox="0 0 24 24"
                    >
                        <path d="M12 4l-7 7h4v9h6v-9h4z" />
                    </svg>
                </button>

                {/* DOWN ARROW (dark square) */}
                <button
                    onClick={nextSlide}
                    className="flex items-center justify-center rounded-md transition hover:opacity-90"
                    style={{
                        width: 32,
                        height: 32,
                        background: "rgba(40, 40, 40, 0.85)", // dark grey like screenshot
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="32"
                        fill="white"
                        viewBox="0 0 24 24"
                    >
                        <path d="M12 20l7-7h-4V4h-6v9H5z" />
                    </svg>
                </button>

            </div>
            {/* ===== STICKY WHATSAPP (EXACT MARBLE SVG) ===== */}
            <a
                href="https://wa.me/97444483000"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 left-6 z-40 flex items-center justify-center rounded-full shadow-xl hover:scale-110 transition"
                style={{ width: 60, height: 60, background: "#25D366" }}
            >
                <img
                    src="https://marblemedicals.com/wp-content/uploads/2023/09/whatsapp.svg"
                    alt="WhatsApp"
                    className="w-12 h-12"
                />
            </a>
            {/* ===== STICKY CHAT (EXACT SVG ICON) ===== */}
            <button
                className="fixed bottom-6 right-6 z-[999] flex items-center justify-center rounded-full shadow-lg hover:scale-110 transition"
                style={{
                    width: 60,
                    height: 60,
                    background: "#3397D4", // blue circle
                }}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    width="28"
                    height="28"
                    fill="none"            // ❗ IMPORTANT (removes solid fill)
                    stroke="#ffffff"       // white border outline icon
                    strokeWidth="28"       // thickness of outline
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M512 160h-96V64c0-35.3-28.7-64-64-64H64C28.7 0 0 28.7 0 64v160c0 35.3 28.7 64 64 64h32v52c0 7.1 5.8 12 12 12 2.4 0 4.9-.7 7.1-2.4l76.9-43.5V384c0 35.3 28.7 64 64 64h96l108.9 61.6c2.2 1.6 4.7 2.4 7.1 2.4 6.2 0 12-4.9 12-12v-52h32c35.3 0 64-28.7 64-64V224c0-35.3-28.7-64-64-64z" />
                </svg>
            </button>
        </section>
    );
}
