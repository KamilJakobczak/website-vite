import { useEffect, useRef } from 'react';

export default function JapaneseProject() {
	const iframeRef = useRef<HTMLIFrameElement>(null);

	useEffect(() => {
		const iframe = iframeRef.current;
		if (!iframe) return;

		const resizeIframe = () => {
			try {
				const doc =
					iframe.contentDocument || iframe.contentWindow?.document;
				if (doc) {
					iframe.style.height =
						doc.documentElement.scrollHeight + 'px';
				}
			} catch {
				// cross-origin fallback
			}
		};

		iframe.addEventListener('load', resizeIframe);
		window.addEventListener('resize', resizeIframe);

		return () => {
			iframe.removeEventListener('load', resizeIframe);
			window.removeEventListener('resize', resizeIframe);
		};
	}, []);

	return (
		<iframe
			ref={iframeRef}
			src='/japanese/index.html'
			title='Japanese Learning App'
			scrolling='no'
			style={{
				width: '100%',
				border: 'none',
				overflow: 'hidden',
				background: 'rgb(243, 250, 255)',
			}}
		/>
	);
}
