import React from 'react';
import styled from 'styled-components';
import TodoListItem from './TodoListItem';

const TodoListBlock = styled.div`
	min-height: 400px;
	background-color: #f0f0f0;
`;

const TodoList = ({ todos, onToggle, onRemove }) => {
	return (
		<TodoListBlock>
			{todos.map((todo) => (
				<TodoListItem
					key={todo.id}
					todo={todo}
					onToggle={onToggle}
					onRemove={onRemove}
				/>
			))}
		</TodoListBlock>
	);
};

export default TodoList;
