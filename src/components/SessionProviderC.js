'use client'

import { SessionProvider } from "next-auth/react";
import React, { useState, useEffect } from "react";



const SessionProviderC = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);



  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  );
};

export default SessionProviderC;