import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ProjectsPage from "../pages/projects/Projects";
import MembersPage from "../pages/membersPage/MembersPage";
import MyTaskPage from "../pages/myTaskPage/MyTaskPage";
import ProjectDetailsPage from "../pages/projectDetailsPage/ProjectDetailsPage";
import LoginPage from "../pages/loginPage/LoginPage";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element:
            <PrivateRoute>
                <MainLayout />
            </PrivateRoute>,
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
            },

        ]
    },
    {
        path: '/login',
        element: <LoginPage />
    }
])