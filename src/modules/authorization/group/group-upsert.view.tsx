
import { Button, Form, Input, Space } from 'antd'

import { CreateDialog } from '../../../components'
import { useAntdHelp } from '../../../hooks'
import { Group } from '../../../types'

import { mutation } from './group.constant'


interface IGroupCreateArgs {
	nombre:			string
	descripcion?:	string
}

interface IGroupDependencies {
	group?: Group
}

type GroupFormProps = {
	mode: 'create' | 'update'
	data: IGroupDependencies
	onSubmit: (data: IGroupCreateArgs) => void
	onCancel: () => void
}

function GroupForm({ data, onSubmit, onCancel }: GroupFormProps) {
	const { group } = data
	const { Item } = Form
	const [ form ] = Form.useForm()
	const { touched } = useAntdHelp()
	const onFinish = () => onSubmit(touched(form))

	return (
		<Form layout='vertical' autoComplete='off' onFinish={onFinish} form={form}
			initialValues={group ? {
				nombre: group.name,
				descripcion: group.description
			}: undefined}
		>
			<Item
				name='name'
				label='Nombre'
				rules={[{ required: true, message: 'Escriba el nombre del grupo' }]}>
				<Input placeholder='Nombre'/>
			</Item>
			<Item
				name='description'
				label='Descripción'>
				<Input placeholder='Descripción'/>
			</Item>
			<div className='modal-dialog-footer'>
				<Space>
					<Button type='default' onClick={onCancel}>Cancelar</Button>
					<Button type='primary' htmlType='submit'>Aceptar</Button>
				</Space>
			</div>
		</Form>
	)
}

export function CreateGroup() {
	return (
		<CreateDialog<IGroupCreateArgs, IGroupDependencies>
			title='Nuevo grupo'
			mutation={mutation.CREATE_GROUP}
			render={(submit, close) => <GroupForm mode='create' data={{}} onSubmit={submit} onCancel={close}/>}
		/>
	)
}
