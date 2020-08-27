import React from 'react';

import { StyledHeader } from './styled';

import { Link } from 'react-router-dom';

import LogoZezin from './../../images/logo.png';

import FindIcon from './../../images/find.png';

export default function Header(props){

    return (
        <StyledHeader>
            <div className="grid-header">
                <header>
                    <Link to="/produtos">
                        <div className="logo">
                            <img 
                                src={LogoZezin}
                                alt="Logo Zezin" 
                            />
                        </div>
                    </Link>
                    

                    {
                        window.location.pathname !== "/" ?
                        (
                            <>
                                <div className="find-products">
                                    <img src={FindIcon} alt="Find"></img>
                                    <input 
                                        type="text"
                                        placeholder="Pesquise suas bebidas favoritas"
                                    />
                                </div>
                            </>
                        ) : <span></span>
                    }
                    


                    <div className="login">
                        <button className="btn-login">Login</button>
                    </div>
                </header>
            </div>
        </StyledHeader>
    )
}