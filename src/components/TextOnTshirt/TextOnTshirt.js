import React, { useState } from 'react';
import Draggable from 'react-draggable';
import { useForm } from 'react-hook-form';
import Modal from 'react-modal';
import TShirt from '../../img/tshirt.png';
import './TextOnTshirt.css';


const TStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

const TextOnTtShirt = () => {

    const [text, setText] = useState('');
    const { register, handleSubmit, errors } = useForm();
    const [cross, setCross] = useState(false);

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const onSubmit = data => {
        setText(data.text)
    };

    const displayCross = () => {
        setCross(true);
    }

    return (
        <div>
             <section className="custom-page  page-section">
            <div className="max-width">                
                <div className="tShirt-content">
                    <img className="tShirt" src={TShirt} alt="" />
                    <div>
                        <Modal
                            isOpen={modalIsOpen}
                            onRequestClose={closeModal}
                            style={TStyles}
                            contentLabel="Example Modal"

                        >

                            <h5 className="text-cyan text-center">Write some text</h5>

                            <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group">
                                    <input type="text" ref={register({ required: true })} name="text" placeholder="Write some text" className="form-control" />
                                    {errors.text && <span className="text-danger">This field is required</span>}

                                </div>

                                <div className="form-group d-flex justify-content-between">
                                    <button type="submit" className="btn btn-success">Submit</button>
                                    <button type="submit" className="btn btn-secondary" onClick={closeModal}>Close</button>
                                </div>
                            </form>
                        </Modal>
                    </div>
                    <Draggable>
                        <div className="drag-box">
                            <div onClick={displayCross}>{text}</div>
                            {cross && <span onClick={() => { setText(''); setCross(false) }}> X</span>}
                        </div>
                    </Draggable>
                </div>

                    <h2 className="title text-center">Write Some Text On T-Shirt</h2>
                    <button className="btn btn-danger btnWrite" onClick={openModal} >Write</button>
              
            </div>
        </section>
        </div>
    );
};

export default TextOnTtShirt;