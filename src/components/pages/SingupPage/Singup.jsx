"use client";
import Button from "@/components/common/Button";
import InputFiled from "@/components/common/InputFiled";
import SmallTitle from "@/components/common/SmallTitle";
import Link from "next/link";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { MdEmail, MdOutlineDriveFileRenameOutline } from "react-icons/md";

const Singup = () => {
  // const handle singup
  const handleSingup = async (event) => {
    event.preventDefault();

    const input = event.target;

    const newUser = {
      name: input.name.value,
      email: input.email.value,
      password: input.password.value,
    };

    // post request with fetch in server
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/singup`, {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "content-type": "aplication/json",
      },
    });

    const data = await res.json();

    if (data?.res?.acknowledged) {
      input.reset();
      alert("Account created succesfull");
    } else if (data?.message) {
      alert(`${data?.message}`);
    }
  };

  return (
    <form onSubmit={handleSingup} className="space-y-4">
      <div className="mb-8">
        <SmallTitle text={"Sign Up"} size={"text-3xl"} />
      </div>

      {/* name */}
      <InputFiled
        label={"Name"}
        name={"name"}
        type={"text"}
        required={true}
        placeholder={"Your Name"}
        icon={<MdOutlineDriveFileRenameOutline />}
      />

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

      <div className="!mt-8">
        <Button label={"Sing Up"} fullWidth={true} />
      </div>

      <p className="text-sm !mt-8 text-center text-[#444]">
        You have an account{" "}
        <Link
          href="/login"
          className="text-[#FF3811] font-semibold hover:underline ml-1 whitespace-nowrap"
        >
          Login here
        </Link>
      </p>
    </form>
  );
};

export default Singup;
