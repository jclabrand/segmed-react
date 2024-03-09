
import { ApolloError } from '@apollo/client'


interface ErrorOptions {
	message?:		string,
	apolloError?:	ApolloError
}

export class Error {
	public message: string
	public has: boolean

	public constructor(options: ErrorOptions = { message: '' }) {
		this.message = options.apolloError?.message ?? (options.message || '')
		this.has = this.message.length ? true : false
	}
}
