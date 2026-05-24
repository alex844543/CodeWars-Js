let passwords = [];

function signIn(newPassword) {
  passwords.push(newPassword);
}

function logIn(password) {
  return passwords.includes(password);
}
