import Singup from "@/components/pages/SingupPage/Singup";
import { Suspense } from "react";

const page = () => {
  return (
    <Suspense>
      <div>
        <Singup />
      </div>
    </Suspense>
  );
};

export default page;
