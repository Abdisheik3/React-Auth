import React, { useState } from 'react' 
import { playerCreate } from '../../api/player'

const PlayerCreate = ({ user, msgAlert }) => {

    const defaultPlayer = {
        name: '',
        position: ''
    }

    const [player, setPlayer] = useState(defaultPlayer)

    const handleChange = (event) => {
        // to keep the values as users input info 
        // first spread the current player
        // then comma and modify the key to the value you need
        setPlayer({...player, [event.target.name]: event.target.value})
    }

    const handleCreatePlayer = () => {
        playerCreate(player, user)
        .then(() => {
            msgAlert({
                heading: 'Success',
                message: 'Create Player',
                variant: 'success'
            })
        })
        .catch((error) => {
            msgAlert({
                heading: 'Failure',
                message: 'Create Player Failure' + error,
                variant: 'danger'
            })
        })
    }

    return (
			<>
            <h2>Name</h2>
				<input
					type='text'
					value={player.name}
					name='name'
					onChange={handleChange}
				/>
            <h2>Position</h2>
				<input
					type='text'
					value={player.position}
					name='position'
					onChange={handleChange}
				/>
				<button onClick={handleCreatePlayer}>Create Player</button>
			</>
		)
}

export default PlayerCreate