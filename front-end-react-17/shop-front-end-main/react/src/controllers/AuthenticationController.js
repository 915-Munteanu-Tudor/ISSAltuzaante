import axios from "axios";

class AuthenticationController {
     async register(data) {
         try {
            const response = await axios.post('/register', data)     
         } catch (error) {
             console.log(error);
             alert("ERROR Try again!");
             return;
         }
         alert("Succes. Log in!");
    }

    async getUser(){
        if (localStorage.getItem('token') != null) {
            try {
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
                const response = await axios.get('/get-authenticated-user');
                //console.log(response);
                return response.data;
            } catch (error) {
                console.error(error);
            }
        }
        else {
            return null;
        }
    }

    async login(data) {
        let user = "";
        try {
            const response = await axios.post('/login', data);
            localStorage.setItem('token', response.data.token);
            console.log("RESPONSE", response.data);
            user = response.data;
        } catch(error) {
            console.log(error);
            user = "bad-credentials";
        }
        
        return user;
    }

}
export default new AuthenticationController();