import React, { useContext } from "react"
import shareContext from "../../context/ShareDataContext"
import { renderItemList } from "../../function/renderFunction"
import arrowLeft from "../../images/arrow-thin-left.svg"
import $ from "jquery";
interface DetailSelect {
    selector: object | object[],
    stateColor:boolean
}
const DetailPage: React.FC<DetailSelect> = ({ selector,stateColor }) => {
    const loadSelectData = (key: string) => {
        const context = useContext(shareContext)
        const contextValue: string | object | undefined = context?.selectCard?.[key as keyof object]
        return contextValue
    }
    const borders = loadSelectData("borders")
    const closeDetail=()=>{
        $(".detail__section").removeClass("animate__up").addClass("animate__down");
        $("#homepage").css("display","block");
    
      }
    return <section className="detail__section">
        <div>

            <a href="#" className="button__back" onClick={closeDetail}>
                <img src={arrowLeft} alt="Arrow Left" id='arrow-back' />
                Back
            </a>
        </div>
        <div className="info__box flex__container">
            <div className="flag__box">
                <img src={loadSelectData("flags") ?? ""} alt={`${loadSelectData("name")}-Flag`} className="flag__img" />
            </div>
            <div className="info__desc">
                <header>
                    <h2>{loadSelectData("name")}</h2>
                </header>
                <div className="flex__container info__list">

                <ul className="info__list--1">
                    <li><h3>Native Name:</h3> <span>{loadSelectData("nativeName")}</span></li>
                    <li><h3>Population:</h3>  <span>{loadSelectData("population")}</span></li>
                    <li><h3>Region:</h3>  <span>{loadSelectData("region")}</span></li>
                    <li><h3>Sub Region:</h3>  <span>{loadSelectData("subregion")}</span></li>
                    <li><h3>Capital:</h3> <span> {loadSelectData("capital")}</span></li>
                    <hr />
                </ul>
                <ul className="info__list--2">
                    <li><h3>Top Level Domain:</h3>  <span>{loadSelectData("topLevelDomain")}</span></li>
                    <li><h3>Currencies:</h3>  <span>{loadSelectData("currencies")}</span></li>
                    <li><h3>Languages:</h3>  <span>{loadSelectData("languages")}</span></li>
                </ul>
                </div>
                <hr />
                <ul className="flexbox__border--list">
                    <li>
                        <h3 className="info__list--header">Border Countries:</h3>
                    </li>
                    <li>
                        <ul className="info__list--border">
                            {renderItemList(borders, selector,stateColor)}
                        </ul>
                    </li>
                </ul>

            </div>
        </div>
    </section >
}
export default DetailPage;