import Icon from "../Icon/Icon"
import './Card.css';

export default function Card({iconName}) {
    return(
        <div className="card">
            
            <Icon name={iconName}/>

        </div>
    )
}