
export interface ISignInData {
	userName: string
	password: string
}

export interface ISignInResponse {
	sessionId: number
	token: string
}
