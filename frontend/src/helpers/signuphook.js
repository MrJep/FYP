import { useState } from "react"
import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import illustration from "images/signup-illustration.svg";
import { ReactComponent as SignUpIcon } from "feather-icons/dist/icons/user-plus.svg";
import { components } from "ComponentRenderer";


const SignUp = () =>{
	const [email, setEmail] = useState ('')
	const [password, setPassword] = useState('')
	const [username, setUsername] = useState('')
	const [role, setRole] = useState('')
    const [selectedRole, setSelectedRole] = useState('');

    const DividerTextContainer = tw.div`my-12 border-b text-center relative`;
    
    const Form = tw.form`mx-auto max-w-xs`;
    const Input = tw.input`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`;
    const SubmitButton = styled.button`
        ${tw`mt-5 tracking-wide font-semibold bg-primary-500 text-gray-100 w-full py-4 rounded-lg hover:bg-primary-900 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}
        .icon {
            ${tw`w-6 h-6 -ml-2`}
        }
        .text {
            ${tw`ml-3`}
        }
    `;

	const handleSubmit = async (e) => {
		e.preventDefault()

		console.log(email,password,username,role)
	}
    const submitButtonText = "Sign Up"
    const SubmitButtonIcon = SignUpIcon
    const logoLinkUrl = "#"
	const illustrationImageSrc = illustration
	const headingText = "Sign Up for Cycademy"

	const tosUrl = "#"
	const privacyPolicyUrl = "#"
	const signInUrl = "/"

    return (
        <form className = "signup" onSubmit={handleSubmit}>
								<input id = "email" type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" value = {email}/>
								<input id = "username" type="text" onChange={(e) => setUsername(e.target.value)} placeholder="Username" value = {username}/>
								<input id = "password" type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" value = {password}/>
								<br /> <br /> <br />
                                <div>
                                <select id="role" value={role} onChange={(e) => setRole(e.target.value)}>
                                <option value="">Select Role</option>
                                <option value="technical">Technical User</option>
                                <option value="non-technical">Non-Technical User</option>
                                </select>
                                {selectedRole && <p>You selected: {selectedRole}</p>}
                                </div>
								<DividerTextContainer></DividerTextContainer>
								<SubmitButton type="submit">
									<SubmitButtonIcon className="icon" />
									<span className="text">{submitButtonText}</span>
								</SubmitButton>
								<p tw="mt-6 text-xs text-gray-600 text-center">
									I agree to abide by Cycademy's{" "}
									<a href={components.innerPages.TermsOfServicePage} tw="border-b border-gray-500 border-dotted">
										Terms of Service
									</a>{" "}
									and its{" "}
									<a
										href={components.innerPages.PrivacyPolicyPage}
										tw="border-b border-gray-500 border-dotted"
									>
										Privacy Policy
									</a>
								</p>
								<p tw="mt-8 text-sm text-gray-600 text-center">
									Already have an account?{" "}
									<a
										href={`/components/innerPages/LoginPage`}
										tw="border-b border-gray-500 border-dotted"
									>
										Sign In
									</a>
								</p>
		</form>
    )
}

export default SignUp