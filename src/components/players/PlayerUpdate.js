import React from 'react'

const PlayerUpdate = ({ player, handleChange, handleUpdatePlayer }) => {
	return (
		<>
			<input 
            type='text' 
            value={player.name} 
            name='name' 
            onChange={handleChange} 
            />
			<input 
            type='text' 
            value={player.position} 
            name='position' 
            onChange={handleChange} 
            />
			<button onClick={handleUpdatePlayer}>Update player</button>
		</>
	)
}

export default PlayerUpdate