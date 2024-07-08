import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ProjectsPage from "../pages/projects/Projects";
import MembersPage from "../pages/membersPage/MembersPage";
import MyTaskPage from "../pages/myTaskPage/MyTaskPage";
import ProjectDetailsPage from "../pages/projectDetailsPage/ProjectDetailsPage";

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
                path: '/projects/:id',
                element: <ProjectDetailsPage />
            },
            {
                path: '/members',
                element: <MembersPage />
            }
        ]
    }
])