
import { ReactNode } from 'react'


type NavActionProps = {
	children?:	ReactNode,
	text?:		string,
	action:		() => void
}

export function NavAction(props: NavActionProps) {
	const { action, children, text} = props

	return (
		<li>
			<a className='nav-link' onClick={ action }>
				{ children }
				<span>{ text }</span>
			</a>
		</li>
	)
}
