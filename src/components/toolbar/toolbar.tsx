
import { ReactNode } from 'react'

import './toolbar.css'


type ToolBarProps = {
	children: ReactNode
}

export function ToolBar(props: ToolBarProps) {
	return (
		<div className="toolbar">
			{ props.children }
		</div>
	)
}
