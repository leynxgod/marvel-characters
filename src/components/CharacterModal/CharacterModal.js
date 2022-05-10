import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import './CharacterModal.scss'
import plug from "../../assets/images/plug-300x450.jpg";

const CharacterModal = (props) => {
    return (
        <div className='character-modal'>
            <div className='character-modal-image'>
                <img src={
                    props.thumbnail.path === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available' ? plug :
                        props.thumbnail.path === 'http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c002e0305708' ? plug :
                            props.thumbnail.extension === 'jpg' ?
                                props.thumbnail.path + '/portrait_uncanny.jpg' :
                                props.thumbnail.extension === 'gif' ?
                                    props.thumbnail.path + '/portrait_uncanny.gif' :
                                    props.thumbnail.extension === 'png' ?
                                        props.thumbnail.path + '/portrait_uncanny.png' : plug
                }
                     alt=""
                />
            </div>
            <div className='character-modal-wrap'>
                <div className='character-modal-name'>
                    {props.name}
                </div>
                <div className='character-modal-description'>
                    Description: {props.description !== '' ? props.description : 'Top Secret'}
                </div>
            </div>
            <div className='character-modal-close'>
                <CloseIcon onClick={() => props.setOpenModal(false)}/>
            </div>
        </div>
    );
};

export default CharacterModal;