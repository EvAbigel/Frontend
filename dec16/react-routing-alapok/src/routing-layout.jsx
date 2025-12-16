import  Home  from './components/home';
import About from './components/about'
import Contact  from './components/contacts';
import Navigation from './components/navigation';
import ErrorComponent from './components/error-component';

export const ROUTING = [
  {
    path: "/",
    element: <Navigation/>,
    errorElement: <ErrorComponent/>,
    children: [
      { path: "/", element: <Home/> },
      { path: "/about", element: <About/>},
      { path: "/contact", element: <Contact/>}
    ]
  },
]