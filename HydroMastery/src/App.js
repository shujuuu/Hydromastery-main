import "bootstrap/dist/css/bootstrap.min.css";
import logo from './logo.svg';
import './App.css';
import 'aos/dist/aos.css';
import 'react-toastify/dist/ReactToastify.css';
import './style.css';
import { useEffect } from "react";

import AOS from 'aos';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import LandingPage from './Pages/LandingPage/LandingPage';
import BlogPage from "./Pages/BlogPage/BlogPage";
import PublicPageLayout from "./Components/PublicPageLayout/PublicPageLayout";

const ProtectedRoutes = () => {

  const routes = [
    {
      path: '/',
      page: <LandingPage />,
      conditions: true
    }
  ];

  return routeGenerator(routes);
}

const UnprotectedRoutes = () => {
  const routes = [
    {
      path: '/',
      page: <LandingPage />
    },
    {
      path: '/',
      page: <PublicPageLayout />,
      children: [
        {
          path: '/blog',
          page: <BlogPage />
        }
      ]
    }
  ];

  return routeGenerator(routes);
}

const routeGenerator = (routes) => {
  const elementRoutes = routes.map(route => <Route key={route.path} exact path={route.path} element={route.page} >{route.children ? routeGenerator(route.children) : null}</Route>);
  elementRoutes.push(<Route key={'/*'} exact path='/*' element={<div>Error page</div>} />);

  return elementRoutes;
}

const LOGGEDIN = false;

function App() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div>
      <Router>
        <Routes>
          {LOGGEDIN ? ProtectedRoutes() : UnprotectedRoutes()}
        </Routes>
      </Router>
    </div>
  );

}

export default App;