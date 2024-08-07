"use client";

import { useSession } from "next-auth/react";

const LoggedUserIData = () => {
  const userInfo = useSession();

  return userInfo;
};

export default LoggedUserIData;
