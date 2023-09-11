import Routes from "./Routes";
import { lazy } from "react";

const AllRoutesPages = lazy(() => import('./AllRoutesPages'))


export {
    AllRoutesPages,
    Routes,
}