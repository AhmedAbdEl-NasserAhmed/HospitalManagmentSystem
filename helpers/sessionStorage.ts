const SessionStorage = {
  addItem(key: string, value: string, stringifyItem = true) {
    
    if (stringifyItem) {
      sessionStorage.setItem(key, JSON.stringify(value));
    } else {
      sessionStorage.setItem(key, value);
    }
  },

  getItem(key: string) {
    return sessionStorage.getItem(key);
  }
};

export default SessionStorage;
