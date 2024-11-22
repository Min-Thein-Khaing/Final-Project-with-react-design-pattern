import { lazy } from "react";

/*************  ✨ Codeium Command 🌟  *************/
const HomePage = lazy(() => import("../features/public/pages/HomePage"));
const AboutPage = lazy(() => import("../features/public/pages/AboutPage"));
const ContactPage = lazy(() => import("../features/public/pages/ContactPage"));





const publicRoute =
    [
        {
            index:true,
            element: <HomePage />
        },
        {
            path: "about-us",
            element: <AboutPage />
        },
        {
            path: "contact-us",
            element: <ContactPage />
        },
        
    ]

export default publicRoute