import React from 'react';

export const UserDetail = (props) =>
    {
        return (
            <main>
                <div className="image">
                    <img src={props.user.general.avatar} alt=""/>
                </div>
                <div className="full-info">
                    <p className="name">
                        {props.user.general.firstName} {props.user.general.lastName}
                    </p>
                    <p className="job">
                        {props.user.job.company} - {props.user.job.title}
                    </p>
                    <p className="job">
                        {props.user.contact.email} {props.user.contact.phone}
                    </p>
                    <div className="address">
                        <p>{props.user.address.street}</p>
                        <p>{props.user.address.city}</p>
                        <p>{props.user.address.zipCode}</p>
                        <p>{props.user.address.country}</p>
                    </div>
                </div>
            </main>
        )
    };
