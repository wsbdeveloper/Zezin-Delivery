import React from 'react'

import { Link } from 'react-router-dom';

import { StyledCategory } from './StyledCategory';

export default function Category() {

    return (
        <>
            <StyledCategory>
                <div className="grid-products">
                    <div className="categories">
                        <Link to={{pathname : "/categoria/cervejas", state : { idProduct : 94}}}>
                            <div className="list-categories">
                                <div className="box-category">
                                    <img src="https://courier-images-frontrelease.imgix.net/category/beer%403x.png?auto=compress,format&fit=max&w=24&h=24&dpr=2&fm=png" alt="Cervejas" />
                                    <strong>Cervejas</strong>
                                </div>
                            </div>
                        </Link>


                        <Link to={{pathname : "/categoria/destilados", state : { idProduct : 95}}}>
                            <div className="list-categories">
                                <div className="box-category">
                                    <img src="https://courier-images-frontrelease.imgix.net/category/distilled%403x.png?auto=compress,format&fit=max&w=24&h=24&dpr=2&fm=png" alt="Destilados" />
                                    <strong>Destilados</strong>
                                </div>
                            </div>
                        </Link>

                        <Link to={{pathname : "/categoria/vinhos", state : { idProduct : 92}}}>
                            <div className="list-categories">
                                <div className="box-category">
                                    <img src="https://courier-images-frontrelease.imgix.net/category/wine%403x.png?auto=compress,format&fit=max&w=24&h=24&dpr=2&fm=png" alt="Vinhos" />
                                    <strong>Vinhos</strong>
                                </div>
                            </div>
                        </Link>

                        <Link to={{pathname : "/categoria/sem-alcool", state : { idProduct : 96}}}>
                            <div className="list-categories">
                                <div className="box-category">
                                    <img src="https://courier-images-frontrelease.imgix.net/category/juice%403x.png?auto=compress,format&fit=max&w=24&h=24&dpr=2&fm=png" alt="Sem Álcool" />
                                    <strong>Sem Álcool</strong>
                                </div>
                            </div>
                        </Link>

                        <Link to={{pathname : "/categoria/petiscos", state : { idProduct : 97}}}>
                            <div className="list-categories">
                                <div className="box-category">
                                    <img src="https://courier-images-frontrelease.imgix.net/category/chips%403x.png?auto=compress,format&fit=max&w=24&h=24&dpr=2&fm=png" alt="Petiscos" />
                                    <strong>Petiscos</strong>
                                </div>
                            </div>
                        </Link>

                        <Link to={{pathname : "/categoria/petiscos", state : { idProduct : 98}}}>
                            <div className="list-categories">
                                <div className="box-category">
                                    <img src="https://courier-images-prod.imgix.net/category/others%403x.png?auto=compress,format&fit=max&w=48&h=48&dpr=2&fm=png" alt="Outros" />
                                    <strong>Outros</strong>
                                </div>
                            </div>
                        </Link>
                    </div>  
                </div>
            </StyledCategory>
        </>
    )
}
