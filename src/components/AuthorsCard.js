import React from 'react'
import { Card } from 'semantic-ui-react'

const AuthorsCard = ({ src, author }) => {
    return (
        <Card raised image={src} />
    );
}


export default AuthorsCard