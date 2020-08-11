import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import logOutIcon from '../../assets/images/icons/logout.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';
import './styles.css';
import api from '../../services/api';
import { useAuth } from '../../context/auth';

const Landing: React.FC = () => {
	const { logOut, signed } = useAuth();
	const [totalConnections, setTotalConnections] = useState(0);

	useEffect(() => {
		api.get('connections').then((res) => {
			const { total } = res.data;
			setTotalConnections(total);
		});
	}, []);

	function handleLogOut() {
		logOut();
		console.log(`Signed in logOut: ${signed}`);
	}

	return (
		<div id='page-landing'>
			<div className="body">
				<button type='submit' onClick={handleLogOut}>
					<img src={logOutIcon} alt="Sair"/>
				</button>
				<div id='page-landing-content' className='container'>
					<div className='logo-container'>
						<img src={logoImg} alt='Proffy' />
						<h2>Sua plataforma de estudos online.</h2>
					</div>
					<img src={landingImg} alt='Plataforma de estudos' className='hero-image' />
				</div>
			</div>
			<div className="footer">
				<div className="texts">
					<span className="welcome">Seja bem-vindo.</span>
					<span className="question">O que deseja fazer?</span>
				</div>
				<span className='total-connections'>
					Total de {totalConnections} conexões já realizadas{' '}
					<img src={purpleHeartIcon} alt='Coração Roxo' />
				</span>
				<div className='buttons-container'>
					<Link to='/study' className='study'>
						<img src={studyIcon} alt='Estudar' />
						Estudar
					</Link>
					<Link to='/give-classes' className='give-classes'>
						<img src={giveClassesIcon} alt='Dar aulas' />
						Dar Aulas
					</Link>
				</div>
				
			</div>
		</div>
	);
};

export default Landing;
