import { VscEyeClosed } from "react-icons/vsc";
import { IoIosEye } from "react-icons/io";
import { useState } from "react";

const Password = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="min-h-[400px] bg-white flex items-center justify-center text-black flex-col max-w-[600px] w-[96%] gap-4">
      <div className="flex flex-col max-w-full w-[96%]">
        <label className="max-w-[300px] w-[99%]">Enter Name Here</label>
        <input
          placeholder="Enter Name Here"
          type="text"
          className="h-[40px] border border-black rounded p-4"
        />
      </div>
      <div className="flex flex-col max-w-full w-[96%]  relative">
        <label>Enter Password Here</label>
        <input
          placeholder="Enter Password Here"
          type={isOpen ? "text" : "password"}
          className="h-[40px] border border-black rounded p-4 "
        />
        {isOpen ? (
          <VscEyeClosed
            className="absolute right-2 top-9 text-xl"
            onClick={() => setIsOpen((isOpen) => !isOpen)}
          />
        ) : (
          <IoIosEye
            className="absolute right-2 top-9 text-xl"
            onClick={() => setIsOpen((isOpen) => !isOpen)}
          />
        )}
      </div>
      <button className="px-10 py-3 text-white font-semibold text-md bg-green-600">
        Submit
      </button>
    </div>
  );
};

export default Password;
