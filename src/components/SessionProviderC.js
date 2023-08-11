'use client'

import React, { useState, useEffect } from "react";
import { SessionProvider } from "next-auth/client";


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