let sectionObserver: IntersectionObserver | null = null;

let scrollHandler: (() => void) | null = null;
let resizeHandler: (() => void) | null = null;

function setActiveNav(key: string | null) {
	const links = Array.from(
		document.querySelectorAll<HTMLElement>('[data-nav-link]')
	);
	links.forEach((a) => {
		const isActive = a.dataset.navLink === key;
		a.classList.toggle('is-active', isActive);
		a.toggleAttribute('aria-current', isActive);
		if (isActive) a.setAttribute('aria-current', 'page');
	});
}

function initActiveNav() {
	if (sectionObserver) sectionObserver.disconnect();

	const path = window.location.pathname;
	// If you're on a project page, keep "Projects" active
	if (path.includes('/projects/')) {
		setActiveNav('projects');
		return;
	}
	// If you're on CV page, keep "CV" active
	if (path.endsWith('/cv') || path.endsWith('/cv/')) {
		setActiveNav('cv');
		return;
	}

	// Home page: highlight based on visible section
	const ids = ['projects', 'about', 'contact'];
	const sections = ids
		.map((id) => document.getElementById(id))
		.filter(Boolean) as HTMLElement[];

	if (!sections.length) {
		setActiveNav(null);
		return;
	}

	sectionObserver = new IntersectionObserver(
		(entries) => {
			// pick the most visible intersecting section
			const visible = entries
				.filter((e) => e.isIntersecting)
				.sort(
					(a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0)
				)[0];

			if (visible?.target?.id) setActiveNav(visible.target.id);
		},
		{
			// triggers a bit before the section fully hits the top
			rootMargin: '-35% 0px -55% 0px',
			threshold: [0.05, 0.15, 0.3],
		}
	);

	sections.forEach((s) => sectionObserver!.observe(s));
}

function initScrollProgress() {
	const bar = document.getElementById('scroll-progress') as HTMLElement | null;
	if (!bar) return;

	const update = () => {
		const doc = document.documentElement;
		const max = doc.scrollHeight - window.innerHeight;
		const top = window.scrollY || doc.scrollTop || 0;
		const p = max > 0 ? top / max : 0;
		bar.style.transform = `scaleX(${Math.min(1, Math.max(0, p))})`;
	};

	// Remove old listeners if this is being re-initialised after a page swap
	if (scrollHandler) window.removeEventListener('scroll', scrollHandler);
	if (resizeHandler) window.removeEventListener('resize', resizeHandler);

	let ticking = false;
	scrollHandler = () => {
		if (ticking) return;
		ticking = true;
		requestAnimationFrame(() => {
			update();
			ticking = false;
		});
	};

	resizeHandler = () => update();

	window.addEventListener('scroll', scrollHandler, { passive: true });
	window.addEventListener('resize', resizeHandler);

	update();
}

function initNavAndProgress() {
	initActiveNav();
	initScrollProgress();
}

// First load
initNavAndProgress();

// Re-run after Astro client-side navigations
document.addEventListener('astro:page-load', initNavAndProgress);
document.addEventListener('astro:after-swap', initNavAndProgress);
