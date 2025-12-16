let io: IntersectionObserver | null = null;

function initReveal() {
	const prefersReduced =
		window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false;

	const items = Array.from(
		document.querySelectorAll<HTMLElement>('[data-reveal]')
	);

	// Reset state for newly-swapped DOM
	items.forEach((el) => el.classList.remove('is-visible'));

	if (io) io.disconnect();

	if (prefersReduced) {
		items.forEach((el) => el.classList.add('is-visible'));
		return;
	}

	io = new IntersectionObserver(
		(entries) => {
			for (const e of entries) {
				if (e.isIntersecting) {
					(e.target as HTMLElement).classList.add('is-visible');
					io?.unobserve(e.target);
				}
			}
		},
		{ threshold: 0.15 }
	);

	items.forEach((el) => io!.observe(el));
}

// Run on first load
initReveal();

// Re-run after client-side navigation swaps in new DOM
document.addEventListener('astro:after-swap', initReveal);
document.addEventListener('astro:page-load', initReveal);
