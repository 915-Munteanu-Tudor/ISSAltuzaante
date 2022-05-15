import axios from "axios";

class DisciplineController {
    token = localStorage.getItem('token');
    async getOptionalDisciplines(){
        if (this.token != null) {
            try {
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.token;
                const response = await axios.get('/discipline/get-all-optionals');
                return response.data;
            } catch (error) {
                console.error(error);
            }
        }
        else {
            return null;
        }
    }

    async getStudentsForCurrentDiscipline(id){
        if (this.token != null) {
            try {
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.token;
                const response = await axios.get('/discipline/'+ id + '/students');
                return response.data;
            } catch (error) {
                console.error(error);
            }
        }
        else {
            return null;
        }
    }

    async getTeacherDisciplines(){
        if (this.token != null) {
            try {
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.token;
                const response = await axios.get('/discipline/teacher');
                return response.data;
            } catch (error) {
                console.error(error);
            }
        }
        else {
            return null;
        }
    }

    async insertDiscipline(newDiscipline) {
        if (this.token != null) {
            try {
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.token;
                console.log("new", newDiscipline);
                const response = await axios.post('/discipline/save/', newDiscipline);

                alert("Inserted discipline successfully!");
            } catch (error) {
                console.error("error-insert", error);
                alert("Insert failed", error);
            }
        }
        else {
            return null;
        }
    }

    async updateDiscipline(newDiscipline) {
        if (this.token != null) {
            try {
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.token;
                console.log("new", newDiscipline);
                const response = await axios.patch('/discipline/update/' + newDiscipline.disciplineId, newDiscipline);

                alert("Updated successfully!");
            } catch (error) {
                console.error("eroare-update", error);
                alert("Update failed", error);
            }
        }
        else {
            return null;
        }
    }


    async getCurriculum(){
        if (this.token != null) {
            try {
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.token;
                const response = await axios.get('/discipline/view-curriculum');
                return response.data;
            } catch (error) {
                console.error(error);
            }
        }
        else {
            return null;
        }
    }
}
export default new DisciplineController();