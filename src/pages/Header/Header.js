import React from 'react';

import { StyledHeader } from './styled';

import LogoZezin from './../../images/logo.png';

export default function Header(){

    return (
        <StyledHeader>
            <div className="grid-header">
                <header>
                    <div className="logo">
                        <img 
                            src={LogoZezin}
                            alt="Logo Zezin" 
                        />
                    </div>

                    <div className="login">
                        <button className="btn-login">Login</button>
                    </div>
                </header>
            </div>
        </StyledHeader>
    )
}