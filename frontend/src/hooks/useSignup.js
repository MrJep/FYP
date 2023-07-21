import { useState } from "react"
import { useAuthContext } from "./useAuthContext"

export const useSignup = () =>{
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()

    const signup = async (Email,Username,Password,Role) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch('http://localhost:4000/api/user/signup', {
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                Email:Email,
                userName: Username,
                Password: Password,
                Role: Role
            })
        })

        const json = await response.json()

        if(!response.ok){
            setIsLoading(false)
            setError(json.error)
        }

        if(response.ok){
            // save user to local storage for quality of life usage
            localStorage.setItem('user', JSON.stringify(json))


            // update auth context
            dispatch({type: 'LOGIN', payload: json})


            setIsLoading(false)
        }
    }


    return { signup, isLoading, error}
}