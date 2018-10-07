import React from 'react';
import { Button, Card, Image } from 'semantic-ui-react';

export const List = (props) => {
    if (props.users[0].user !== 'no data') {
        return (
            <ul>
                {props.users.map((item, key) => (
                    <li key={key} onClick={() => props.setActive(item.user.id)}>
                        <Card>
                            <Card.Content>
                                <Image floated='left' size='mini' src={item.user.general.avatar} />
                                <Card.Header>{item.user.general.firstName} {item.user.general.lastName}</Card.Header>
                                <Card.Meta>{item.user.job.title} - {item.user.job.company}</Card.Meta>
                            </Card.Content>
                            <Card.Content extra>
                                <div className='ui two buttons'>
                                    <Button basic color='grey'>
                                        Detail
                                    </Button>
                                </div>
                            </Card.Content>
                        </Card>
                        </li>
                    )
                )}
            </ul>
        )
    } else {
        return (
            <ul>
                <li>
                    <Card>
                        <Card.Content>
                            <Image floated='left' size='mini' src='https://react.semantic-ui.com/images/avatar/large/steve.jpg' />
                            <Card.Header>Sorry</Card.Header>
                            <Card.Meta>On request {props.request} ... nothing was found. </Card.Meta>
                        </Card.Content>
                    </Card>
                </li>
            </ul>
        )
    }

};
