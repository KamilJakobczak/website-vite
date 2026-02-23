import { useEffect, useState } from 'react';

export function useMediaQuery(query: string) {
	const [matches, setMatches] = useState(
		() => window.matchMedia(query).matches,
	);

	useEffect(() => {
		const mql = window.matchMedia(query);
		const listener = (e: MediaQueryListEvent) => setMatches(e.matches);

		mql.addEventListener('change', listener);
		listener({ matches: mql.matches } as MediaQueryListEvent);

		return () => mql.removeEventListener('change', listener);
	}, [query]);

	return matches;
}
