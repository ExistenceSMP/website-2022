export function setBackgroundColor(
	rgb: [number, number, number],
	theme?: [number, number, number]
) {
	if (!theme) theme = rgb;

	// Set theme-color
	document.querySelectorAll(`[name="theme-color"]`).forEach((el) => el.remove());
	const meta = document.createElement('meta');
	meta.setAttribute('name', 'theme-color');
	meta.setAttribute('content', rgba(...rgb, 0.4));

	document.head.appendChild(meta);

	// Define all colors
	const bodyBg = rgba(...rgb, 0.1);
	const transparentBg = `rgba(${rgb.join(', ')}, 0.1)`;
	const altBg = `rgba(${rgb.join(', ')}, 0.1)`;
	const colorGray = `rgba(${rgb.map((v) => Math.max(v, 0)).join(', ')}, 1)`;
	const themeColor = rgba(...theme, 1);

	// Inject colors into DOM
	document.body.setAttribute(
		'style',
		`
		--body: ${bodyBg}; 
		--content-alt: ${transparentBg}; 
		--content-alt2: ${altBg}; 
		--text: ${colorGray};
		--theme: ${themeColor}
		`
	);

	// Force titles to take the color
	document.querySelectorAll('h1').forEach((title) => {
		title.style.color = `rgb(${rgb.join(', ')})`;
	});
}

export function rgba(r, g, b, a, base = 'white') {
	const color = `rgba(${r}, ${g}, ${b}, ${a})`;
	const canvas = document.createElement('canvas');
	const ctx = canvas.getContext('2d');
	canvas.width = 1;
	canvas.height = 1;

	ctx.fillStyle = base;
	ctx.fillRect(0, 0, 1, 1);

	ctx.fillStyle = color;
	ctx.fillRect(0, 0, 1, 1);

	const [r2, g2, b2] = Array.from(ctx.getImageData(0, 0, 1, 1).data).slice(0, 3);
	return `rgb(${r2}, ${g2}, ${b2})`;
}
