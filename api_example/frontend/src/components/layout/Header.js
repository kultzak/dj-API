import React, { Component } from 'react'
import './Header.css'

export class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <a className="navbar-brand" href="#">Palavras Cruzadas</a>
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    </ul>
                    <ul className="navbar-nav my-2 my-lg-0">
                    <div className="dropdown">
                        <button className="btn btn-outline dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Revelar
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                            <button className="dropdown-item" type="button">Célula</button>
                            <button className="dropdown-item" type="button">Tabuleiro</button>
                        </div>
                    </div>

                    <div className="dropdown">
                        <button className="btn btn-outline dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Limpar
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                            <button className="dropdown-item" type="button">Palavra</button>
                            <button className="dropdown-item" type="button">Tabuleiro</button>
                        </div>
                    </div>
                        {/* <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Revelar</button> */}
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Header
