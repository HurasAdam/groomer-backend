export interface IUserDocument extends IUser, Document {
    generateJWT(): Promise<string>;
    comparePassword(password: string): Promise<boolean>;
    isDirectModified: (password: string) => string;
    
  }

  export interface IUser {
    username: string;
    email: string;
    password: string;
    role: 'client' | 'employee' | 'admin'; 

 
  }