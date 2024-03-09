

import { useQuery, useSubscription } from '@apollo/client'
import { Input, Table, Tag } from 'antd'

import { ErrorDialog, Loader, ToolBar, ToolBarMenu } from '../../../components'
import { useAntdHelp, useError, useFilter } from '../../../hooks'

import { query, subscription } from './user.constant'


export function UserList() {
	const { addKey, estado } = useAntdHelp()
	const [ error, onError ] = useError()
	const { loading, data, refetch } = useQuery(query.USERS, { onError })
		, [ usuarios, filter ] = useFilter(addKey(data?.users), ['userName', 'displayName'])
	const { Column } = Table
	useSubscription(subscription.USER_UPSERTED, { onData: () => refetch() })

	return (
		<>
			<ToolBar>
				<ToolBarMenu>
					<Input.Search enterButton onSearch={filter}/>
				</ToolBarMenu>
			</ToolBar>

			<Table
				size='middle'
				dataSource={usuarios}
				bordered={true}
				pagination={{ pageSize: 15 }}
			>
				<Column title='Id' dataIndex='id'/>
				<Column title='Usuario' dataIndex='userName'/>
				<Column title='Nombre' dataIndex='displayName'/>
				<Column title='Correo electrónico' dataIndex='email'/>
				<Column title='Estado' render={usuario => {
					const e = estado(usuario.status)
					return (<Tag color={ e.color }>{ e.label }</Tag>)
				}}/>
			</Table>

			<Loader show={loading}/>
			<ErrorDialog error={error} />
		</>
	)
}
