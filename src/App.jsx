import { Col, Container, Dropdown, Row } from 'react-bootstrap'
import FormInput from './components/FormInput';
import QaList from './components/QaList'
import { useState } from 'react';
import { questions } from './data';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Langue } from './components/Langue';
import { Navbar } from './components/Navbar';
import { useTranslation } from 'react-i18next';
import translate from 'translate';


const App = () => {
  // Translation
  const { t, i18n } = useTranslation();

  // translate function
  const trans = async (world) => {

    try {
      let trans = await translate(world, 'ar');
      console.log(trans);
    } catch (error) {
      console.debug(error);
    }

  };


  // define the state
  const [data, setData] = useState(questions);
  // add new item
  const addItem = () => {
    localStorage.setItem("items", JSON.stringify([...questions]));
    setData([...questions]);
    notify(t('added_successfully'), "Success");

  }
  // delete all items from questions
  const deleteAllItems = () => {
    localStorage.removeItem("items");
    const deleted_item = questions.splice(0, questions.length);
    setData([]);
    if (deleted_item) {
      notify(t('all_have_been_deleted_successfully'), "Error");
    }

  }
  // delete one item from questions
  const deleteOneItem = (items) => {
    localStorage.setItem("items", JSON.stringify([...items]));
    setData([...items]);
    notify(t('question_has_been_deleted_successfully'), "Error")
    /* if (items.length <= 0) {
      deleteAllItems();
    } */
  }

  // posh message notification
  const notify = (message, type) => {

    if (type === "Error")
      toast.error(message);
    else if (type === "Success")
      toast.success(message);

  };




  return (
    <div className="font text-center color-body">

      <Container className='p-5'>

        <Navbar />

      </Container>
      <Container className='p-5'>

        <Row className="justify-content-center">
          <Col sm="4">
            <div className='fs-3 text-center py-3'>
              {t('common_questions_and_answers')}
            </div>
          </Col>
          <Col sm="8">
            <FormInput onAdd={addItem} notify={notify} />
            <QaList data={data} deleteOneItem={deleteOneItem} />
            {
              localStorage.getItem("items") != null ? (<button onClick={deleteAllItems} className="btn-color w-100 my-3"> {t('clear_all')}</button>) : ''
            }
          </Col>
        </Row>
        <ToastContainer />
      </Container>
      <Container className=''>
        <span dir='ltr' className='cherki_hamza_fotter '>{t('make_with_Love')}<a className='link' target="_blank" href='http://hamzacherki.com'>👨🏻‍💻 {t('ch')} 🧡</a></span>
      </Container>
    </div>
  )

}

export default App
