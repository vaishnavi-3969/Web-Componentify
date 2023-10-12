import React from "react";
import {useNavigate} from "react-router-dom";

const Feature6 = () => {
    const navigate=useNavigate()
    return (
        <div className="lg:px-20 md:px-6 px-4 md:py-12 py-8">
            <div className="lg:flex items-center justify-between">
                <div className="lg:w-1/3">
                    <h1 className="text-4xl font-semibold leading-9 text-gray-800">Web Componentify</h1>
                    <p className="text-base leading-6 mt-4 text-gray-600">Web Componentify is an open-source repository dedicated to simplifying web development by providing a collection of reusable components. Whether you're building a website, web application, or mobile app, you'll find a wide range of components, from headers and footers to buttons and dropdowns, available in various popular frameworks and languages.</p>
                    <button onClick={()=>{
                        navigate("/button")
                    }} aria-label="view catalogue" className="focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none mt-6 md:mt-8 text-base font-semibold leading-none text-gray-800 flex items-center hover:underline">
                        Components
                        <svg className="ml-2 mt-1" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.33325 4H10.6666" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M8 6.66667L10.6667 4" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M8 1.33398L10.6667 4.00065" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    <a href={"https://github.com/vaishnavi-3969/Web-Componentify"} target={"_blank"} aria-label="view catalogue" className="mt-6 md:mt-8 text-base font-semibold leading-none text-gray-800 flex items-center hover:underline">
                        Repository
                        <svg className="ml-2 mt-1" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.33325 4H10.6666" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M8 6.66667L10.6667 4" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M8 1.33398L10.6667 4.00065" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                </div>
                <div className="lg:w-7/12 lg:mt-0 mt-8">
                    <div className="w-full h-full bg-red-200">
                        <img src="https://site.pro/assets/img/site/facebook_banner/Add%20Accordion,%20Tabs%20or%20Slider%20to%20Your%20Website.png?ts=20230102110235" alt="apartment design" className="w-full h-96 object-cover sm:block hidden" />
                        <img src="https://lh4.googleusercontent.com/CLYmvhmufxGQVBAPdz3iZBpe5lKOyTEVR9FrVsM70MVMoHDFFTxJjOHX_WkV50JXuLJFxGxNzcs4MBbWorOEVDnqJOhwG_TR3oCTOAJDBS8oZZF6ic7zXB3CtcEDoob6BC2_Z0KvoE_Q6xvPmg" alt="apartment design" className="sm:hidden block w-full" />
                    </div>
                    <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 lg:gap-8 gap-6 lg:mt-8 md:mt-6 mt-4">
                        <img src="https://lh4.googleusercontent.com/CLYmvhmufxGQVBAPdz3iZBpe5lKOyTEVR9FrVsM70MVMoHDFFTxJjOHX_WkV50JXuLJFxGxNzcs4MBbWorOEVDnqJOhwG_TR3oCTOAJDBS8oZZF6ic7zXB3CtcEDoob6BC2_Z0KvoE_Q6xvPmg" className="w-full" alt="kitchen" />
                        <img src="https://htmlburger.com/blog/wp-content/uploads/2022/11/Modal-UI-Design-Concepts-Company-Settings-Modal-by-Vishnu-Prasad.png" className="w-full" alt="sitting room" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feature6;
