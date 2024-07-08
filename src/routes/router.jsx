import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ProjectsPage from "../pages/projects/Projects";
import MembersPage from "../pages/membersPage/MembersPage";
import MyTaskPage from "../pages/myTaskPage/MyTaskPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <MyTaskPage />
            },
            {
                path: '/projects',
                element: <ProjectsPage />
            },
            {
                path: '/members',
                element: <MembersPage />
            }
        ]
    }
])