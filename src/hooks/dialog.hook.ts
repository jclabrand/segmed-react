
import { RefObject, useEffect, useRef } from 'react'


export function useDialog(open: boolean): [RefObject<HTMLDialogElement>] {
	const ref = useRef<HTMLDialogElement>(null)

	useEffect(() => {
		if (!ref.current) return

		if (open)
			ref.current.showModal()
		else
			ref.current.close()
	}, [open, ref])

	return [ ref ]
}
