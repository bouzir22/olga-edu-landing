import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
// Components
import TestimonialBox from '../Elements/TestimonialBox';

export default function TestimonialSlider() {
	const settings = {
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		responsive: [
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<div>
			<Slider {...settings}>
				<LogoWrapper className="flexCenter">
					<TestimonialBox
						text="Notre équipe est à votre disposition par téléphone, par email ou sur rendez-vous dans nos locaux ou les vôtres."
						author="Le dynamisme"
					/>
				</LogoWrapper>
				<LogoWrapper className="flexCenter">
					<TestimonialBox
						text="La combinaison entre professionnalisme et expérience garantissent notre capacité à innover et à identifier les évolutions des métier sain si que des compétences associées à votre domaine."
						author="L'innovation"
					/>
				</LogoWrapper>
				<LogoWrapper className="flexCenter">
					<TestimonialBox
						text="Nos formations font l’objet d’une évaluation sous forme de
questionnaire en fin de session. L’analyse de ces résultats nous permet de jauger puis d'améliorer le
niveau de votre satisfaction."
						author="La réactivité opérationnelle"
					/>
				</LogoWrapper>
				<LogoWrapper className="flexCenter">
					<TestimonialBox
						text="Le respect et la transparence sont les deux valeurs qui régissent aussi bien nos relations avec nos clients que les relations dans notre équipe."
						author="Le respect"
					/>
				</LogoWrapper>
				<LogoWrapper className="flexCenter">
					<TestimonialBox
						text="Olga’s International Academy forment une équipe de collaborateurs
motivés, réunie autour de leur fondatrice MADAME OLFA LADHARI experte en management,
organisation…"
						author="La cohésion d'équipes"
					/>
				</LogoWrapper>
				<LogoWrapper className="flexCenter">
					<TestimonialBox
						text="On affirme notre volonté d’entretenir des relations durables et équitables avec nos clients, prestataires et fournisseurs."
						author="Notre éthique"
					/>
				</LogoWrapper>
			</Slider>
		</div>
	);
}

const LogoWrapper = styled.div`
	width: 90%;
	padding: 0 5%;
	cursor: pointer;
	:focus-visible {
		outline: none;
		border: 0px;
	}
`;
