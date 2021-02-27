import React from 'react';
import './User.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope, faCalendarAlt, faMapMarkedAlt, faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons'

const User = (props) => {
    //distructring
    const {name, email,picture} = props.user;
    return (
        <div className="card">
            <div className="details">
                <div className="user_photo horizontal_center">
                    <a href="" className="refresh">New</a>
                    <img src={picture.large} alt=""/>
                </div>
                <p id="user_title">My name is {name.first}</p>
                <p id="user_value">{email}</p>
            </div>
            <ul className="values_list horizontal_center">
                <li><FontAwesomeIcon icon={faUser} /></li>
                <li><FontAwesomeIcon icon={faEnvelope} /></li>
                <li><FontAwesomeIcon icon={faCalendarAlt} /></li>
                <li><FontAwesomeIcon icon={faMapMarkedAlt} /></li>
                <li><FontAwesomeIcon icon={faPhoneSquareAlt} /></li>
            </ul>
        </div>
    );
};

export default User;