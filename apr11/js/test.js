var users = [],
    user = 0;
var newBtn = document.querySelector('#new');
newBtn.addEventListener('click', createVariable);

function createVariable(){
    console.log(user);
    user++;
    users.push('user'+user);
    console.log(users);
}

