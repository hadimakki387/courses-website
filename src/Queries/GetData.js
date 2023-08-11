import React, { useState, useEffect } from "react";

async function GetData(route,setData) {
  try {
    const res = await fetch(`http://localhost:3000/api/${route}`);
    const data = await res.json();
    setData(data);
  } catch (error) {
    console.error(`Error fetching videos:`, error);
  }
}

export default GetData;
