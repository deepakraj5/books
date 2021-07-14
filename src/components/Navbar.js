import React, { useState } from 'react'
import { Segment, Menu } from 'semantic-ui-react'
import '../styles/style.css'
import { useHistory } from 'react-router-dom'


const Navbar = () => {

    const history = useHistory()

    const [active, setActive] = useState('books')

    const handleItemClick = (e, { name }) => {
        setActive(name)
        switch(name) {
            case 'books': history.push('/books')
                            break
            case 'authors': history.push('/authors')
                            break
            case 'profile': history.push('/profile')
                            break
            case 'settings': history.push('/settings')
                            break
            default: history.push('/')
        }
    }


    return (
        <div className="navbar">

            <Segment inverted>
                <Menu inverted pointing secondary>
                <Menu.Item
                    name='books'
                    active={active === 'books'}
                    onClick={handleItemClick}
                />
                <Menu.Item
                    name='authors'
                    active={active === 'authors'}
                    onClick={handleItemClick}
                />
                <Menu.Item
                    name='profile'
                    active={active === 'profile'}
                    onClick={handleItemClick}
                />
                <Menu.Item
                    name='settings'
                    active={active === 'settings'}
                    onClick={handleItemClick}
                />
                </Menu>
            </Segment>

        </div>
    );
}


export default Navbar