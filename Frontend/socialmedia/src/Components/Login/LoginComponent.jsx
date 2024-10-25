import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "remixicon/fonts/remixicon.css";

const LoginComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const Navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/user/login",
        {
          email,
          password,
        }
      );
      toast.success(response.data.msg, {
        position: "top-center",
      });
      setTimeout(() => {
        Navigate("/profile");
      }, 1000);
    } catch (err) {
      // console.log(err.response.data.msg);
      toast.error(err.response.data.msg, {
        position: "top-center",
      });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <form
        onSubmit={handleSubmit}
        className="bg-black p-6 rounded-lg shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold text-green-500 mb-4">Login Form</h2>
        <div className="mb-4">
          <label className="block text-green-500 mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-green-500"
            required
          />
        </div>
        <div className="mb-4 relative">
          <label className="block text-green-500 mb-2" htmlFor="password">
            Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-green-500"
            required
          />
          <i
            onClick={togglePasswordVisibility}
            className={`ri-eye${
              showPassword ? "-off" : ""
            }-line absolute right-3 top-3 cursor-pointer text-green-500`}
          />
        </div>
        <button
          type="submit"
          className="bg-green-500 text-white w-full py-2 rounded hover:bg-green-600 transition duration-200"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginComponent;

// import axios from "axios";
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import "remixicon/fonts/remixicon.css";

// const LoginComponent = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const navigate = useNavigate();

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("http://localhost:5000/api/user/login", {
//         email,
//         password,
//       });

//       const { profile } = response.data;

//       toast.success(response.data.msg, {
//         position: "top-center",
//       });

//       // Store profile data in local storage or context for access in the profile component
//       localStorage.setItem("profile", JSON.stringify(profile));

//       setTimeout(() => {
//         navigate("/profile");
//       }, 1000);
//     } catch (err) {
//       toast.error(err.response.data.msg, {
//         position: "top-center",
//       });
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-white">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-black p-6 rounded-lg shadow-md w-full max-w-sm"
//       >
//         <h2 className="text-2xl font-bold text-green-500 mb-4">Login Form</h2>
//         <div className="mb-4">
//           <label className="block text-green-500 mb-2" htmlFor="email">
//             Email
//           </label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-green-500"
//             required
//           />
//         </div>
//         <div className="mb-4 relative">
//           <label className="block text-green-500 mb-2" htmlFor="password">
//             Password
//           </label>
//           <input
//             type={showPassword ? "text" : "password"}
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-green-500"
//             required
//           />
//           <i
//             onClick={togglePasswordVisibility}
//             className={`ri-eye${
//               showPassword ? "-off" : ""
//             }-line absolute right-3 top-3 cursor-pointer text-green-500`}
//           />
//         </div>
//         <button
//           type="submit"
//           className="bg-green-500 text-white w-full py-2 rounded hover:bg-green-600 transition duration-200"
//         >
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default LoginComponent;
