
import { gql } from '@apollo/client'


export const query = {
	GROUPS: gql`
		query groups {
			groups {
				id name description status
			}
		}
	`
}

export const subscription = {
	GROUP_UPSERTED: gql`
		subscription upserted {
			groupUpserted {
				id
			}
		}
	`
}
