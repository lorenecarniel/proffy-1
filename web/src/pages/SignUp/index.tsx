import React, { useState } from 'react';
import logoImg from '../../assets/images/logo.svg';
import backPage from '../../assets/images/icons/back.svg';
import Input from '../../components/Input';
import './styles.css';

function Register(){
	const [name, setName] = useState('');
	const [lastname, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isLinkEnabled, setIsLinkEnabled] = useState('disabled');

	return (
		<div id='register-page'>
			<div className='input-container'>
				<div className="header">
					<img src={backPage} alt='Voltar' />
				</div>
				
				<form>
					<label htmlFor='senha'>Cadastro</label>
					<a>Preencha os dados abaixo para começar.</a>
					
					<div className='input-wrapper'>
						<Input
							className="first"
							name='nome'
							placeholder='Nome'
							value={name}
							onChange={(e) => {
								setIsLinkEnabled('');
								setName(e.target.value);
							}}
						/>
						<Input
							name='sobrenome'
							placeholder='Sobrenome'
							value={lastname}
							onChange={(e) => {
								setIsLinkEnabled('');
								setLastName(e.target.value);
							}}
						/>
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
						<Input
							name='senha'
							type='password'
							placeholder='Senha'
							value={password}
							onChange={(e) => {
								setIsLinkEnabled('');
								setPassword(e.target.value);
							}}
						/>
					</div>

					<button type='submit' className={isLinkEnabled} >
						Concluir cadastro
					</button>
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
};

export default Register;
