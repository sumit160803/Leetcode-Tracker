import {isValidUsername} from '6pp';

export const usernameValidator = (username)=>{
    if(!isValidUsername(username))
        return { isValid: false, errorMessage:"Enter a valid username" }
}
export const emailValidator = (email)=>{
    if(!isValidEmail(email))
        return { isValid: false, errorMessage:"Enter a valid email" }
}