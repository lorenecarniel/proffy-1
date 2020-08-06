import './styles.css';
import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

interface PageHeaderProps {
	title: string;
	description?: string;
}

// FC = Function Component
const PageHeader: React.FC<PageHeaderProps> = (props) => (
	<header className='page-header'>
		<div className='top-bar-container'>
			<Link to='/'>
				<img src={backIcon} alt='Voltar' />
			</Link>
			<img src={logoImg} alt='Proffy' />
		</div>
		<div className='header-content'>
			<strong>{props.title}</strong>
			{props.description && <p>{props.description}</p>}
			{props.children}
		</div>
	</header>
);

export default PageHeader;