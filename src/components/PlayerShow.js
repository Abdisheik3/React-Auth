import React, { useEffect, useState } from 'react' 
import { useParams, useNavigate } from 'react-router-dom'
import { playerDelete, playerShow, playerUpdate } from '../api/player'
import PlayerUpdate from './PlayerUpdate'

const PlayerShow = ({ user, msgAlert }) => {

    const [player, setPlayer] = useState({})
    const [isUpdateShown, setIsUpdateShown] = useState(false)
    const [deleted, setDeleted] = useState(false)

    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        playerShow(user, id)
        .then((res) => {
            setPlayer(res.data.player)
        })
        .catch((error) => {
            msgAlert({
                heading: 'Failure',
                message: 'Show Player Failure' + error,
                variant: 'danger'
            })
        })
    }, [user, msgAlert, id])

    const toggleShowUpdate = () => {
        setIsUpdateShown(prevUpdateShown => !prevUpdateShown)
    }

    const handleChange = (event) => {
        // to keep the values as users input info 
        // first spread the current player
        // then comma and modify the key to the value you need
        setPlayer({...player, [event.target.name]: event.target.value})
    }

    const handleUpdatePlayer = () => {
        playerUpdate(player, user, id)
        .then(() => {
            msgAlert({
                heading: 'Success',
                message: 'Updating Player',
                variant: 'success'
            })
        })
        .catch((error) => {
            msgAlert({
                heading: 'Failure',
                message: 'Update Player Failure' + error,
                variant: 'danger'
            })
        })
    }

    const handleDeletePlayer = () => {
        playerDelete(user, id)
        .then(() => {
            setDeleted(true)
            msgAlert({
                heading: 'Success',
                message: 'Deleting a Player',
                variant: 'success'
            })
            
        })
        .catch((error) => {
            msgAlert({
                heading: 'Failure',
                message: 'Deleting a Player Failure' + error,
                variant: 'danger'
            })
        })
    }

    // logical &&
    // both sides of this check NEED to be truthy values = true
    // logical ||
    // only one side of this check needs to be truthy = true

    // oneliner
    if (deleted) navigate('/players')
    // if (deleted) {
    //     navigate('/Players')
    // }

    return (
			<>
				<h3>Name: {player.name}</h3>
				<p>Position: {player.position}</p>
				<button onClick={toggleShowUpdate}>Toggle Update</button>
				{isUpdateShown && (
					<PlayerUpdate
						player={player}
						handleChange={handleChange}
						handleUpdatePlayer={handleUpdatePlayer}
					/>
				)}
                <button onClick={handleDeletePlayer} >Delete</button>
			</>
		)
}

export default PlayerShow