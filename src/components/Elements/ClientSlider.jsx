import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
// Assets
import ClientLogo01 from "../../assets/img/clients/logo01.svg"
import ClientLogo02 from "../../assets/img/clients/logo02.svg";
import ClientLogo03 from "../../assets/img/clients/logo03.svg";
import ClientLogo04 from "../../assets/img/clients/logo04.svg";
import ClientLogo05 from "../../assets/img/clients/logo05.svg";
import ClientLogo06 from "../../assets/img/clients/logo06.svg";

// logos des facultes
import anon from "../../assets/img/logo/anon.png"
import ems from "../../assets/img/logo/ems.png"
import esi from "../../assets/img/logo/esi.png"
import esmt from "../../assets/img/logo/esmt.png"
import essa from "../../assets/img/logo/essa.png"
import maghnia from "../../assets/img/logo/maghnia.png"
import ucn from "../../assets/img/logo/ucn.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ClientSlider() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,  // Prevents pausing when hovered
    pauseOnFocus: false,  // Prevents pausing when focused
    nextArrow: <DarkArrow />,
    prevArrow: <DarkArrow />,
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
      </Slider>
    </div>
  );
}


const DarkArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block",  backgroundColor: "black", borderRadius: "50%" }}
      onClick={onClick}
    />
  );
};

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