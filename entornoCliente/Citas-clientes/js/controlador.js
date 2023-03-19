export class ControladorPHP {

    /**
     * Método que elimina la base de datos para el caso de que se necesite
     * establecer el estado inicial.
     * La siguiente petición al servidor creará de nuevo la base de datos
     * y la rellenará con algunos datos de prueba.
     * @returns Respuesta del servidor en formato JSON
     */
    static async eliminarBD() {
        let respuestaJSON = null;
        try {
            const respuesta = await fetch(`citasClientes.php`, {
                method : "POST",
                headers : {
                    "content-type" : "application/json"
                },
                body : JSON.stringify({
                   metodo: "eliminarBD"
                })
            });
            respuestaJSON = await respuesta.json();
        }catch(error) {
            console.error(error.message);
        }
        return respuestaJSON;
    }

    /**
     * Método que retorna todos los clientes de la base de datos
     * @returns Respuesta del servidor en formato JSON
     */
    static async getClientes() {
        let respuestaJSON = null;
        try {
            const respuesta = await fetch(`citasClientes.php`, {
                method : "POST",
                headers : {
                    "content-type" : "application/json"
                },
                body : JSON.stringify({
                   metodo: "getClientes"
                })
            });
            respuestaJSON = await respuesta.json();
        }catch(error) {
            console.error(error.message);
        }
        return respuestaJSON;
    }
    /**
     * Método que retorna las citas por los el nif del cliente
     * @param {Json} nif 
     * @returns Respuesta del servidor en formato JSON
     */
    static async getCitas(nif){
        let respuestaJSON = null;
        try {
            const respuesta = await fetch(`citasClientes.php`, {
                method : "POST",
                headers : {
                    "content-type" : "application/json"
                },
                body : JSON.stringify({
                    metodo: "getCitasCliente",
                    nifCliente: nif
                })
            });
            respuestaJSON = await respuesta.json();
        }catch(error) {
            console.error(error.message);
        }
        return respuestaJSON;

    }
    /**
     * Método para crear un nuevo cliente en la base de datos
     * @param {Json} formulario 
     * @returns Respuesta del servidor en formato JSON
     */
    static async setCliente(formulario){

        let respuestaJSON = null;
        try {
            const respuesta = await fetch(`citasClientes.php`, {
                method : "POST",
                headers : {
                    "content-type" : "application/json"
                },
               body : JSON.stringify({
                    metodo: "setCliente",
                    cliente: formulario
                })
           });
            respuestaJSON = await respuesta.json();
            
        }catch(error) {
            console.error(error.message);
        }
        return respuestaJSON;

    }
    /**
     * Metodo para crear una nueva cita e intertarla en la base de datos
     * @param {Json} formulario 
     * @returns Respuesta del servidor en formato JSON
     */
    static async setCita(formulario){

        let respuestaJSON = null;
        try {
            const respuesta = await fetch(`citasClientes.php`, {
                method : "POST",
                headers : {
                    "content-type" : "application/json"
                },
               body : JSON.stringify({
                    metodo: "setCita",
                    cita: formulario
                })
           });
            respuestaJSON = await respuesta.json();
            
        }catch(error) {
            console.error(error.message);
        }
        return respuestaJSON;

    }
    /**
     * Método para eliminar una cita de la base de datos por su id
     * @param {Json} id 
     * @returns Respuesta del servidor en formato JSON
     */
    static async eliminarCita(id){

        let respuestaJSON = null;
        try {
            const respuesta = await fetch(`citasClientes.php`, {
                method : "POST",
                headers : {
                    "content-type" : "application/json"
                },
               body : JSON.stringify({
                    metodo: "eliminarCita",
                    id: id
                })
           });
            respuestaJSON = await respuesta.json();
            
        }catch(error) {
            console.error(error.message);
        }
        return respuestaJSON;

    }

    /**
     * Método para eliminar un cliente de la base de datos atraves de su nif
     * @param {*} nif 
     * @returns 
     */
    static async eliminarCliente(nif){

        let respuestaJSON = null;
        try {
            const respuesta = await fetch(`citasClientes.php`, {
                method : "POST",
                headers : {
                    "content-type" : "application/json"
                },
               body : JSON.stringify({
                    metodo: "eliminarCliente",
                    nif : nif
                })
           });
            respuestaJSON = await respuesta.json();
            
        }catch(error) {
            console.error(error.message);
        }
        return respuestaJSON;

    }

}
