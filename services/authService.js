import fs from 'fs';
import path from 'path';
import bcrypt from 'bcrypt';


const userFile = path.join(path.resolve(),"data/users.json");

let usersData = [];
if(fs.existsSync(userFile)){
    usersData = JSON.parse(fs.readFileSync(userFile));
}

function saveUsers() {
    fs.writeFileSync(userFile,JSON.stringify(usersData,null,2));
}


export async function registerUser(username,password) {
    if(usersData.find(u => u.username === username)) {
        throw new Error("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password,10);

    const newUser = {
        username,
        password:hashedPassword
    };
    usersData.push(newUser);
    saveUsers();
    return {username};
}

export async function loginUser(username,password){
    const user = usersData.find(u => u.username === username);
    if(!user) throw new Error("Invalid credentials");

    const match = await bcrypt.compare(password,user.password);
    if (!match) throw new Error("Invalid credentials");

    return {username: user.username}
}