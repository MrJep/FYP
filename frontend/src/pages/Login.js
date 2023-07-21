import React from "react"
import AnimationRevealPage from "helpers/AnimationRevealPage.js"
import { Container as ContainerBase } from "components/misc/Layouts"
import tw from "twin.macro"
import styled from "styled-components"
import illustration from "images/login-illustration.svg"
import { ReactComponent as LoginIcon } from "feather-icons/dist/icons/log-in.svg"
import { useState } from "react"
import { useLogin } from "hooks/useLogin"
import { Link } from "react-router-dom";

const Container = tw(
	ContainerBase
)`min-h-screen bg-primary-900 text-white font-medium flex justify-center -m-8`
const Content = tw.div`max-w-screen-xl m-0 sm:mx-20 sm:my-16 bg-white text-gray-900 shadow sm:rounded-lg flex justify-center flex-1`
const MainContainer = tw.div`lg:w-1/2 xl:w-5/12 p-6 sm:p-12`
const LogoLink = tw.a``;
const LogoImage = tw.img`h-12 mx-auto`
const MainContent = tw.div`mt-12 flex flex-col items-center`
const Heading = tw.h1`text-2xl xl:text-3xl font-extrabold`
const FormContainer = tw.div`w-full flex-1 mt-8`

const DividerTextContainer = tw.div`my-12 border-b text-center relative`
const DividerText = tw.div`leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform -translate-y-1/2 absolute inset-x-0 top-1/2 bg-transparent`

const Form = tw.form`mx-auto max-w-xs`
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
const IllustrationContainer = tw.div`sm:rounded-r-lg flex-1 bg-purple-100 text-center hidden lg:flex justify-center`
const IllustrationImage = styled.div`
	${(props) => `background-image: url("${props.imageSrc}");`}
	${tw`m-12 xl:m-16 w-full max-w-sm bg-contain bg-center bg-no-repeat`}
`

const logoLinkUrl = "#"
const illustrationImageSrc = illustration
const headingText = "Sign In To Cycademy"
const submitButtonText = "Sign In"
const SubmitButtonIcon = LoginIcon
const forgotPasswordUrl = "#"

const Greydot = tw.a`border-b border-gray-500 border-dotted`
const Greywords = tw.p`mt-6 text-xs text-gray-600 text-center`

const Login = () =>{
	const [email, setEmail] = useState ('')
	const [password, setPassword] = useState('')
	const {login, error, isLoading} = useLogin()
	
	const handleSubmit = async (e) => {
		e.preventDefault()
		console.log(email,password)
		const response = await login(email,password)
	}
	return (
	<AnimationRevealPage>
		<Container>
			<Content>
				<MainContainer>
					<LogoLink href={logoLinkUrl}>
						<img id="displayimg" src="https://file.rendit.io/n/rrmpsxQKT5TFzIAhb3BO.png" className="center" />
					</LogoLink>
        
					<MainContent>
						<Heading>{headingText}</Heading>
						<FormContainer>
							<DividerTextContainer></DividerTextContainer>
							<Form onSubmit={handleSubmit}>
								<Input type="email" onChange={(e) => setEmail(e.target.value)} value = {email} placeholder="Email" />
								<Input type="password" onChange={(e) => setPassword(e.target.value)} value = {password} placeholder="Password" />
								{error && <div className = "error">{error}</div>}
								<SubmitButton type="submit">
									<SubmitButtonIcon className="icon" />
									<span className="text">{submitButtonText}</span>
								</SubmitButton>
							</Form>
							<Greywords tw="mt-6 text-xs text-gray-600 text-center">
								<Greydot
									href={forgotPasswordUrl}
									tw="border-b border-gray-500 border-dotted"
								>
									Forgot Password ?
								</Greydot>
							</Greywords>
							<Greywords tw="mt-8 text-sm text-gray-600 text-center">
								Dont have an account?{" "}
								<Greydot
									href={`/components/innerPages/SignupPage`}
									tw="border-b border-gray-500 border-dotted"
								>
									Sign Up
								</Greydot>
							</Greywords>
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

export default Login
