const logs = [
  { user: "A", action: "login" },
  { user: "B", action: "login" },
  { user: "A", action: "purchase" },
  { user: "A", action: "logout" },
  { user: "B", action: "purchase" },
  { user: "C", action: "login" },
];

let userActions = {};
logs.forEach(log => {
    if (!userActions[log.user]) {
        userActions[log.user] = [];
    }
    userActions[log.user].push(log.action);
});
console.log(userActions);
