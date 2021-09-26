import React from "react"
import { NavLink } from 'react-router-dom';
import Dashtable from "./Dashtable";
const Dashboard1 = () => {

    return (
        <>
            <main className="main">
                <aside className="sidebar">
                    <nav className="nav">
                        <ul>
                            <li className="active">

                                <NavLink to="/dashboard1" >Dashboard1</NavLink>
                            </li>
                            <li>

                                <NavLink to="/dashboard2" >Dashboard2</NavLink>
                            </li>
                        </ul>
                    </nav>
                </aside>

                <section className="twitter">
                    <div className="container">

                        <Dashtable />

                    </div>
                </section>
            </main>
        </>)
}
export default Dashboard1;