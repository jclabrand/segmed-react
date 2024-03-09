
import { useState } from 'react'
import { ApolloError } from '@apollo/client'

import { Error } from '../utils'


export function useError(): [ Error, (e?: ApolloError) => void ] {
	const [ error, setError ] = useState<Error>(new Error())

	const onError = (apolloError?: ApolloError) => setError(new Error({ apolloError }))

	return [ error, onError ]
}
