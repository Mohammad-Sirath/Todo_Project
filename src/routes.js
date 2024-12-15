import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Blog from "./pages/blog/Blog";
import Course from "./pages/course/Course";
import Login from "./pages/login/Login";
import Panel from "./pages/panel/Panel";
import Articles from "./pages/article/Articles";
import Setting from "./pages/setting/Setting";
import PrivateRoute from "./components/PrivateRoute";
const allRoutes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  {
    path: "/articles/*",
    element: <Articles />,
    children: [
      { path: "php", element: <h1 className="wrapper">Php articles</h1> },
      { path: "react", element: <h1 className="wrapper">React articles</h1> },
      {
        path: "js",
        element: <h1 className="wrapper">JavaScript articles</h1>,
      },
    ],
  },
  { path: "/blog", element: <Blog /> },
  { path: "/login", element: <Login /> },
  {
    path: "/panel",
    element: (
      <PrivateRoute>
        <Panel />
      </PrivateRoute>
    ),
  },
  { path: "/course/:courseId", element: <Course /> },
  {
    path: "/setting",
    element: (
      <PrivateRoute>
        <Setting />
      </PrivateRoute>
    ),
  },
];
export default allRoutes;
