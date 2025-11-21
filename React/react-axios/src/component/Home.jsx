import React, { useEffect } from 'react'
import axios from "axios"
function Home() {

  const API = "https://countriesnow.space/api/v0.1/countries/population/cities"

  const getApiData = async () => {
    try {
      const res = await axios.p(API)
      console.log(res);
      // console.log(res.data);
      
    } catch (error) {
      console.log("Error Message:",error.message);
      console.log("Error Status:",error.response.status);
      console.log("Error Data:",error.response.data);

    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <h1>API Data</h1>
  )
}

export default Home