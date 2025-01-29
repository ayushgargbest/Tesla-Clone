import React,{ useState } from "react";
function SignUp(){
    const [step,setStep]=useState(1);
    const [formData,setFormData]=useState({
        region:"",
        firstname:"",
        lastname:"",
        email:"",
        password:"",
        confirmpassword:"",
    });
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setFormData({...formData,[name]:value});
    };
    const handleNext=(e)=>{
        e.preventDefault();
        if(!formData.region|| !formData.firstname|| !formData.lastname)
        {
            alert("Please fill all details in Step 1");
            return;
        }
        setStep(2);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(formData.password!==formData.confirmpassword)
        {
            alert("Passwords do not match");
            return;
        }
        alert("Account created successfully");
        console.log("Form Data",formData);
    }
    return(
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form className="p-6 bg-white shadow-md rounded-md max-w-md w-full">
                {step==1 && (
                    <>
                        <h1 className="text-2xl font-bold mb-6">Create Account (Step 1 of 2)</h1>
                        <div className="mb-4">
                            <label htmlFor="region" className="block text-gray-700 font-medium">
                                Region
                            </label>
                            <select id="region" name="region" value={formData.region} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <option value="" disabled>
                                Select your region
                                </option>
                                <option value="us">United States</option>
                                <option value="in">India</option>
                                <option value="uk">United Kingdom</option>
                                <option value="au">Australia</option>
                                <option value="ca">Canada</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="firstname" className="block text-gray-700 font-medium">
                                Firstname
                            </label>
                            <input type="text" id="firstname" name="firstname" value={formData.firstname} onChange={handleChange} placeholder="Enter your firstname"className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="lastname" className="block text-gray-700 font-medium">
                                Lastname
                            </label>
                            <input type="text" id="lastname" name="lastname" value={formData.lastname} onChange={handleChange} placeholder="Enter your lastname"className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                        </div>
                        <button onClick={handleNext} className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none">
                        Next
                        </button>
                    </>
                )}
                {step === 2 && (
                    <>
                        <h1 className="text-2xl font-bold mb-6">Create Account (Step 2 of 2)</h1>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 font-medium">
                                Email
                            </label>
                            <input
                                type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-700 font-medium">
                                Password
                            </label>
                            <input
                                type="password" id="password" name="password" value={formData.password} onChange={handleChange} placeholder="Enter your password" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="confirmpassword" className="block text-gray-700 font-medium">
                                Confirm Password
                            </label>
                            <input
                                type="password" id="confirmpassword" name="confirmpassword" value={formData.confirmpassword} onChange={handleChange} placeholder="Confirm your password"
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                        </div>
                        <button onClick={handleSubmit} className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none">
                        Create Account
                        </button>
                    </>
                    )}
            </form>
        </div>
    );
}
export default SignUp