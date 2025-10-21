const accountId = 144553;
let accountEmail = "mehaid@google.com";
var accountPassword = "12345";
accountCity = "bd";
let accountState;

// accountId = 2 // not allowed

accountEmail = "me@ha.com";
accountPassword = "21212121";
accountCity = "dhaka";

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);
