import React, { useEffect, useState } from 'react' 
import { Link } from 'react-router-dom'
import { playerIndex } from '../api/player'

const PlayerIndex = ({ user, msgAlert }) => {

    const [allPlayers, setAllPlayers] = useState([])

    useEffect(() => {
        playerIndex(user)
        .then(res => {
            setAllPlayers(res.data.players)
        })
        .catch((error) => {
            msgAlert({
                heading: 'Failure',
                message: 'Index Players Failure' + error,
                variant: 'danger'
            })
        })
    }, [ msgAlert, user])

    const allPlayersJSX = allPlayers.map(player => {
        return (
            <Link to={player._id} key={player._id}>
            <li>Name: {player.name} position: {player.position}</li>
            </Link>
        )
    })

    return (
        <>
            <ul>{allPlayersJSX}</ul>
        </>
    )
}

export default PlayerIndex