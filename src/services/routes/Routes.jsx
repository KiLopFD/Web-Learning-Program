import { Navigate } from "react-router-dom";
import { About, AllCategoriesExercise, AllProblem, DetailProblem, Home, LayoutDetailProblem, LayoutExercise, LayoutRoot } from "../../pages";


const Routes = [
  {
    path: "/",
    element: <LayoutRoot />,
    children: [
      {
        // : /
        index: true,
        path: "",
        element: <Home />
      },
      {
        // : /exercise
        path: "/exercise",
        element: <LayoutExercise />,
        children: [
          {
            // : /exercise
            index:true,
            element: <AllCategoriesExercise />
          },
          {
            path:'/exercise/detail',
            element: <LayoutDetailProblem />,
            children: [
              {
                path: '',
                element: <DetailProblem />
              }
            ]
          }
        ]
      },
      {
        path:'/about',
        element: <About />
      }
      ,
      {
        path:"/*",
        element: <Navigate to={'/'}/>
      }
    ]
  }
];

export default Routes;
