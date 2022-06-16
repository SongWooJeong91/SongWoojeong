import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { MdAdd } from 'react-icons/md';

const TodoInsertBlock = styled.form`
	background-color: #e9e9e9;
	display: flex;
	input {
		font-size: 20px;
		outline: none;
		border: none;
		padding: 3px;
		line-height: 1.5;
		flex: 1;
	}
	button {
		border: none;
		background: #999;
		color: #fff;
		padding: 10px 15px;
		cursor: pointer;
		font-size: 20px;
	}
`;

const TodoInsert = ({ onInsert }) => {
	const [value, setValue] = useState('');
	const onChange = (e) => {
		setValue(e.target.value);
	};

	const onSubmit = useCallback(
		(e) => {
			onInsert(value);
			setValue('');
			e.preventDefault();
		},
		[onInsert, value]
	);
	return (
		<TodoInsertBlock onSubmit={onSubmit}>
			<input type="text" value={value} onChange={onChange} />
			<button type="submit">
				<MdAdd />
			</button>
		</TodoInsertBlock>
	);
};

export default TodoInsert;
