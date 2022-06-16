import React from 'react';
import styled from 'styled-components';
import {
	MdCheckBoxOutlineBlank,
	MdCheckBox,
	MdIndeterminateCheckBox,
} from 'react-icons/md';

const TodoListItemBlock = styled.div`
	display: flex;
	align-items: center;
	padding: 10px 2px;
	.checkBox {
		display: flex;
		align-items: center;
		cursor: pointer;
		flex: 1;
		svg {
			font-size: 32px;
		}
		.text {
			flex: 1;
			margin-left: 6px;
		}
	}
	.remove {
		cursor: pointer;
		svg {
			font-size: 32px;
		}
	}
	& + & {
		border-top: 1px solid #ccc;
	}
`;

const TodoListItem = ({ todo, onToggle, onRemove }) => {
	const { id, text, checked } = todo;
	return (
		<TodoListItemBlock>
			<div className="checkBox" onClick={() => onToggle(id)}>
				{checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
				<div className="text">{text}</div>
			</div>
			<div className="remove" onClick={() => onRemove(id)}>
				<MdIndeterminateCheckBox />
			</div>
		</TodoListItemBlock>
	);
};

export default TodoListItem;
