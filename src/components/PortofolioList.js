import React, { useEffect, useState } from "react";
import PortofolioCard from "./PortofolioCard";

const PortofolioList = () => {
  const [portoList, setPortoList] = useState([]);

  async function fetchData() {
    try {
      const result = await fetch(
        "https://api.jsonbin.io/b/5f3833874d9399103615755f/2"
      );
      const { portolist } = await result.json();
      console.log(portolist);
      setPortoList(portolist);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <section className="page-section portfolio" id="portfolio">
        <div className="container">
          <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
            Portfolio
          </h2>
          <div className="divider-custom">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon">
              <i className="fas fa-star"></i>
            </div>
            <div className="divider-custom-line"></div>
          </div>
          <div className="row">
            {portoList.map((e, i) => {
              return <PortofolioCard key={i} data={e} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default PortofolioList;
