declare module '#auth-utils' {
  interface User {
    id: Number,
    name: String,
    fullName: String
  }

  interface UserSession {
    // Add your own fields
  }

  interface SecureSessionData {
    // Add your own fields
  }
}

export {}