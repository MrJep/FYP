import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container as ContainerBase } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import illustration from "images/signup-illustration.svg";
import { ReactComponent as SignUpIcon } from "feather-icons/dist/icons/user-plus.svg";
import { components } from "ComponentRenderer";
import { useState } from "react"
import { useSignup } from "hooks/useSignup";


const submitButtonText = "Sign Up"
const SubmitButtonIcon = SignUpIcon
const logoLinkUrl = "#"
const illustrationImageSrc = illustration
const headingText = "Sign Up for Cycademy"
const tosUrl = "#"
const privacyPolicyUrl = "#"
const signInUrl = "/"
const Container = tw(ContainerBase)`min-h-screen bg-primary-900 text-white font-medium flex justify-center -m-8`
const Content = tw.div`max-w-screen-xl m-0 sm:mx-20 sm:my-16 bg-white text-gray-900 shadow sm:rounded-lg flex justify-center flex-1`
const MainContainer = tw.div`lg:w-1/2 xl:w-5/12 p-6 sm:p-12`
const LogoLink = tw.a``
const MainContent = tw.div`mt-12 flex flex-col items-center`
const Heading = tw.h1`text-2xl xl:text-3xl font-extrabold`
const FormContainer = tw.div`w-full flex-1 mt-8`
const IllustrationContainer = tw.div`sm:rounded-r-lg flex-1 bg-purple-100 text-center hidden lg:flex justify-center`
const IllustrationImage = styled.div`${(props) => `background-image: url("${props.imageSrc}");`}${tw`m-12 xl:m-16 w-full max-w-lg bg-contain bg-center bg-no-repeat`}`		

const DividerTextContainer = tw.div`my-12 border-b text-center relative`
    
const Form = tw.form`mx-auto max-w-xs`;
const Input = tw.input`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`
const SubmitButton = styled.button`
	${tw`mt-5 tracking-wide font-semibold bg-primary-500 text-gray-100 w-full py-4 rounded-lg hover:bg-primary-900 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}
	.icon {
		${tw`w-6 h-6 -ml-2`}
	}
	.text {
		${tw`ml-3`}
	}
`
const Greydot = tw.a`border-b border-gray-500 border-dotted`
const Greywords = tw.p`mt-6 text-xs text-gray-600 text-center`


const SignUp = () =>{
	const [email, setEmail] = useState ('')
	const [password, setPassword] = useState('')
	const [username, setUsername] = useState('')
	const [role, setRole] = useState('')
    const [selectedRole, setSelectedRole] = useState('')
	const {signup, error, isLoading} = useSignup()

	const handleSubmit = async (e) => {
		e.preventDefault()
		console.log(email,username,password,role)
		await signup(email,username,password,role)
	}
	
	return(	
							<AnimationRevealPage>
								<Container>
									<Content>
										<MainContainer>
											<LogoLink href={logoLinkUrl}>
												<img src= " https://file.rendit.io/n/rrmpsxQKT5TFzIAhb3BO.png"/>
											</LogoLink>
											<MainContent>
												<Heading>{headingText}</Heading>
												<FormContainer>
												<Form onSubmit={handleSubmit}>
																			<Input id = "email" type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" value = {email}/>
																			<Input id = "username" type="text" onChange={(e) => setUsername(e.target.value)} placeholder="Username" value = {username}/>
																			<Input id = "password" type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" value = {password}/>
																			<br /> <br /> <br />
																			<div>
																			<select id="role" value={role} onChange={(e) => setRole(e.target.value)}>
																			<option value="">Select Role</option>
																			<option value={"Technical"}>Technical User</option>
																			<option value={"Non-Technical"}>Non-Technical User</option>
																			</select>
																			
																			</div>
																			<DividerTextContainer></DividerTextContainer>

																			{error && <div className = "error">{error}</div>}
																			<br /> <br /> <br />
																			<SubmitButton type="submit">
																				<SubmitButtonIcon className="icon" />
																				<span className="text">{submitButtonText}</span>
																			</SubmitButton>
																			<Greywords tw="mt-6 text-xs text-gray-600 text-center">
																				I agree to abide by Cycademy's{" "}
																				<Greydot href={components.innerPages.TermsOfServicePage} tw="border-b border-gray-500 border-dotted">
																					Terms of Service
																				</Greydot>{" "}
																				and its{" "}
																				<Greydot
																					href={components.innerPages.PrivacyPolicyPage}
																					tw="border-b border-gray-500 border-dotted"
																				>
																					Privacy Policy
																				</Greydot>
																			</Greywords>
																			<Greywords tw="mt-8 text-sm text-gray-600 text-center">
																				Already have an account?{" "}
																				<Greydot
																					href={`/components/innerPages/LoginPage`}
																					tw="border-b border-gray-500 border-dotted"
																					color="Red"
																				>
																					Sign In
																				</Greydot>
																			</Greywords>
													</Form>
												</FormContainer>
											</MainContent>
										</MainContainer>
										<IllustrationContainer>
											<IllustrationImage imageSrc={illustrationImageSrc} />
										</IllustrationContainer>
									</Content>
								</Container>
							</AnimationRevealPage>
	)

}

export default SignUp
