import Login from "@/components/pages/LoginPage/Login";
import { Suspense } from "react";

const LoginPage = () => {
  return (
    <Suspense>
      <div>
        <Login />
      </div>
    </Suspense>
  );
};

export default LoginPage;
