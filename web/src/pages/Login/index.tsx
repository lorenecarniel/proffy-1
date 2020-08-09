import './styles.css';
import Input from '../../components/Input';
import logoImg from '../../assets/images/logo.svg';
import React, { useState, FormEvent } from 'react';
import successCheck from '../../assets/images/icons/checked.svg';
import purpleHeart from '../../assets/images/icons/purple-heart.svg';
import { useAuth } from '../../context/auth';

function Login() {
	const { logIn } = useAuth();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isChecked, setIsChecked] = useState('');

	const [isLinkEnabled, setIsLinkEnabled] = useState('disabled');

	function checkBox(e: FormEvent) {
		e.preventDefault();
		if (isChecked === 'active') {
			setIsChecked('');
		} else {
			setIsChecked('active');
		}
	}

	async function handleLogin() {
		const shouldRemember = isChecked === 'active' ? true : false;

		logIn(email, password, shouldRemember);
	}

	return (
		<div id='login-page'>
			<div className='intro-container'>
				<div className='background'>
					<div className='wrapper'>
						<img src={logoImg} alt='Proffy' />
						<div className='description'>Sua plataforma de estudos online.</div>
					</div>
				</div>
			</div>
			<div className='input-container'>
				<form>
					<label htmlFor='email'>Fazer login</label>
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
					<div className='actions'>
						<div className='checkbox' onClick={checkBox}>
							{/* isChecked recebe 'active' quando clicado */}
							<button className={`checkbox-input ${isChecked}`}>
								<img src={successCheck} alt='Checked' />
							</button>
							<label htmlFor='keepLoggedIn'>Lembrar-me</label>
						</div>
						<a href='#'>Esqueci minha senha</a>
					</div>
					<button type='submit' className={isLinkEnabled} onClick={handleLogin}>
						Entrar
					</button>
					<footer className='footer'>
						<div className='signIn'>
							Não tem conta?
							<a href='#'>Cadastre-se</a>
						</div>
						<span>
							É de graça <img src={purpleHeart} alt='heart' />
						</span>
					</footer>
				</form>
			</div>
		</div>
	);
}

export default Login;
