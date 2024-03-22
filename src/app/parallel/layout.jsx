import React from "react";

export default function ParallelRouteLayout({ children, signup, login }) {
  // suppose we call an api to fetch auth detail,
  const isRegistered = true;

  return (
    <div>
      {children}

      {isRegistered ? login : signup}
    </div>
  );
}
