import "./Product.css";
import Price from "./Price";

export default function Product({title,idx}) {
    let oldPrices = ["12,499", "11,900", "1,999", "599" ];
    let newPrices = ["8,999", "9,199", "899", "279"];
    let description = [
        ["8,000 DPI","5 Programmable buttons"], 
        ["intuitive surface","designed for iPad Pro"], 
        ["designed for iPad Pro", "intuitive surface"], 
        ["wireless", "optical orientation"],
    ];
    return (
        <>
            <div className="Product">
                <h4>{title}</h4>
                <p>{description[idx][0]}</p>
                <p>{description[idx][1]}</p>
                <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
            </div>
        </>
    )
}