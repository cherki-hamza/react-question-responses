import React, { useState } from 'react'
import { Row, Form, Button, Col } from 'react-bootstrap'
import { questions } from '../data';
import { useTranslation } from 'react-i18next';


const FormInput = ({ onAdd, notify }) => {

    // define the states
    const [qu, setQU] = useState('');
    const [an, setAN] = useState('');

    // add new qustion
    const addNewItem = () => {
        if (qu === '' || an === '') {
            notify(t('Please_complete_the_data'), "Error");
            return;
        }

        questions.push({ id: Math.random(), q: qu, a: an });
        setQU('')
        setAN('')
        onAdd();
    }

    // Translation
    const { t, i18n } = useTranslation();

    return (

        <Row className="my-3">
            <Col sm="5">
                <Form.Control value={qu} onChange={(e) => { setQU(e.target.value) }} type="text" placeholder={t('enter_the_question')} />
            </Col>

            <Col sm="5">
                <Form.Control value={an} onChange={(e) => { setAN(e.target.value) }} type="text" placeholder={t(`enter_the_answer`)} />
            </Col>
            <Col sm="2">
                <button onClick={addNewItem} className="btn-color w-100" type="submit">
                    {t('addition')}
                </button>
            </Col>
        </Row>

    )
}

export default FormInput