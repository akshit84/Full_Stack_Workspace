import React from "react";
import { Link, useLoaderData } from "react-router";

const Jobs = () => {
  const jobsData = useLoaderData();
  console.log(jobsData);

  return (
    <div className="py-10 w-full flex justify-between gap-5">
      {jobsData?.map((jobs) => {
        return (
          <>
            <Link
              to={jobs.id.toString()}
              key={jobs.id}
              className="flex-1 p-2.5 bg-[#efefef] text-black"
            >
              <h2>{jobs.title}</h2>
              <p>{jobs.location}</p>
            </Link>
          </>
        );
      })}
    </div>
  );
};

export default Jobs;

export const jobsLoader = async () => {
  const res = await fetch("http://localhost:5000/jobs");
  if (!res.ok) {
    // Throw a Response so React Router shows errorElement (or handle gracefully)
    throw new Response(await res.text(), { status: res.status });
  }
  return res.json();
};
