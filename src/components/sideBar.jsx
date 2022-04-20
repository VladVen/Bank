import { BrowserRouter, NavLink } from "react-router-dom"

const Links = () => {
    return(
    <div className='sideBar'>
        <div><h3>Оберіть ваш банк:</h3></div>
    <div><button><NavLink to='/privat'>ПриватБанк</NavLink></button></div>
    <div><button><NavLink to='mono'>МоноБанк</NavLink></button></div>
    <div><button><NavLink to='oshad'>ОщадБанк</NavLink></button></div>
    <div><button><NavLink to='pumb'>ПУМБ</NavLink></button></div>
    </div>
    )
}
export default Links