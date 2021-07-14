import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'


const BooksCard = ({ index, book }) => {
    return (
            
            <Card key={index}>
                <Image src='https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1356&h=668&fit=crop' wrapped ui={false} width={20} height={15} />
                <Card.Content>
                    <Card.Header>{book.name}</Card.Header>
                    <Card.Meta>
                        <span className='date'>{book.publishDate}</span>
                    </Card.Meta>
                    <Card.Description>
                        {book.description}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                        <Icon name='dollar' />
                        {book.price}
                </Card.Content>
            </Card>

    );
}


export default BooksCard