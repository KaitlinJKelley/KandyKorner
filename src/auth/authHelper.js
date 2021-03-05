export const authHelper = {
    isUserLoggedIn: () => {
      if (localStorage.getItem("kandy_customer")) {
        return true
      }
      return false
    },
    getCurrentUserId: () => localStorage.getItem("kandy_customer"),
    storeUserInLocalStorage: (userId) => localStorage.setItem("kandy_customer", userId)
  }