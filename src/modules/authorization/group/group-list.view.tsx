

import { useQuery, useSubscription } from '@apollo/client'
import { Input, Table, Tag } from 'antd'

import { ErrorDialog, Loader, ToolBar, ToolBarMenu } from '../../../components'
import { useAntdHelp, useError, useFilter } from '../../../hooks'

import { query, subscription } from './group.constant'


export function GroupList() {
	const { addKey, estado } = useAntdHelp()
	const [ error, onError ] = useError()
	const { loading, data, refetch } = useQuery(query.GROUPS, { onError })
		, [ groups, filter ] = useFilter(addKey(data?.groups), ['name', 'description'])
	const { Column } = Table
	useSubscription(subscription.GROUP_UPSERTED, { onData: () => refetch() })

	return (
		<>
			<ToolBar>
				<ToolBarMenu>
					<Input.Search enterButton onSearch={filter}/>
				</ToolBarMenu>
			</ToolBar>

			<Table
				size='middle'
				dataSource={groups}
				bordered={true}
				pagination={{ pageSize: 15 }}
			>
				<Column title='Id' dataIndex='id'/>
				<Column title='Nombre' dataIndex='name'/>
				<Column title='Descripción' dataIndex='description'/>
				<Column title='Estado' render={record => {
					const e = estado(record.status)
					return (<Tag color={ e.color }>{ e.label }</Tag>)
				}}/>
			</Table>

			<Loader show={loading}/>
			<ErrorDialog error={error} />
		</>
	)
}
