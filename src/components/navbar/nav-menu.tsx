
import { ReactNode } from 'react'

import './nav-menu.css'


type NavMenuProps = {
	children: ReactNode
}

export function NavMenu(props: NavMenuProps) {
	return (
		<ul className='nav-menu'>
			{ props.children }
		</ul>
	)
}
