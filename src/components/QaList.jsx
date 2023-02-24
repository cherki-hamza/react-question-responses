import React from 'react'
import { Row, Accordion } from 'react-bootstrap';
import { questions } from '../data';
import { useTranslation } from 'react-i18next';

const qaList = ({ data, deleteOneItem }) => {

    // Translation
    const { t, i18n } = useTranslation();

    const dataLocales = JSON.parse(localStorage.getItem("items"));
    // delete one item from array
    const onDeleteItem = (ID) => {
        if (localStorage.getItem("items") != null) {
            const index = questions.findIndex((item) => item.id === ID);
            questions.splice(index, 1);
            deleteOneItem(questions);
        }
    }

    return (
        <Row className="root my-3">
            <Accordion className='sub_menu'>

                {
                    localStorage.getItem("items") != null ? (dataLocales.map((item, index) => {
                        return (<Accordion.Item key={index} eventKey={item.id}>
                            <Accordion.Header>
                                <div className="m-auto">{item.q}</div>

                            </Accordion.Header>
                            <Accordion.Body className="text-end">
                                <div className="px-3 d-inline ">{item.a}</div>
                                <button onClick={() => onDeleteItem(item.id)} className="btn-color">{t('remove')}</button>
                            </Accordion.Body>
                        </Accordion.Item>)
                    })) :
                        (<h2 className='fs-4 text-center text-success p-5'>{t('oops_no_data_found')}</h2>)
                }

            </Accordion>
        </Row>
    )
}

export default qaList