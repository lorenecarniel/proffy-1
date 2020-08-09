import React from 'react';
import Landing from '../pages/Landing';
import TeacherList from '../pages/TeacherList';
import TeacherForm from '../pages/TeacherForm';
import { BrowserRouter, Route } from 'react-router-dom';

const AppRoutes: React.FC = () => {
	return (
		<BrowserRouter>
			<Route exact path='/' component={Landing} />
			<Route path='/study' component={TeacherList} />
			<Route path='/give-classes' component={TeacherForm} />
		</BrowserRouter>
	);
};

export default AppRoutes;
