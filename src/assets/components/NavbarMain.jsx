import { React, useContext } from 'react'
import { NavLink } from 'react-router-dom';
import MyContext from '../../MyContext';

function NavbarMain() {
    const setActiveClass = ({ isActive }) => (isActive ? "active" : "inactive")
    const { setMonsterSelected } = useContext(MyContext)

    return (
        <div className='bg-dark text-white p-5 d-flex justify-content-around align-items-center flex-wrap'>
            <div>
                <h1>Ragnarok Online API</h1>
            </div>
            <div className='d-flex fs-5'>
                <div className='mx-1'>
                    <NavLink className={setActiveClass} to="/home">Home</NavLink>
                </div>
                <div className='mx-1'>
                    <NavLink className={setActiveClass} to="/monsters">Monsters</NavLink>
                </div>
            </div>
        </div>
    )
}

export default NavbarMain