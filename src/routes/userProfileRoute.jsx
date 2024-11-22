import { lazy } from "react";
import UserProfileLayout from "../features/user-profile/components/useProfileLayout";

const PasswordChangePage = lazy(() => import("../features/user-profile/pages/PasswordChangePage"));
const ProfileImageChangePage = lazy(() => import("../features/user-profile/pages/ProfileImageChangePage"));
const ProfileNameChangePage = lazy(() => import("../features/user-profile/pages/ProfileNameChangePage"));
const UserProfilePage = lazy(() => import("../features/user-profile/pages/UserProfilePage"));

const userProfileRoute = [
    {
        path: "user-profile",
        element:<UserProfileLayout />,
        children : [
            {
                index:true,
                element:<UserProfilePage />
        
            },
            {
                path:"change-image",
                element:<ProfileImageChangePage />
            },
            {
                path:"change-password",
                element:<PasswordChangePage />
            },
            {
                path:"change-name",
                element:<ProfileNameChangePage />
            }
        ]
    }
]
export default userProfileRoute;