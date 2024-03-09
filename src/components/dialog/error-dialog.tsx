
import { useEffect, useState } from 'react'
import { Button, Modal } from 'antd'

import { Error } from '../../utils'


type ErrorDialogProps = {
	error:	Error
	onClose?: () => void
}

function useErrorDialog(props: ErrorDialogProps) {
	const [ open, setOpen  ] = useState(false)

	const close = () => {
		setOpen(false)
		props.onClose && props.onClose()
	}

	useEffect(() => {
		setOpen(props.error.has)
	}, [props.error])

	return { open, close }
}

export function ErrorDialog(props: ErrorDialogProps) {
	const { open, close } = useErrorDialog(props)

	return (
		<Modal
			title='Error'
			open={open}
			centered
			onCancel={close}
			zIndex={2000}
			footer={() => (
				<>
					<Button type='default' onClick={close}>Cancelar</Button>
					<Button type='primary' danger onClick={close}>Aceptar</Button>
				</>
			)}
		>
			<p>{ props.error.message }</p>
		</Modal>
	)
}
