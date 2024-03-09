
import { gql } from '@apollo/client'


export const query = {
	USERS: gql`
		query users {
			users {
				id userName displayName email status
			}
		}
	`,
	CURRENT_USER: gql`
		query CurrentUser($sessionId: Int!) {
			currentUser(sessionId: $sessionId) {
				id userName displayName
				isAuthorized @client
			}
		}
	`
}

export const subscription = {
	USER_UPSERTED: gql`
		subscription upserted {
			userUpserted {
				id
			}
		}
	`
}
