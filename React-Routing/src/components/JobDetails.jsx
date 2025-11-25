import React from "react";
import { useLoaderData } from "react-router";

const JobDetails = () => {
  const jobDetails = useLoaderData();

  console.log("JobDetails------"+jobDetails);
  

  return (
    <>
      <div className="py-12">
        <p>Job Title: {jobDetails.title}</p>
        <p>Salary: {jobDetails.salary}</p>
        <p>Job Location: {jobDetails.location}</p>
         <p>Description : {jobDetails.description}</p> 
         <button className="">Apply</button>  
      </div>
    </>
  );
};

export default JobDetails;

export const jobDetailsLoader = async ({ params }) => {
  const { id } = params;
  console.log(id)
  const res = await fetch(`http://localhost:5000/jobs/${id}`);
  if (!res.ok) {
    // If job not found, you can throw a Response to trigger an error route
    throw new Response("Job not found", { status: res.status });
  }
  
  return res.json();
};
