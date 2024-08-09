import SocailLogin from "@/components/common/SocailLogin";
import Image from "next/image";

const RootLayoutForAuthenticatedPages = ({ children }) => {
  return (
    <div className="min-h-screen flex fle-col items-center justify-center py-24 px-4">
      <div className="md:flex items-center gap-4 max-w-6xl w-full justify-between">
        <div className="hidden md:block max-md:mt-8 basis-1/2">
          <Image
            src="/assets/images/login/login.svg"
            width={1000}
            height={1000}
            className="w-full max-md:w-4/5 mx-auto block object-cover"
            alt="Login Image"
          />
        </div>
        <div className="basis-1/2 border border-[#D0D0D0] rounded-lg p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-md:mx-auto">
          {/* dynamic from render of login and singup page */}
          {children}

          {/* from bottom positon start here */}
          <div class="my-4 flex items-center gap-4">
            <hr class="w-full border-gray-300" />
            <p class="text-sm text-gray-800 text-center">or</p>
            <hr class="w-full border-gray-300" />
          </div>

          {/* social login buttion here */}
          <SocailLogin />
        </div>
      </div>
    </div>
  );
};

export default RootLayoutForAuthenticatedPages;
