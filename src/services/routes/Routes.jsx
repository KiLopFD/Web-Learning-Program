import { Navigate } from "react-router-dom";
import { About, AllCategoriesExercise, AllProblem, DetailProblem, Home, LayoutDetailProblem, LayoutExercise, LayoutRoot } from "../../pages";
import { Suspense } from "react";


const Routes = [
  {
    path: "/",
    element:
      <Suspense fallback={<>Loading...</>}>
        <LayoutRoot />
      </Suspense>,
    children: [
      {
        // : /
        index: true,
        path: "",
        element:
          <Suspense fallback={<>Loading...</>}>
            <Home />
          </Suspense>
      },
      {
        // : /exercise
        path: "/exercise",
        element:
          <Suspense fallback={<>Loading...</>}>
            <LayoutExercise />
          </Suspense>
        ,
        children: [
          {
            // : /exercise
            index: true,
            element:
              <Suspense fallback={<>Loading...</>}>
                <AllCategoriesExercise />
              </Suspense>
          },
          {
            path: '/exercise/detail',
            element:
              <Suspense fallback={<>Loading...</>}>
                <LayoutDetailProblem />
              </Suspense>
            ,
            children: [
              {
                path: '',
                element:
                  <Suspense fallback={<>Loading...</>}>
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
