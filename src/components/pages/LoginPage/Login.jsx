"use client";
import Button from "@/components/common/Button";
import InputFiled from "@/components/common/InputFiled";
import SmallTitle from "@/components/common/SmallTitle";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Login = () => {
  const router = useRouter();

  const params = useSearchParams();

  const path = params.get("redirectKoro");

  // handle login
  const handleLogin = async (event) => {
    event.preventDefault();

    const input = event.target;

    const email = input.email.value;
    const password = input.password.value;

    const res = await signIn("credentials", {
      email,
      password,
      redirect: true,
      callbackUrl: path ? path : "/",
    });

    // when login succesfull then redirect home page
    if (res?.ok) {
      router?.push("/");
      alert("login succesfull");
    }
    //
  };

  return (
    <form onSubmit={handleLogin} className="space-y-4">
      <div className="mb-8">
        <SmallTitle text={"Login"} size={"text-3xl"} />
      </div>

      {/* email */}
      <InputFiled
        label={"Eamil"}
        name={"email"}
        type={"eamil"}
        required={true}
        placeholder={"Your Eamil"}
        icon={<MdEmail />}
      />

      {/* password */}
      <InputFiled
        label={"Password"}
        name={"password"}
        type={"password"}
        required={true}
        placeholder={"Your Password"}
        openIcon={<FaEye />}
        closeIcon={<FaEyeSlash />}
      />

      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className="h-4 w-4 accent-[#FF3811]"
          />
          <label for="remember-me" className="ml-3 block text-sm text-[#444]">
            Remember me
          </label>
        </div>

        <div className="text-sm">
          <a
            href="jajvascript:void(0);"
            className="text-[#FF3811] hover:underline font-semibold"
          >
            Forgot your password?
          </a>
        </div>
      </div>

      <div className="!mt-8">
        <Button label={"Login"} fullWidth={true} />
      </div>

      <p className="text-sm !mt-8 text-center text-[#444]">
        Don&apos;t have an account{" "}
        <Link
          href="/singup"
          className="text-[#FF3811] font-semibold hover:underline ml-1 whitespace-nowrap"
        >
          Sing Up here
        </Link>
      </p>
    </form>
  );
};

export default Login;
