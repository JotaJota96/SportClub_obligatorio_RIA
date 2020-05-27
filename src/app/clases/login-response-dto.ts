export class LoginResponseDTO {
    
    public token: string;
    public email: string;

    constructor(token: string, email: string) {
        this.token = token;
        this.email = email;
    }
}