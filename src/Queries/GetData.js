import React, { useState, useEffect } from "react";

async function GetData(route,setData) {
  try {
    const res = await fetch(`https://mern-course.netlify.app/api/${route}`);
    const data = await res.json();
    setData(data);
  } catch (error) {
    setData(error);
    console.error(`Error fetching videos:`, error);
  }
}

export default GetData;
