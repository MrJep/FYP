import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container as ContainerBase } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import illustration from "images/signup-illustration.svg";
import { ReactComponent as SignUpIcon } from "feather-icons/dist/icons/user-plus.svg";
import { components } from "ComponentRenderer";
import { useState } from "react"


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
const Greydot = tw.a`border-b border-gray-500 border-dotted`
const DividerTextContainer = tw.div`my-12 border-b text-center relative`

const ContentPage = () => {

  return (
    <AnimationRevealPage>
      <Container>
        <Content>
          <Greydot href={`/`}
					         tw="border-b border-gray-500 border-dotted"
	 								 color="Red">
									 Logout
					</Greydot>
          <DividerTextContainer></DividerTextContainer>
        </Content>
      </Container>
    </AnimationRevealPage>
  )
}

export default ContentPage;