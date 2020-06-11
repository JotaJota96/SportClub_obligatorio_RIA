export class LoginResponseDTO {
    
    public token: string;
    public email: string;
    public roles: string[];

    constructor(token: string, email: string, roles: string[]) {
        this.token = token;
        this.email = email;
        this.roles = roles;
    }
}