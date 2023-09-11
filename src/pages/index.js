import { lazy } from "react";


const LayoutRoot = lazy(() => import('./LayoutRoot'))
const Home = lazy(() => import('./Home/Home'))
const LayoutExercise = lazy(() => import('./Exercise/LayoutExercise'))
const AllCategoriesExercise = lazy(() => import('./Exercise/Slug/AllCategoriesExercise'))
const DetailProblem = lazy(() => import('./Exercise/Slug/DetailProblem/DetailProblem'))
const LayoutDetailProblem = lazy(() => import('./Exercise/Slug/DetailProblem/LayoutDetailProblem'))
const About = lazy(() => import('./About/About'))




export {
    LayoutRoot,
    Home,
    LayoutExercise,
    AllCategoriesExercise,
    DetailProblem,
    LayoutDetailProblem,
    About
}