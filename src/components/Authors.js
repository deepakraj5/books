import React, { useState, useEffect } from 'react'
import { Card, Dimmer, Loader } from 'semantic-ui-react'
import AuthorsCard from './AuthorsCard';


const src = 'https://previews.123rf.com/images/aquir/aquir1311/aquir131100316/23569861-sample-grunge-red-round-stamp.jpg'


const Authors = () => {

  const [loading, setLoading] = useState(true)
  const [authorsList, setAuthorsList] = useState([])

  const dummyAuthorsData = [
    { _id: 1, name: 'sample', age: 20 },
    { _id: 2, name: 'sample', age: 20 },
    { _id: 3, name: 'sample', age: 20 },
    { _id: 4, name: 'sample', age: 20 },
    { _id: 5, name: 'sample', age: 20 },
    { _id: 6, name: 'sample', age: 20 },
    { _id: 7, name: 'sample', age: 20 },
    { _id: 8, name: 'sample', age: 20 },
    { _id: 9, name: 'sample', age: 20 },
    { _id: 10, name: 'sample', age: 20 },
  ]


  useEffect(() => {

    setTimeout(() => {
      setAuthorsList(dummyAuthorsData)
        setLoading(false)
    }, 4000)

  }, [])


  return (
    <div>

      <Card.Group itemsPerRow={6}>

          {authorsList.map(author => (
            <AuthorsCard author={author} src={src} />
          ))}

        <Dimmer active={loading} inverted>
            <Loader inverted content='Loading' />
        </Dimmer>

      </Card.Group>

    </div>
  );
}


export default Authors