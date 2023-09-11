import { lazy } from "react";

const Header = lazy(() => import('./Header/Header'))
const SideBarFB = lazy(() => import('./SiderBar/SideBarFB'))
const CarouselFB = lazy(() => import('./CarouselFB/CarouselFB'))
const FooterFB = lazy(() => import('./Footer/FooterFB'))
const CardFB = lazy(() => import('./CardFB/CardFB'))
const TabsFB = lazy(() => import('./TabsFB/TabsFB'))
const EditorVsCode = lazy(() => import('./Editor/EditorVsCode'))
const CustomVsCode = lazy(() => import('./Editor/CustomVsCode'))
const SubmitCode = lazy(() => import('./Editor/SubmitCode'))
const ShowTestCases = lazy(() => import('./Editor/ShowTestCases'))
const Item = lazy(() => import('./Item/Item'))
const ErrorFallBack = lazy(() => import('./ErrorFallBack/ErrorFallBack'))
const MarkDown = lazy(() => import('./MarkDown/MarkDown'))
const Copy = lazy(() => import('./Copy/Copy'))
const NavADS = lazy(() => import('./NavADS/NavADS'))


export {
    Header,
    SideBarFB,
    CarouselFB,
    FooterFB,
    CardFB,
    TabsFB,
    EditorVsCode,
    CustomVsCode,
    Item,
    SubmitCode,
    ShowTestCases,
    ErrorFallBack,
    MarkDown,
    Copy,
    NavADS
}