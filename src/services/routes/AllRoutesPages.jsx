import { useRoutes } from "react-router-dom";
import Routes from "./Routes";
import { memo } from "react";

const AllRoutesPages = () => {
    const allPages = useRoutes(Routes);
    return allPages
}

export default memo(AllRoutesPages)