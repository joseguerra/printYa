export class User {
    constructor(
        public id: string,  
        public user_name: string,                
        public name: string,                
    	public email: string,                
        public address: string,                
        public telephone: string,                
        public rol_id: string,                
        public telephone_token: string,                
        public password: string,                
        public hash_password: string,                
        public create_at: string,                
        public update_at: string,                        
        public status: number 
    ){}
}
