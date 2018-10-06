import React from 'react';
import { Header, Image, Grid } from 'semantic-ui-react'

export const UserDetail = (props) =>
    {
        return (
            <div className="content">
                <Grid>
                    <Grid.Column width={4}>
                        <Image circular src={props.user.general.avatar} />
                    </Grid.Column>
                    <Grid.Column width={9}>
                        <div className="full-info">
                            <p className="name">
                                <Header as='h1'>{props.user.general.firstName} {props.user.general.lastName}</Header>
                            </p>
                            <p className="job">
                                <Header as='h3'>{props.user.job.company} - {props.user.job.title}</Header>
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
                    </Grid.Column>
                </Grid>
            </div>
        )
    };
