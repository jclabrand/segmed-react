
import { FormInstance } from 'antd'

enum Status {
	Removed = -1,
	Idle = 0,
	Active = 1,
	Pending = 2
}

export function useAntdHelp() {
	return {
		addKey: <T = object>(dataset?: Array<T & { id: number }>) => {
			return dataset
				? dataset.map(c => ({ ...c, key: String(c.id) })) as Array<T>
				: [] as Array<T>
		},
		estado: (val: number) => {
			switch(val) {
				case Status.Removed: return { label: 'Eliminado', color: 'red' }
				case Status.Idle: return { label: 'Inactivo', color: 'orange' }
				case Status.Active: return { label: 'Activo', color: 'green' }
				case Status.Pending: return { label: 'Pediente', color: 'gray' }
				default: return { label: 'Desconocido', color: 'purple' }
			}
		},
		touched: (form: FormInstance) => form.getFieldsValue({ filter: (meta) => meta.touched }),
	}
}
