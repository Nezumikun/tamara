declare module '#auth-utils' {
  interface User {
    id: number,
    name: String,
    fullName: String
  }

  interface UserSession {
    currentGame: Game?
  }

  interface SecureSessionData {
    // Add your own fields
  }
}

export {}