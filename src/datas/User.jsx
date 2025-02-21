import axios from "axios";

function User(){
    const users = () => axios.get('http://localhost:5000/user');
    const data = JSON.parse(users);
    return data;
};

export default User;