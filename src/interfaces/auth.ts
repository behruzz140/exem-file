export interface SignUp{
    email: string;
    full_name: string;
    password: string;
    phone_number: string;
}
export interface SignIn{
    email: string;
    password: string;
}
export interface AuthVerify {
    code: string,
    email: string
}
export interface ForgotPassword {
    email: string
}
export interface UpdatePassword {
    code: string,
    new_password: string
}
export interface UpdatePassRequest extends UpdatePassword {
    email: string
}
export interface ResetPassword{
    email?: string;
    phone?: string|number;
}
export interface GetParams{
    page: string | number;
    limit: string | number;
    owner_email: string
}
export interface Request {
    sign_in:(data:SignIn)=>any,
   
}