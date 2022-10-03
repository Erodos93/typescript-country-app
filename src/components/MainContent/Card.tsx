import React from "react";
import $ from "jquery";
interface CountyJson {
    name: string,
    population: string,
    region: string,
    capital: string,
    flag: string,
    
}

const CountryCard: React.FC<CountyJson> = ({ name, population, region, capital, flag }) => {
  const openDetail=()=>{
    $(".detail__section")?.removeClass("animate__down").addClass("animate__up");
    $("#homepage").css("display","none");

  }
    
    return <div className="country__card" onClick={openDetail} >
        <header>
            <img src={flag} alt={`${name}-Flag`} className="country__card--img" width="254px" height="160px" />
        </header>
        <div className="country__card--describe">
            <div className="country__card--text">
                <h2>{name}</h2>
                <ul>
                    <li><h3>Population:</h3><span> {population}</span></li>
                    <li><h3>Region:</h3><span> {region}</span></li>
                    <li><h3>Capital:</h3><span> {capital}</span></li>
                </ul>
            </div>

        </div>
    </div>
}

export default CountryCard
