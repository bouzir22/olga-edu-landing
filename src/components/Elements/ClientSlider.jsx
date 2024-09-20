import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
// Assets
import ClientLogo01 from '../../assets/img/clients/logo01.svg';
import ClientLogo02 from '../../assets/img/clients/logo02.svg';
import ClientLogo03 from '../../assets/img/clients/logo03.svg';
import ClientLogo04 from '../../assets/img/clients/logo04.svg';
import ClientLogo05 from '../../assets/img/clients/logo05.svg';
import ClientLogo06 from '../../assets/img/clients/logo06.svg';

// logos des facultes
import anon from '../../assets/img/logo/anon.png';
import ems from '../../assets/img/logo/ems.png';
import esi from '../../assets/img/logo/esi.png';
import esmt from '../../assets/img/logo/esmt.png';
import essa from '../../assets/img/logo/essa.png';
import maghnia from '../../assets/img/logo/maghnia.png';
import ucn from '../../assets/img/logo/ucn.png';
import univ1 from '../../assets/img/logo/univ1.jpg';
import univ2 from '../../assets/img/logo/univ2.jpg';
import univ3 from '../../assets/img/logo/univ3.jpg';
import univ4 from '../../assets/img/logo/univ4.jpg';
import univ5 from '../../assets/img/logo/univ5.png';
import univ6 from '../../assets/img/logo/univ6.png';
import univ7 from '../../assets/img/logo/univ7.png';
import univ8 from '../../assets/img/logo/univ8.png';
import univ9 from '../../assets/img/logo/univ9.png';
import univ10 from '../../assets/img/logo/univ10.png';
import univ11 from '../../assets/img/logo/univ11.png';
import univ12 from '../../assets/img/logo/univ12.png';
import univ13 from '../../assets/img/logo/univ13.png';
import univ14 from '../../assets/img/logo/univ14.png';
import univ15 from '../../assets/img/logo/univ15.png';
import univ16 from '../../assets/img/logo/univ16.png';
import univ17 from '../../assets/img/logo/univ17.png';
import univ18 from '../../assets/img/logo/univ18.png';
import univ19 from '../../assets/img/logo/univ19.png';
import univ20 from '../../assets/img/logo/univ20.png';
import univ21 from '../../assets/img/logo/univ21.png';
import univ22 from '../../assets/img/logo/univ22.png';
import univ23 from '../../assets/img/logo/univ23.png';
import univ24 from '../../assets/img/logo/univ24.png';
import univ25 from '../../assets/img/logo/univ25.png';
import univ26 from '../../assets/img/logo/univ26.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function ClientSlider() {
	const settings = {
		infinite: true,
		speed: 500,
		slidesToShow: 7,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		arrows: false,
		pauseOnHover: false, // Prevents pausing when hovered
		pauseOnFocus: false, // Prevents pausing when focused
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 2,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
		],
	};

  const universityImages = [univ1, univ2, univ3, univ4, univ5, univ6, univ7, univ8, univ9, univ10, univ11, univ12, univ13, univ14, univ15, univ16, univ17, univ18, univ19, univ20, univ21, univ22, univ23, univ24, univ25, univ26];

	return (
		<div>
			<Slider {...settings}>
				<LogoWrapper className="flexCenter">
					<ImgStyle src={anon} alt="client logo" />
				</LogoWrapper>
				<LogoWrapper className="flexCenter">
					<ImgStyle src={ems} alt="client logo" />
				</LogoWrapper>
				<LogoWrapper className="flexCenter">
					<ImgStyle src={esi} alt="client logo" />
				</LogoWrapper>
				<LogoWrapper className="flexCenter">
					<ImgStyle src={esmt} alt="client logo" />
				</LogoWrapper>
				<LogoWrapper className="flexCenter">
					<ImgStyle src={essa} alt="client logo" />
				</LogoWrapper>
				<LogoWrapper className="flexCenter">
					<ImgStyle src={maghnia} alt="client logo" />
				</LogoWrapper>
				<LogoWrapper className="flexCenter">
					<ImgStyle src={ucn} alt="client logo" />
				</LogoWrapper>
				{universityImages.map((img, index) => (
					<>
						<LogoWrapper className="flexCenter">
							<ImgStyle src={img} alt="client logo" />
						</LogoWrapper>
					</>
				))}
			</Slider>
		</div>
	);
}

const LogoWrapper = styled.div`
	width: 100%;
	height: 100px;
	cursor: pointer;
	:focus-visible {
		outline: none;
		border: 0px;
	}
`;
const ImgStyle = styled.img`
	width: 130px;
	height: 130px;
	padding: 10%;
`;
