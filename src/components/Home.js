import React, { useState, useEffect } from 'react'
import PlayerIndex from "./players/PlayerIndex"

const Home = (props) => {
	const { msgAlert } = props

	return (
		<div className='container-md'>
			<h2>All the players</h2>
			<PlayerIndex msgAlert={msgAlert}/>
		</div>
	)
}

export default Home