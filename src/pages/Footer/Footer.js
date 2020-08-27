import React from 'react';

import { StyledFooter } from './styled';

import FacebookLogo from './../../images/face.png';

import TwitterLogo from './../../images/ttw.png';

import InstagramLogo from './../../images/insta.png';

export default function Footer(){
    return (
        <StyledFooter>
            <div className="grid-footer">
                <div className="informations-footer">
                    <div className="social-midias">
                        <div className="logo">
                            <img src="https://courier-images-web.imgix.net/static/img/logo-white-text.png?auto=compress,format&fit=max&w=176&h=56&dpr=2&fm=png" alt=""></img>
                        </div>

                        <div className="sociais">
                            <ul>
                                <li>
                                    <a href="https://www.facebook.com/zedeliverydebebidas" target="_blank">
                                        <img src={FacebookLogo} alt="Facebook do Zé"></img>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/ZeDelivery" target="_blank">
                                        <img src={TwitterLogo} alt="Twitter do Zé"></img>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/zedelivery/?hl=pt" target="_blank">
                                        <img src={InstagramLogo} alt="Instagram do Zé"></img>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>


                    <div className="about-us">
                        <ul>
                            <li><strong>Sobre o Zé Delivery</strong></li>
                            <li><a href="#">Me ajuda, Zé!</a></li>
                            <li><a href="#">Trabalhe conosco</a></li>
                            <li><a href="#">Pagamento na Entrega</a></li>
                        </ul>
                    </div>

                    <div className="partners">
                        <ul>
                            <li><strong>Parcerias</strong></li>
                            <li><a href="#">Quero ser parceiro</a></li>
                        </ul>
                    </div>

                    <div className="app-mobile">
                        <ul>
                            <li><strong>Já baixou o aplicativo?</strong></li>
                            <li>
                                <a href="https://play.google.com/store/apps/details?id=com.cerveceriamodelo.modelonow&referrer=af_tranid%3DChAqMx9U5cBKElfRmzUB4Q%26shortlink%3Ddae6576%26pid%3DZé%20Website%26af_channel%3DWebsite%26af_ad%3DFooter%26af_sub1%3DAndroid%26af_web_id%3Df4bd2ee8-aeba-4195-9daf-2ba2cea540fe-p" target="_blank">
                                    <img src="https://courier-images-web.imgix.net/static/img/play_store_badge.png?auto=compress,format&fit=max&w=136&h=40&dpr=2&fm=png" alt="Google Play"></img>
                                </a>
                            </li>
                            <li>
                                <a href="https://apps.apple.com/BR/app/id1070070438?mt=8" target="_blank">
                                    <img src="https://courier-images-web.imgix.net/static/img/apple_store_badge.png?auto=compress,format&fit=max&w=136&h=40&dpr=2&fm=png" alt="App Store"></img>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr></hr>

                <div className="terms-of-use">
                    <div className="terms">
                        <strong><a href="#">Termos de uso</a></strong>
                        <strong><a href="#">Política de privacidade</a></strong>
                    </div>

                    <div className="direitos">
                        <strong>© 2020 Zé Delivery - Todos os direitos reservados.</strong>
                    </div>

                    <div className="concientizacao">
                        <strong>BEBA COM MODERAÇÃO</strong>
                    </div>
                </div>

            </div>
        </StyledFooter>
    )
}