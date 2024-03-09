
import { gql } from '@apollo/client'


export const rules = {
	userName: [{ required: true, message: 'Escriba su nombre de usuario' }],
	password: [{ required: true, message: 'Escriba su contraseña' }]
}

export const mutation = {
	SIGNIN: gql`
		mutation signIn($data: ISignInArgs!) {
			signIn(data: $data) {
				sessionId
				token: authorization
			}
		}
	`,
	SIGNOUT: gql`
		mutation SignOut($sessionId: Int!) {
			signOut(sessionId: $sessionId)
		}
	`
}
