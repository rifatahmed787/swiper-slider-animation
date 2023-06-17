import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import HomeLayout1 from "../Pages/Home/HomeLayout1";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomeLayout1 />,
      },
      {
        // path:"/home2",
        // element:<Home2/>
      },
      {
        // path: "/error",
        // element: <ErrorPage />,
      },
      {
        // path: "/about",
        // element: <About />,
      },
      {
        // path: "/services",
        // element: <Services />,
      },
      {
        // path: "/servicesdetail",
        // element: <ServiceDetails />,
      },
      {
        // path: "/book",
        // element: <Appointment />,
      },
      {
        // path: "/faq",
        // element: <Faq />,
      },
      {
        // path: "/blogstandard",
        // element: <BlogStandard />,
      },
      {
        // path: "/bloggrid",
        // element: <BlogGrid />,
      },
      {
        // path: "/blogdetails",
        // element: <BlogDetails />,
      },
      {
        // path: "/contact",
        // element: <Contact />,
      },
      {
        // path: "/quote",
        // element: <GetQuote />,
      },
      {
        // path: "/clinicsgrid",
        // element: <ClinicGrid />,
      },
      {
        // path: "/clinicslist",
        // element: <ClinicsList />,
      },
      {
        // path: "/clinicsdetails",
        // element: <ClinicsDetails />,
      },
      {
        // path: "/doctorslist",
        // element: <DoctorList />,
      },
      {
        // path: "/doctorsgrid",
        // element: <DoctorGrid />,
      },
      {
        // path: "/doctorsdetails",
        // element: <DoctorDetails />,
      },
    ],
  },
]);
