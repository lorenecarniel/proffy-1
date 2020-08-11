import React from 'react';
import successCheckIcon from '../../assets/images/icons/success-check-icon.svg';
import './styles.css';
import { Link } from 'react-router-dom';

function NotificationEmail() {
	return (
		<div id='notification-page'>
			<div className='intro-container'>
				<div className='background'>
					<div className='wrapper'>
						<img src={successCheckIcon} alt='E-mail enviado' />
						<div className='title'>Redefinição enviada!</div>
						<div className='description'>
							Boa, agora é só checar o e-mail que foi enviado para você redefinir sua senha e
							aproveitar os estudos.
						</div>

						<Link to='/'>
							<button type='submit' className='backLogin'>
								Voltar ao login
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default NotificationEmail;
