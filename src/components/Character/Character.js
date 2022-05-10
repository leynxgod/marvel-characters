import React, {useState} from 'react';
import {Modal} from "@mui/material";
import './Character.scss'
import CharacterModal from "../CharacterModal/CharacterModal";
import plug from '../../assets/images/plug-168x252.jpg'

const Character = (props) => {

    const [openModal, setOpenModal] = useState(false)

    const handleCloseModal = () => setOpenModal(false)

    return (
        <div className='character'>
            <div className='character-wrap' onClick={() => setOpenModal(true)}>
                <div className='character-image'>
                    <img src={
                        props.thumbnail.path === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available' ? plug :
                            props.thumbnail.path === 'http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c002e0305708' ? plug :
                                props.thumbnail.extension === 'jpg' ?
                                    props.thumbnail.path + '/portrait_fantastic.jpg' :
                                    props.thumbnail.extension === 'gif' ?
                                        props.thumbnail.path + '/portrait_fantastic.gif' :
                                        props.thumbnail.extension === 'png' ?
                                            props.thumbnail.path + '/portrait_fantastic.png' : plug
                    }
                         alt=""
                    />
                </div>
                <div className='character-border'/>
                <div className='character-name'>
                    <span>{props.name}</span>
                </div>
            </div>
            <Modal
                open={openModal}
                onClose={handleCloseModal}
            >
                <>
                    <CharacterModal
                        name = {props.name}
                        thumbnail = {props.thumbnail}
                        description = {props.description}
                        setOpenModal = {setOpenModal}
                    />
                </>
            </Modal>
        </div>
    );
};

export default Character;