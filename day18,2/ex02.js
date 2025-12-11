const logs = [
  { user: "A", action: "login", time: "2024-01-01" },
  { user: "B", action: "login", time: "2024-01-01" },
  { user: "A", action: "logout", time: "2024-01-02" },
  { user: "A", action: "purchase", time: "2024-01-02" },
  { user: "C", action: "login", time: "2024-01-01" },
];

const aggregated = logs.reduce((acc, log) => {
  const date = log.time;
  if (!acc[date]) {
    acc[date] = { login: 0, purchase: 0, logout: 0 };
  }
  acc[date][log.action]++;
  return acc;
}, {});

console.log(aggregated);
