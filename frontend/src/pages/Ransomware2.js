import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import { SectionHeading } from "components/misc/Headings";
import TwoColContactUsWithIllustration from "components/forms/TwoColContactUsWithIllustration";
import TwoColumnWithInput from "components/hero/TwoColumnWithInput";
import TwoColumnWithVideo from "components/hero/TwoColumnWithVideo";
import Ransomware from "components/hero/Ransomware";
import RansomwareStats from "components/features/RansomwareStats";
import { quiz } from "./Quiz";
import { useAuthContext } from "hooks/useAuthContext";

const HeadingRow = tw.div`flex`;
const Heading = tw(SectionHeading)`text-gray-900 mb-10`;
const Text = styled.div`
	${tw`text-lg  text-gray-800`}
	p {
		${tw`mt-2 leading-loose`}
	}
	h1 {
		${tw`text-3xl font-bold mt-10`}
	}
	h2 {
		${tw`text-2xl font-bold mt-8`}
	}
	h3 {
		${tw`text-xl font-bold mt-6`}
	}
	ul {
		${tw`list-disc list-inside`}
		li {
			${tw`ml-2 mb-3`}
			p {
				${tw`mt-0 inline leading-normal`}
			}
		}
	}
`;

const RansomwarePage = () => {
	const { user } = useAuthContext()
	return (
		<AnimationRevealPage>
			<Ransomware></Ransomware>
			<RansomwareStats></RansomwareStats>
			<Container>
				<ContentWithPaddingXl>
					<HeadingRow>
						{user && (<Heading>{user.Email}</Heading>)}
					</HeadingRow>
					<Text>
						<p>Last updated: 13th June 2023</p>

						<h1>How Randomware Infects Devices </h1>
						<p>
							<li>
								Visiting unsafe or suspicious websites<br></br>
							</li>
							<li>
								Opening emails or files from unknown sources<br></br>
							</li>
							<li>Clicking on malicious links in emails or on social media</li>
						</p>

						<h1> Moving Forward</h1>

						<p>
							It's never advisable to pay a ransom in case of a ransomware
							attack since there is no assurance of retrieving your data, nor
							preventing its online sale or leakage. Furthermore, it could
							result in you becoming a target for additional attacks. To
							safeguard yourself against ransomware attacks and to understand
							what steps to take if you're held ransom, refer to the practical
							guidelines provided below.
						</p>

						<h1>Quiz</h1>
						<br></br>
						<br></br>
						<br></br>
						<h1> Game</h1>
					</Text>
				</ContentWithPaddingXl>
			</Container>
			<Footer />
		</AnimationRevealPage>
	);


}

export default RansomwarePage
