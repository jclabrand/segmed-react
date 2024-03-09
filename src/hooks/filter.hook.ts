
import { useState } from 'react'


export function useFilter<TData extends object>(
	dataset: Array<TData>,
	fields: Array<string>,
	resolvers: Array<(record: TData) => TData[keyof TData] | string | number> = []
): [ Array<TData>, (query: string) => void ] {

	const [ filterText, setFilterText ] = useState('')
	const filter = (query: string) => setFilterText(query.toLowerCase())

	if (dataset.length === 0) return [ dataset, filter ]

	type TDataKey = keyof TData
	const keys: Array<TDataKey> = <Array<TDataKey>>Object.keys(dataset[0]).filter(key => fields.some(field => field === key))

	const newDataset: TData[] = dataset.filter((record: TData) => {
		const evaluator = (value: TData[keyof TData] | string | number) => {
			if (typeof value === 'string') return value.toLowerCase().includes(filterText)
			if (typeof value === 'number') return value.toString().includes(filterText)
			return false
		}
		return keys.some(key => evaluator(record[key])) || resolvers.some(func => evaluator(func(record)))
	})

	return [ newDataset, filter ]
}
