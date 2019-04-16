let newUser = createNewUser(prompt("Your firstName", ''), prompt("Your lastName", ''));
let newUserMethod = newUser.getLogin();

function createNewUser(firstName, lastName) {

    let obj =  {
        firstName: firstName,
        lastName: lastName,
        getLogin: function() {
            let a = firstName[0] + lastName;
            return `${a.toLowerCase()}`
        }
    };
    return obj
}
console.log(newUserMethod);
