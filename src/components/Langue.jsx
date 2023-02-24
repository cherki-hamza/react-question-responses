import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';

export const Langue = () => {

    const data = [
        { id: 0, code: 'ar', label: "Arabic" },
        { id: 1, code: 'en', label: "English" },
        { id: 2, code: 'fr', label: "Frensh" }
    ];

    // Translation
    const { t, i18n } = useTranslation();


    const [isOpen, setOpen] = useState(false);
    const [items, setItem] = useState(data);
    const [selectedItem, setSelectedItem] = useState(null);

    const toggleDropdown = () => setOpen(!isOpen);

    const handleItemClick = (id) => {
        selectedItem == id ? setSelectedItem(null) : setSelectedItem(id);
        localStorage.setItem('lang', data[id].label);
        i18n.changeLanguage(data[id].code);
        //setOpen(false);
    }

    const handleIcon = (icon) => {
        switch (icon) {
            case 'English':
                return "us"
            case 'Frensh':
                return "fr"
            default:
                return "ar"
        }
    }

    const handledefaultIcon = () => {
        const lang = localStorage.getItem('lang');
        switch (lang) {
            case 'English':
                return "us"
            case 'Frensh':
                return "fr"
            case 'Arabic':
                return "ar"
            default:
                return 'un'
        }
    }


    return (
        <div className='dropdown'>

            <li className="nav-item dropdown">

                <a className="nav-link dropdown-toggle" onClick={toggleDropdown} id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className={`mx-2 flag-icon flag-icon-${handledefaultIcon()} ${isOpen && "open"} `} ></i>
                    {selectedItem ? items.find(item => item.id == selectedItem).label : "Select Langue"}
                </a>

                <ul className="dropdown-menu" aria-labelledby="navbarDropdown" >
                    {items.map(item => (
                        <li key={item.id}><a className="dropdown-item" onClick={e => handleItemClick(e.target.id)} id={item.id}>
                            <span /* onClick={() => { i18n.changeLanguage(item.code) }} */ className={`mx-3 flag-icon flag-icon-${handleIcon(item.label)}`}></span>
                            <span /* onClick={() => { i18n.changeLanguage(item.code) }} */ className={`dropdown-item-dot ${item.id == selectedItem && 'selected'}`}>• </span>
                            {item.label}
                        </a></li>
                    ))}
                </ul>

            </li>

        </div>
    )
}



{/* <div className='dropdown'>

    <div className='dropdown-header' onClick={toggleDropdown}>
        {selectedItem ? items.find(item => item.id == selectedItem).label : "Select Langue"}
        <i className={`fa fa-chevron-right icon ${isOpen && "open"}`}></i>
    </div>

    <div className={`dropdown-body ${isOpen && 'open'}`}>
        {items.map(item => (
            <div key={item.id} className="dropdown-item" onClick={e => handleItemClick(e.target.id)} id={item.id}>
                <span className={`flag-icon flag-icon-${item.label == 'English' ? 'us' : 'ar'}`}></span>
                <span className={`dropdown-item-dot ${item.id == selectedItem && 'selected'}`}>• </span>
                {item.label}
            </div>
        ))}
    </div>

</div> */}
