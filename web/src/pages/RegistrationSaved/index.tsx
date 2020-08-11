import React from 'react';
import successCheckIcon from '../../assets/images/icons/success-check-icon.svg';
import './styles.css';

function RegistrationSaved() {

	return (
		<div id='notification-page'>
			<div className='intro-container'>
				<div className='background'>
					<div className='wrapper'>
						<img src={successCheckIcon} alt='E-mail enviado' />
						<div className="title">Cadastro salvo!</div>
						<div className='description'>Tudo certo, seu cadastro está na nossa lista de professores.
						Agora é só ficar de olho no seu WhatsApp.</div>

						<button type='submit' className='backLogin' >
							Acessar
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RegistrationSaved;
