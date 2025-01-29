import React,{useState} from "react" ;
import {useNavigate} from "react-router-dom";
function SignIn(){
    const [step,setStep]=useState(1);
    const [formData,setFormData]=useState({
            email:"",
            password:"",
        });
    const navigate=useNavigate();
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setFormData({...formData,[name]:value});
    };
    const handleNext=(e)=>{
        e.preventDefault();
        if(!formData.email)
        {
            alert("Please Enter Your Email");
            return 
        }
        setStep(2);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!formData.password)
        {
            alert("Please Enter Password");
            return;
        }
        alert("SignedIn Successfully");
        console.log("Sign In Data :",formData);
        //Had to add Signin logic 
    }
    return(
        <>
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <form className="p-6 bg-white shadow-md rounded-md max-w-md w-full">
                    {step==1 &&(
                        <>
                            <h1 className="text-2xl font-bold mb-6">
                                SignIn
                            </h1>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700 font-medium mb-5">
                                    Email
                                </label>
                                <input type="email" id="email" name="email" value={formData.email}
                                       onChange={handleChange} placeholder="Enter your email"
                                       className="w-full border border-gray-300 rounded px-3 py-2 mb-5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <button onClick={handleNext} className="w-full bg-blue-500 
                                    text-white py-2 rounded hover:bg-blue-600 focus:outline-none mb-5">
                                        Next
                            </button>
                            <p className="mt-4 text-center">
                                Don't have an account?{" "}
                                <span onClick={() => navigate("/SignUp")}
                                      className="text-blue-500 cursor-pointer hover:underline">
                                    Create Account
                                </span>
                            </p>
                        </>
                    )}
                    {step === 2 && (
                        <>
                            <h1 className="text-2xl font-bold mb-6 text-center">
                                Sign In
                            </h1>
                            <div className="mb-4">
                                <label htmlFor="password" className="block text-gray-700 font-medium mb-5">
                                    Password
                                </label>
                                <input type="password" id="password" name="password" value={formData.password}
                                    onChange={handleChange} placeholder="Enter your password" className="w-full border border-gray-300 rounded px-3 py-2 mb-5 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                            </div>
                            <button onClick={handleSubmit} className="w-full bg-blue-500 text-white py-2 mb-5 rounded hover:bg-blue-600 focus:outline-none"
                            >
                                Sign In
                            </button>
                        </>
                        )}
                </form>                
            </div>
        </>
    )
}
export default SignIn