import React, { createContext } from 'react';
import api from '../services/api';
import { AxiosResponse } from 'axios';

interface AuthProps {
	signed: boolean;
	user: object;
	logIn(email: string, password: string): AxiosResponse<void>;
}

const AuthContext = createContext<AuthProps>({} as AuthProps);

export const AuthProvider: React.FC = ({ children }) => {
	async function logIn(email: string, password: string) {
		const user = await api.get('/users', {
			params: {
				email,
				password,
			},
		});
	}

	return (
		<AuthContext.Provider value={{ signed: false, user: {}, logIn }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
