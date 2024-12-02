const SessionStorage = {
  addItem(key: string, value: any, stringifyItem = true) {
    if (typeof window !== "undefined" && window.sessionStorage) {
      if (stringifyItem) {
        sessionStorage.setItem(key, JSON.stringify(value));
      } else {
        sessionStorage.setItem(key, value);
      }
    }
  },

  getItem(key: string, shouldParse = false) {
    if (typeof window !== "undefined" && window.sessionStorage) {
      if (!shouldParse) {
        return sessionStorage.getItem(key);
      } else {
        return JSON.parse(sessionStorage.getItem(key));
      }
    }
    return null;
  },
  deleteItem(key: string) {
    if (typeof window !== "undefined" && window.sessionStorage) {
      sessionStorage.removeItem(key);
    }
  }
};

export default SessionStorage;
