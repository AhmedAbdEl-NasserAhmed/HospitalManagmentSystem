const SessionStorage = {
  addItem(key: string, value: string, stringifyItem = true) {
    if (typeof window !== "undefined" && window.sessionStorage) {
      if (stringifyItem) {
        sessionStorage.setItem(key, JSON.stringify(value));
      } else {
        sessionStorage.setItem(key, value);
      }
    }
  },

  getItem(key: string) {
    if (typeof window !== "undefined" && window.sessionStorage) {
      return sessionStorage.getItem(key);
    }
    return null;
  }
};

export default SessionStorage;
