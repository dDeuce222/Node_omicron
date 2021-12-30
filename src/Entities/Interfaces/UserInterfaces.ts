export interface DbUserInterface {
  id: string
  email: string
  password: string
  organization: string
  labs: Array<string>
}

export interface signupInterface {
  email: string
  password: string
  repeatPassword: string
}

export interface loginInterface {
  email: string
  password: string
}

export interface userDataInterface {
  id?: string
  email: string
  labs: Array<string> // Should be an array of string or a Lab Object
  organization: string // Should be a string or an Organization Object
}
