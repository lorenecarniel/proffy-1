import React from 'react';
import successCheckIcon from '../../assets/images/icons/success-check-icon.svg';
import './styles.css';

function NotificationSignup() {
	return (
		<div id='notification-page'>
			<div className='intro-container'>
				<div className='background'>
					<div className='wrapper'>
						<img src={successCheckIcon} alt='E-mail enviado' />
						<div className='title'>Cadastro conluído</div>
						<div className='description'>
							Agora você faz parte da plataforma da Proffy. Tenha uma ótima experiência.
						</div>

						<button type='submit' className='backLogin'>
							Fazer login
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default NotificationSignup;
