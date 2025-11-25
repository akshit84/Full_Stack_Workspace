import React from "react";
import { createRoutesFromElements, Route } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import About from "../Pages/About";
import ContactLayout from "../Layout/ContactLayout";
import ContactInfo from "../components/ContactInfo";
import ContactForm from "../components/ContactForm";
import JobsLayout from "../Layout/JobsLayout";
import Jobs, { jobsLoader } from "../Pages/Jobs";
import JobDetails, { jobDetailsLoader } from "../components/JobDetails";
import NotFound from "../components/NotFound";

const Routes = createRoutesFromElements(
  <Route path="/" element={<RootLayout />}>
    <Route index element={<Home />} />
    <Route path="products" element={<Products />} />
    <Route path="about" element={<About />} />
    <Route path="contact" element={<ContactLayout />}>
      <Route path="info" element={<ContactInfo />} />
      <Route path="form" element={<ContactForm />} />
    </Route>
    <Route path="jobs" element={<JobsLayout />}>
      <Route index element={<Jobs />} loader={jobsLoader} />
      <Route path=":id" element={<JobDetails />} loader={jobDetailsLoader} />
    </Route>
    <Route path="*" element={<NotFound />} />
  </Route>
);

export default Routes;
