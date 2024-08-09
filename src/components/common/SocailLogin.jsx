"use client";

import LoggedUserIData from "@/hooks/LoggedUserIData";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { SiGithub } from "react-icons/si";

const SocailLogin = () => {
  // socail login handler

  const router = useRouter();

  const userInfo = LoggedUserIData();

  const handleSocailLogin = (provider) => {
    signIn(provider, { redirect: false });
  };

  // when login succes with socail then redirect home page
  if (userInfo?.status === "authenticated") {
    router.push("/");
  }

  return (
    <div className="space-x-6 flex justify-center text-3xl">
      {/* google */}
      <button type="button" onClick={() => handleSocailLogin("google")}>
        <FcGoogle />
      </button>

      {/* github */}
      <button type="button" onClick={() => handleSocailLogin("github")}>
        <SiGithub />
      </button>

      {/* facebook */}
      <button type="button" onClick={() => handleSocailLogin("facebook")}>
        <FaFacebook className="text-[#1976D2]" />
      </button>
    </div>
  );
};

export default SocailLogin;
