// This object houses all the friend _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Friends = {
  // TODO: Define how you want to store your list of friends.

  _data: new Set,

  // TODO: Define methods which allow you to add, toggle,
  // and check the friendship status of other users.
  items: function() {
    return [...Friends._data];
  },

  isFriend: function(username) {
    return Friends._data.has(username);
  },

  toggleStatus: function(username, callback = () => {}) {
    if (Friends._data.has(username)) {
      Friends._data.delete(username);
      callback(false);
    } else {
      Friends._data.add(username);
      callback(true);
    }
  }
};