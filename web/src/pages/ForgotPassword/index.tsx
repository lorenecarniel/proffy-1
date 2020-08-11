import React, { useState } from 'react';
import logoImg from '../../assets/images/logo.svg';
import backPage from '../../assets/images/icons/back.svg';
import Input from '../../components/Input';
import './styles.css';
import { Link } from 'react-router-dom';

function ForgotPassword() {
	const [email, setEmail] = useState('');
	const [isLinkEnabled, setIsLinkEnabled] = useState('disabled');

	return (
		<div id='forgot-page'>
			<div className='input-container'>
				<div className='header'>
					<Link to='/'>
						<img src={backPage} alt='Voltar' />
					</Link>
				</div>

				<form>
					<label htmlFor='senha'>Eita, esqueceu sua senha?</label>
					<span>Não esquenta, vamos dar um jeito nisso.</span>
					<div className='input-wrapper'>
						<Input
							name='email'
							type='email'
							placeholder='E-mail'
							value={email}
							onChange={(e) => {
								setIsLinkEnabled('');
								setEmail(e.target.value);
							}}
						/>
					</div>

					<Link to='/notificationEmail'>
						<button type='button' className={isLinkEnabled}>
							Enviar
						</button>
					</Link>
				</form>
			</div>
			<div className='intro-container'>
				<div className='background'>
					<div className='wrapper'>
						<img src={logoImg} alt='Proffy' />
						<div className='description'>Sua plataforma de estudos online.</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ForgotPassword;
