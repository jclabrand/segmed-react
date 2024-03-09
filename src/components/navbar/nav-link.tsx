
import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

import './nav-link.css'


type NavLinkProps = {
	children?:	ReactNode,
	text?:		string,
	to:			string
}

export function NavLink(props: NavLinkProps) {
	const { to, text, children } = props

	return (
		<li>
			<Link className={ text ? 'nav-link-text' : 'nav-link' } to={ to }>
				{ children }
				<span>{ text }</span>
			</Link>
		</li>
	)
}
