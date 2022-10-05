import { gql } from "@apollo/client";


export const LOGIN_USER = gql`
    mutation login($input:UsersPermissionsLoginInput!){
        login(input:$input){
            jwt
        user {
        id
        username
        email
        confirmed
        blocked
        }
    }  
    }
`