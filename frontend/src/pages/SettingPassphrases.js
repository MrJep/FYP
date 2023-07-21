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
import RandsomwareStats from "components/features/RansomwareStats";
import { quiz } from "./Quiz";
import SettingParaphrasesComp from "components/hero/Setting ParaphrasesComp";

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

export default ({ headingText = "Setting Passphrases" }) => {
	return (
		<AnimationRevealPage>
			<SettingParaphrasesComp></SettingParaphrasesComp>
			<Container>
				<ContentWithPaddingXl>
					<HeadingRow>
						<Heading>{headingText}</Heading>
					</HeadingRow>
					<Text>
						<p>Last updated: 13th June 2023</p>

						<h1>Before Setting up a passphrase </h1>
						<p>
							Using MFA or Multi-Factor-Authentication (such as something you
							know, something you have, or something you are) is a great way to
							keep your accounts safe from unauthorized access. But if you can't
							use multi-factor authentication, having a strong passphrase is the
							best way to protect yourself.
						</p>

						<h1>When choosing your passphrase</h1>

						<p>Make it </p>
						<li>Long and Unpredictable</li>
						<p>
							A strong passphrase consists of four or more random words.
							Sentences are not ideal as passphrases since they can be more
							easily guessed. Predictable patterns like spaces between words,
							initial capital letters, and ending punctuation make sentences
							less secure. Opting for a combination of random words creates
							stronger and more unpredictable passphrases.
						</p>
					
						<p>Make it </p>
						<li>Unique</li>
						<p>
							DO NOT recycle your passphrase. Use different passphrases for
							different accounts. Your passphrase for your outlook account
							should be different to your gmail account
						</p>
				
						<h1>Moving Forward</h1>
						<p>
							Using a passphrase is important for ensuring the security of our
							accounts and sensitive information. By employing four or more
							random words instead of predictable sentences, we can create
							stronger and more unpredictable passphrases. This significantly
							enhances our defense against unauthorized access, especially when
							multi-factor authentication is not available. Embracing the use of
							passphrases serves as a vital safeguard in today's digital
							landscape, where protecting our personal and online identities is
							crucial.
						</p>

						<h1>Quiz</h1>
						<quiz></quiz>
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
};
