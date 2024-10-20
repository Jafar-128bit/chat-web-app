import './App.css';
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";

import {Home, Auth} from './page/IndexPage';
import {SidebarTemplate,} from './template/IndexTemplate';
import PopUpTemplate from "./template/PopUpTemplate/PopUpTemplate";

const App = () => {
    const MainApp = () => {
        return <main className="app">
            <PopUpTemplate/>
            <SidebarTemplate/>
            <section className="app__pageContainer noScroll">
                <Outlet/>
            </section>
        </main>
    }

    const router = createBrowserRouter([
        {
            path: "",
            element: <MainApp/>,
            children: [
                {path: "/", element: <Home/>,},
            ]
        },
        {
            path: "/auth",
            children: [
                {path: "sign-in", element: <Auth renderType="signIn"/>},
                {path: "sign-up", element: <Auth renderType="signUp"/>}
            ]
        },
    ]);

    return <RouterProvider router={router}/>
}

export default App;