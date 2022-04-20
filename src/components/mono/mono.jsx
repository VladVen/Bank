import { NavLink } from "react-router-dom"
import React, {useState} from "react"

const Mono = () => {
    let sumElement = React.createRef()
    let sum = () => {
        let sumCredit = sumElement.current.value;
    }
    let timeElement = React.createRef()
    let time = () => {
        let timeCredit = timeElement.current.value;
    }
    const [state, setState] = useState(0)
    return(
        <div className="calc">
            <div>
                Введіть суму: <input type="number" ref = {sumElement} min='1000' max='20000'></input>
            </div>
            <div>
               Кільк. місяців: <input type="number"  ref = {timeElement}  min='1' max='36'></input>
            </div>
            <div>
                Процентна ставка: 10%
            </div>
            <div>
                <button onClick= {() => {
                    const BorrowMoney = Math.round((sumElement.current.value*(10/12)*(1+(10/12))^timeElement.current.value)/(((1+(10/12))^timeElement.current.value)-1)); 
                    setState(BorrowMoney)
                }}>
                Calulate
                </button>
            </div>
            <div>
                Місячний платіж: <output> {state} </output>
            </div>
        </div>
    )
}
export default Mono


