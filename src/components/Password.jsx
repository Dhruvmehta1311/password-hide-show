import { VscEyeClosed } from "react-icons/vsc";
import { IoIosEye } from "react-icons/io";
import { useState } from "react";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

const Password = () => {
  const [isOpen, setIsOpen] = useState(false);

  function handleSubmit() {
    Toastify({
      text: "Form Submitted Successfully!",
      duration: 3000,
      destination: "",
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
      onClick: function () {}, // Callback after click
    }).showToast();
  }
  return (
    <div className="min-h-[400px] bg-white flex items-center justify-center text-black flex-col max-w-[600px] w-[96%] gap-4 rounded">
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
      <button
        onClick={handleSubmit}
        className="px-10 py-3 text-white font-semibold text-md bg-green-600 rounded hover:bg-green-400"
      >
        Submit
      </button>
    </div>
  );
};

export default Password;
