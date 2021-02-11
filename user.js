
var user_list = [{id:1,name:"dharani"},{id:2,name:"kumar"},{id:3,name:"kishore"}]

function getUser(id){
   
    return user_list.find(item => item.id == id)
}


function deleteUser(id){
    let updated_list = [];
    user_list.filter(item => item.id !== id);
}

function addUser(user){
    user_list.push(user);
}

function updateUser(id, name){
    user_list.forEach(function(element) {
        if(id == element.id){
            element.name = name
        }
    }, this);
}

function User(){}


User.prototype.addUser = addUser;
User.prototype.deleteUser = deleteUser;
User.prototype.updateUser = updateUser;
User.prototype.getUser = getUser;
module.exports =new User;