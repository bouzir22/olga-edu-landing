import React from 'react';
import styled from 'styled-components';
// Components
import BlogBox from '../Elements/BlogBox';
import FullButton from '../Buttons/FullButton';
import TestimonialSlider from '../Elements/TestimonialSlider';

export default function Blog() {
	const trainingList = [
		{
			titleFrench: 'Pédagogie active et numérique',
			description:
				'Cette formation propose une démarche pédagogique en concordance avec les développements scientifiques et sociologiques actuels.',
		},
		{
			titleFrench: 'Renforcement des compétences',
			description:
				"Disposer des bons réflexes pour être efficace dans la préparation et la conduite de ses réunions, adapter les techniques d'animation aux objectifs, aux types de réunions choisis et aux participants,maîtriser les phénomènes de groupe et motiver les participants au cours de la réunion",
		},
		{
			titleFrench:
				'Améliorer les performances administratives grâce à l’Intelligence Artificielle',
			description:
				'L’intelligence artificielle, également appelée IA, fait des vagues dans le monde des professionnels des secteurs de l’administration publique et privée, fournissant le soutien dont les acteurs ont besoin pour rationaliser les tâches, augmenter l’efficacité et améliorer la productivité.',
		},
		{
			titleFrench: 'Le Management par objectifs et la motivation du personnel',
			description:
				'Cette formation propose une démarche pédagogique en concordance avec les développements scientifiques et sociologiques actuels.',
		},
		{
			titleFrench: 'Gestion des Documents Numériques',
			description:
				'Cette formation propose une démarche pédagogique en concordance avec les développements scientifiques et sociologiques actuels.',
		},
		{
			titleFrench: 'Postures épistémologique',
			description:
				'Cette formation propose une démarche pédagogique en concordance avec les développements scientifiques et sociologiques actuels.',
		},
	];

	return (
		<Wrapper id="blog">
			<div className="whiteBg">
				<div className="container">
					<HeaderInfo>
						<h1 className="font40 extraBold">Nos Formations</h1>
						<p className="font13">
							Les thèmes de nos formations sont guidés par une veille
							pédagogique permanente pour offrir à nos clients des formations
							dont le contenu, la durée, les exercices pratiques et les outils
							pédagogiques répondent à vos besoins. Ainsi, une fois le thème et
							le programme définis, nous sélectionnons les meilleurs experts
							pour votre totale satisfaction.
						</p>
					</HeaderInfo>
					<div className="row textCenter">
						{trainingList.map((f) => (
							<div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
								<BlogBox
									titleFrench={f.titleFrench}
									text={f.description}
									tag="company"
									author="Luke Skywalker, 2 days ago"
									action={() => alert('clicked')}
								/>
							</div>
						))}
					</div>
					<div className="row flexCenter">
						<div style={{ margin: '50px 0', width: '200px' }}>
							<FullButton title="Voir Plus" action={() => alert('clicked')} />
						</div>
					</div>
				</div>
			</div>
			<div className="lightBg" style={{ padding: '50px 0' }}>
				<div className="container">
					<HeaderInfo>
						<h1 className="font40 extraBold">Nos Valeurs</h1>
						<p className="font13">
							C’est une démarche de progrès visant à améliorer constamment nos
							performances dans tous les domaines d’activité. Cette démarche est
							tournée vers la satisfaction de nos clients et de nos
							collaborateurs.
						</p>
					</HeaderInfo>
					<TestimonialSlider />
				</div>
			</div>
		</Wrapper>
	);
}

const Wrapper = styled.section`
	width: 100%;
	padding-top: 20px;
`;
const HeaderInfo = styled.div`
	margin-bottom: 30px;
	@media (max-width: 860px) {
		text-align: center;
	}
`;
