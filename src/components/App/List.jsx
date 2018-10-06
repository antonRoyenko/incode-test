import React from 'react';

export const List = (props) => {
    if (props.users.length !== 0) {
        console.log(props.users);
        return (
            <ul>
                {props.users.map((item, key) => (
                    <li key={key} onClick={() => props.setActive(item.user.id)}>
                            <img src={item.user.general.avatar} alt=""/>
                            <div className="info">
                                <p className="name">
                                    {item.user.general.firstName} {item.user.general.lastName}
                                </p>
                                <p className="job">
                                    {item.user.job.title} - {item.user.job.company}
                                </p>

                            </div>
                        </li>
                    )
                )}
            </ul>
        )
    } else {
        return (
            <ul>
            </ul>
        )
    }

};
