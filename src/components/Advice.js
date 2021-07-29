import React, { useEffect, useState } from "react";

const Advice = () => {
  const [advice, setAdvice] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const result = await fetch("https://api.adviceslip.com/advice");
      const data = await result.json();
      setIsLoading(false);

      setAdvice(data.slip.advice);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClickButton = () => {
    fetchData();
  };

  return (
    <>
      <div className="copyright py-4 text-center text-white">
        <div className="container">
          {isLoading ? (
            <p className="lead mt-3">Loading...</p>
          ) : (
            <p className="lead mt-3">{advice}</p>
          )}
          <p>- Me.</p>
          {isLoading ? (
            <button
              onClick={handleClickButton}
              className="btn btn-primary"
              disabled
            >
              <i className="fas fa-sync fa-fw"></i>
            </button>
          ) : (
            <button onClick={handleClickButton} className="btn btn-primary">
              <i className="fas fa-sync fa-fw"></i>
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Advice;
