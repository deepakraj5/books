import React, { useState, useEffect } from 'react'
import { Card } from 'semantic-ui-react'
import BooksCard from './BooksCard';
import { Dimmer, Loader } from 'semantic-ui-react'


const Books = () => {


    const [loading, setLoading] = useState(true)
    const [booksList, setBooksList] = useState([])

    const dummyBooksData = [
        { _id: 1, name: 'something', publishDate: '10-07-2021', description: 'something desc', price: 250 },
        { _id: 2, name: 'something', publishDate: '10-07-2021', description: 'something desc', price: 250 },
        { _id: 3, name: 'something', publishDate: '10-07-2021', description: 'something desc', price: 250 },
        { _id: 4, name: 'something', publishDate: '10-07-2021', description: 'something desc', price: 250 },
        { _id: 5, name: 'something', publishDate: '10-07-2021', description: 'something desc', price: 250 },
        { _id: 6, name: 'something', publishDate: '10-07-2021', description: 'something desc', price: 250 },
        { _id: 7, name: 'something', publishDate: '10-07-2021', description: 'something desc', price: 250 },
        { _id: 8, name: 'something', publishDate: '10-07-2021', description: 'something desc', price: 250 },
        { _id: 9, name: 'something', publishDate: '10-07-2021', description: 'something desc', price: 250 },
        { _id: 10, name: 'something', publishDate: '10-07-2021', description: 'something desc', price: 250 },
    ]

    useEffect(() => {

        setTimeout(() => {
            setBooksList(dummyBooksData)
            setLoading(false)
        }, 4000)

    }, [])


    return (
        <div>

            <Card.Group>

                {booksList.map((book) => (
                    <BooksCard index={book._id} book={book} />
                ))}

                <Dimmer active={loading} inverted>
                    <Loader inverted content='Loading' />
                </Dimmer>

            </Card.Group>

        </div>
    );
}


export default Books