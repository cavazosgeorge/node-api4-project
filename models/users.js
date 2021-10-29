const { nanoid } = require("nanoid");

function getId() {
  return nanoid().slice(0, 5);
}

const initializeUsers = () => [
  { id: getId(), name: "Ed Carter", bio: "hero" },
  { id: getId(), name: "Mary Edwards", bio: "super hero" },
  { id: getId(), name: "George Cavazos", bio: "Not a hero" },
  { id: getId(), name: "Chris Castillo", bio: "sorta a hero" },
  { id: getId(), name: "Jax Cavazos", bio: "The best hero" },
  { id: getId(), name: "Vanessa Romero", bio: "Sometimes a hero" },
  { id: getId(), name: "Chris Evans", bio: "A real hero" },
  { id: getId(), name: "David Smith", bio: "Never a hero" },
];

// FAKE IN-MEMORY USERS "TABLE"
let users = initializeUsers();

const find = () => {
  // SELECT * FROM users;
  return Promise.resolve(users);
};

const findById = (id) => {
  // SELECT * FROM users WHERE id = 1;
  const user = users.find((d) => d.id === id);
  return Promise.resolve(user);
};

const insert = ({ name, email }) => {
  // INSERT INTO users (name, bio) VALUES ('foo', 'bar');
  const newUser = { id: getId(), name, bio };
  users.push(newUser);
  return Promise.resolve(newUser);
};

const update = (id, changes) => {
  // UPDATE users SET name = 'foo', bio = 'bar WHERE id = 1;
  const user = users.find((user) => user.id === id);
  if (!user) return Promise.resolve(null);

  const updatedUser = { ...changes, id };
  users = users.map((d) => (d.id === id ? updatedUser : d));
  return Promise.resolve(updatedUser);
};

const remove = (id) => {
  // DELETE FROM users WHERE id = 1;
  const user = users.find((user) => user.id === id);
  if (!user) return Promise.resolve(null);

  users = users.filter((d) => d.id !== id);
  return Promise.resolve(user);
};

const resetDB = () => {
  // ONLY TESTS USE THIS ONE
  users = initializeUsers();
};
