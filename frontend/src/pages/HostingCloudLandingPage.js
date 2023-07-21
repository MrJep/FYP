import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithPrimaryBackground.js";
import Features from "components/features/ThreeColWithSideImageWithPrimaryBackground.js";
import MainFeature from "components/features/TwoColWithButton.js";
import Pricing from "components/pricing/ThreePlansWithHalfPrimaryBackground.js";
import Testimonial from "components/testimonials/SimplePrimaryBackground.js";
import FAQ from "components/faqs/TwoColumnPrimaryBackground.js";
import Footer from "components/footers/FiveColumnDark.js";
import serverRedundancyIllustrationImageSrc from "images/server-redundancy-illustration.svg";
import serverSecureIllustrationImageSrc from "images/server-secure-illustration.svg";
import TwoColSingleFeatureWithStats from "components/features/TwoColSingleFeatureWithStats";

export default () => {
	return (
		<AnimationRevealPage>
			<Hero />
			<Features />
			<TwoColSingleFeatureWithStats />
			<MainFeature
				subheading="Bite-Sized Content"
				heading="Learn much in a engaging way"
       
				description="Dive into a world of knowledge with short, engaging lessons designed specifically for busy employees like you.
              
               With our bite-sized content, you'll unlock the secrets of cyber security effortlessly, one byte at a time. Join us and embark on an exciting journey where learning is not just educational, but also enjoyable!"
				imageSrc={serverSecureIllustrationImageSrc}
				buttonRounded={false}
				textOnLeft={false}
			/>

    <MainFeature
				subheading="Accessibility"
				heading="Learn Anywhere at Anytime"
        description="Whether you're at home, in the office, or traveling, our website is your virtual classroom at your fingertips. Stay ahead of the cyber threats that lurk in the digital realm, 
                  and empower yourself with the flexibility to master cyber security concepts at your own convenience."
				imageSrc={serverRedundancyIllustrationImageSrc}
				buttonRounded={false}
			/>
			<FAQ />
			<Footer />
		</AnimationRevealPage>
	);
};
