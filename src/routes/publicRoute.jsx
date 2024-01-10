import Layouts from "../components/Layouts/Layouts";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home";
import Insights from "../pages/Insights/Insights";
import Service from "../pages/Service/Service";

const publicRouter = [
    {
        element : <Layouts/>,
        children : [
            {
                path : "/",
                element : <Home/>
            },
            {
                path : "/about",
                element : <About/>
            },
            {
                path : "/service",
                element : <Service/>
            },
            {
                path : "/insight",
                element : <Insights/>
            },
            {
                path : "/contact",
                element : <Contact/>
            }
        ]
    }
];

export default publicRouter;