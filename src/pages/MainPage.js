import React, {useState} from 'react';
import Button from "../components/Button";
import Modal from "../components/modal/Modal";
import Count from "../components/count/Count";
import List from "../components/List";


const MainPage = () => {
    const [show, setShow] = useState(false)
    const [show2, setShow2] = useState(false)
    const [name, setName] = useState('')
    const [inputValue, setInputValue] = useState('')

    const lists = [
        { id: 1, title: 'coding', completed: false },
        { id: 2, title: 'eat', completed: false },
        { id: 3, title: 'sleep', completed: false }
    ];

    const handleInput = (event) => {
        setInputValue(event.target.value);
    }

    const handleShow = (name) => {
        setName(name)
        if (name==='show') setShow(prevState => !prevState)
        if (name==='show2') setShow2(prevState => !prevState)
    }

    return (
        <div>
            inputValue:{inputValue}
            <Button onClick={() => handleShow('show')}>Открыть</Button>
            <Button onClick={() => handleShow('show2')}>Открыть</Button>
            {show && <Modal
                handleShow={handleShow}
                name={name}
                handleInput={handleInput}
            >
                <h1>Hello</h1>
            </Modal>}
            {show2 && <Modal handleShow={handleShow} name={name}>
                <h1>Hello2</h1>
            </Modal>}
            <Count/>
            <List lists={lists} />
        </div>
    );
};

export default MainPage;