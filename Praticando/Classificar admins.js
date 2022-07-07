function getAdmins(map){
    
    /*let users = [];
    for([key, value] of map){
        if(value === 'User'){
            users.push(key);
        }
    }
    return users;*/

    let admins = [];
    for([key, value] of map){
        if(value === 'Admin'){
            admins.push(key);
        }
    }
    return admins;

}

const usuarios = new Map();

usuarios.set('Luiz', 'Admin');
usuarios.set('Stephany', 'Admin');
usuarios.set('Jorge', 'User');
usuarios.set('Lucas', 'Admin');

console.log(getAdmins(usuarios));