import React, { useState, useEffect } from 'react';
import Button from "../components/Button";
import arrowRight from "../assets/arrow-right.svg";
import Loader from '../components/Loader';
const Homepage = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="flex flex-col items-center space-y-4">
      {isLoading ? <Loader /> : <> 
      {/* Default Button */}
      <Button label={"Default Button"} />

      {/* Customized Button 1 */}
      <Button
        iconURL={arrowRight}
        label={"Customized Button 1"}
        borderColor={"border-black"}
        textColor={"text-white"}
        backgroundColor={"bg-black"}
      />

      {/* Customized Button 2 */}
      <Button
        label={"Customized Button 2"}
        borderColor={"border-blue-500"}
        textColor={"text-blue-500"}
        backgroundColor={"bg-white"}
      />

      {/* Customized Button 3 */}
      <Button
        label={"Customized Button 3"}
        borderColor={"border-green-500"}
        textColor={"text-green-500"}
        backgroundColor={"bg-white"}
      />
      </>}
    </div>
  );
};

export default Homepage;
