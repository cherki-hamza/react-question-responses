import React from 'react'
import { Langue } from './Langue'
import { useTranslation } from 'react-i18next';
import translate from 'translate';

export const Navbar = () => {
    // Translation
    const { t, i18n } = useTranslation();

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">{t('ch')}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">{t('home')}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">{t('about')}</a>
                            </li>


                        </ul>
                        {/*  <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder={t('search')} aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">{t('search')}</button>
                        </form> */}
                        <ul className="navbar-nav mx-5 mb-2">
                            <Langue />
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
