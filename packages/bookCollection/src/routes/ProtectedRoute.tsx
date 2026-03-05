import { useQuery } from '@apollo/client';
import { CHECK_LOGIN } from '../GraphQL/queries';
import LoadingSpinner from '../components/general-purpose/LoadingSpinner';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
	nestedElement: React.ReactNode;
}

export const ProtectedRoute = (props: ProtectedRouteProps) => {
	const { error, loading, data } = useQuery(CHECK_LOGIN);
	const { nestedElement } = props;

	if (loading && !data) return <LoadingSpinner />;
	if (data && data.checkLogin.authenticated) return nestedElement;
	return <Navigate to='/' />;
};
