import { Navigate } from "react-router-dom";
import { About, AllCategoriesExercise, AllProblem, DetailProblem, Home, LayoutDetailProblem, LayoutExercise, LayoutRoot } from "../../pages";
import { Suspense } from "react";
import { LoadingComponents } from "../../components";


const Routes = [
  {
    path: "/",
    element:
      <Suspense fallback={<LoadingComponents />}>
        <LayoutRoot />
      </Suspense>,
    children: [
      {
        // : /
        index: true,
        path: "",
        element:
          <Suspense fallback={<LoadingComponents />}>
            <Home />
          </Suspense>
      },
      {
        // : /exercise
        path: "/exercise",
        element:
          <Suspense fallback={<LoadingComponents />}>
            <LayoutExercise />
          </Suspense>
        ,
        children: [
          {
            // : /exercise
            index: true,
            element:
              <Suspense fallback={<LoadingComponents />}>
                <AllCategoriesExercise />
              </Suspense>
          },
          {
            path: '/exercise/detail',
            element:
              <Suspense fallback={<LoadingComponents />}>
                <LayoutDetailProblem />
              </Suspense>
            ,
            children: [
              {
                path: '',
                element:
                  <Suspense fallback={<LoadingComponents />}>
                    <DetailProblem />
                  </Suspense>
              }
            ]
          }
        ]
      },
      {
        path: '/about',
        element: <About />
      }
      ,
      {
        path: "/*",
        element: <Navigate to={'/'} />
      }
    ]
  }
];

export default Routes;
