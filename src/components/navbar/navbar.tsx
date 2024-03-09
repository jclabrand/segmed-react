
import { ReactNode } from 'react'

import './navbar.css'
import './nav-user.css'

type NavBarProps = {
	children: ReactNode
}

export function NavBar(props: NavBarProps) {
	return (
		<nav>
			<div className='navbar' role='nav'>
				{ props.children }
			</div>
		</nav>
	)
}
