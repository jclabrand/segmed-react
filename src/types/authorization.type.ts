
export type User = {
	id:				number
	userName:		string
	displayName?:	string
	email?:			string

	status:			number

	isAuthorized:	boolean
}

export type Group = {
	id:				number
	name:			string
	description?:	string
	
	status:			number
}
