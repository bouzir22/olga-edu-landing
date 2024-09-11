import React from 'react';
import styled from 'styled-components';

export default function BlogBox({
	titleFrench,
	text,
	action,
}) {
	return (
		<WrapperBtn
			className="animate pointer"
			onClick={action ? () => action() : null}>
			<Wrapper className="whiteBg radius8 shadow">
				<h3 className="font20 extraBold darkColor">
					{titleFrench}
				</h3>
				<p className="font13" style={{ padding: '30px 0' }}>
					{text}
				</p>
				
			</Wrapper>
		</WrapperBtn>
	);
}

const Wrapper = styled.div`
	width: 100%;
	text-align: left;
	padding: 20px 30px;
	margin-top: 30px;
`;
const WrapperBtn = styled.button`
	border: 0px;
	outline: none;
	background-color: transparent;
	:hover {
		opacity: 0.5;
	}
`;
