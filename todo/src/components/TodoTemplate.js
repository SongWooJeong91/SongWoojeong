import React, { Children } from 'react';
import styled from 'styled-components';

const TodoTemplateBlock = styled.div`
	margin-right: auto;
	margin-left: auto;
	margin-top: 6rem;
	width: 500px;
	border-radius: 4px;
	overflow: hidden;
`;

const TodoHeader = styled.div`
	height: 60px;
	background-color: tomato;
	text-align: center;
	line-height: 60px;
	font-size: 26px;
	font-weight: 400;
	color: #fff;
`;
const Content = styled.div`
	background-color: #f4f4f4;
`;

const TodoTemplate = ({ children }) => {
	return (
		<TodoTemplateBlock>
			<TodoHeader>일정 관리</TodoHeader>
			<Content>{children}</Content>
		</TodoTemplateBlock>
	);
};

export default TodoTemplate;
