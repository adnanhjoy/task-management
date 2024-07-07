import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ProjectsPage from "../pages/projects/Projects";
import MembersPage from "../pages/membersPage/MembersPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <h1>Dashboard</h1>
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