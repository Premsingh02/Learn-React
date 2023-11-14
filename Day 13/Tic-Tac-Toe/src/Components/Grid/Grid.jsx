import Card from "../Card/Card";
import './Grid.css'

export default function Grid({numberOfCards}) {
    return (
        <div className="grid">
        {Array(numberOfCards).fill(<Card/>).map((el,idx) => {
            return <Card key={idx}/>
        })}
        
        </div>
    )
}