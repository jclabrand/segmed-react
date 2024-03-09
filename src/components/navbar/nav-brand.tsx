
import { ReactNode } from 'react'

import './nav-brand.css'


type NavBrandProps = {
	children: ReactNode
}

export function NavBrand(props: NavBrandProps) {
	return (
		<li>
			<div className='nav-brand'>
				{ props.children }
			</div>
		</li>
	)
}
