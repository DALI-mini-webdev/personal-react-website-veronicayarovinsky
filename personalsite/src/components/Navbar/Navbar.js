import React, { Component } from 'react';
import { MenuItems } from "./MenuItems"
import { Button } from "../Button"
import './Navbar.css'

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })

    }

    // changePage = (page) => {
    //     props.changeCurrPage(page)
    //  }

    render() {

        const Navbar = (props) => {

            const displayComponent1 = () =>{
                props.changeCurrPage(1)
            }
    
            const displayComponent2 = () =>{
                props.changeCurrPage(2)
            }
        }

        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Veronica<i className="fab fa-react"></i></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>


                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                    return(
                            <li key = {index}>
                                <div onClick = {() => {this.changePage(item.app)}}> {item.app} </div>
                            </li>
                            <li key = {index}>
                                <div onClick = {() => {this.changePage(item.page2)}}> {item.page2} </div>
                            </li>
                            <li key = {index}>
                                <div onClick = {() => {this.changePage(item.page3)}}> {item.page3} </div>
                            </li>
                            );  

                                    </a>
                            </li>

                        )

                    })}
                </ul>
            </nav>
        )
    }

}

export default Navbar