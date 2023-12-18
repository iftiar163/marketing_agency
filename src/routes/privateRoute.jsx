import Layouts from "../components/Layouts/Layouts";
import Login from "../pages/Admin/Login";

const privateRouter = [
    {
        element : <Layouts/>,
        children : [
            {
                path : "/login",
                element : <Login/>
            }
        ]
    }
]

export default privateRouter;