const LoadingSpinner: React.FC = () => {
	return (
		<div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
			<div
				style={{
					width: '30px',
					height: '30px',
					border: '3px solid #ccc',
					borderTop: '3px solid #040461',
					borderRadius: '50%',
					animation: 'spin 0.8s linear infinite',
				}}
			/>
			<style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
		</div>
	);
};

export default LoadingSpinner;
