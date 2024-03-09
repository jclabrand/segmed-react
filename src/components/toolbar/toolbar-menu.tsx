
import { ReactNode } from 'react'


type ToolBarMenuProps = {
	children: ReactNode
}

export function ToolBarMenu(props: ToolBarMenuProps) {
	return (
		<ul className="toolbar-menu">
			{ props.children }
		</ul>
	)
}
