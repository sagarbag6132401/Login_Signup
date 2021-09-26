import React from 'react';
import { NavLink } from 'react-router-dom';
import './Homepage.css'
const Homepage = () => {
    return <>

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
                    <h2>Dashboard1: Name & Age Table</h2><br />
                    <h2>Dashboard2: Semester Result Graph</h2>

                </div>
            </section>
        </main>
    </>
}
export default Homepage;