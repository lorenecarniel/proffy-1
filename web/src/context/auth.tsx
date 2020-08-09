import React, { createContext, useState, useEffect, useContext } from 'react';
import api from '../services/api';

interface UserProps {
	id: number;
	name: string;
	email: string;
	lastName: string;
	password: string;
	bio: string;
	avatar: string;
	whatsapp: string;
}

interface AuthProps {
	signed: boolean;
	user: UserProps | null;
	logIn(email: string, password: string): Promise<void>;
	logOut(): void;
}

const AuthContext = createContext<AuthProps>({} as AuthProps);

export const AuthProvider: React.FC = ({ children }) => {
	const [user, setUser] = useState<UserProps | null>(null);

	useEffect(() => {
		async function loadStoredData() {
			const storedUser = localStorage.getItem('@RProffy:user');
			const storedToken = localStorage.getItem('@RProffy:token');

			if (storedUser && storedToken) {
				setUser(JSON.parse(storedUser));
				api.defaults.headers['Authorization'] = `Bearer ${storedToken}`;
			}
		}

		loadStoredData();
	}, []);

	async function logIn(email: string, password: string) {
		const user = await api.get('/users', {
			params: {
				email,
				password,
			},
		});
		console.log(user.data);

		const { token } = user.data;
		api.defaults.headers['Authorization'] = `Bearer ${token}`;

		setUser(user.data);
		localStorage.setItem('@RProffy:user', JSON.stringify(user.data));
		// token
		localStorage.setItem('@RProffy:token', token);
	}

	function logOut() {
		localStorage.clear();
		setUser(null);
	}

	return (
		<AuthContext.Provider value={{ signed: !!user, user, logIn, logOut }}>
			{children}
		</AuthContext.Provider>
	);
};

export function useAuth() {
	const context = useContext(AuthContext);
	return context;
}
