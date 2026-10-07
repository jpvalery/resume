// Prints the built site to public/resume.pdf, the file served at /pdf.
// Run locally (`pnpm pdf`) after content changes: the page uses the system
// font, so printing on a build server would change the layout.
import { writeFile } from "node:fs/promises";
import { preview } from "astro";
import { chromium } from "playwright";

const OUTPUT = new URL("../public/resume.pdf", import.meta.url);
const PORT = 4329;
// Letter at 96 dpi, the layout Chromium uses when printing
const LETTER = { width: 816, height: 1056 };

const server = await preview({ server: { port: PORT }, logLevel: "error" });
const browser = await chromium.launch();

try {
	const page = await browser.newPage({ viewport: LETTER });
	await page.goto(`http://localhost:${PORT}/`, { waitUntil: "networkidle" });
	await page.emulateMedia({ media: "print" });

	// Content past the second column would print off the page
	const overflow = await page.evaluate(() => {
		const columns = document.querySelector(".col-fill-auto");
		const right = columns.getBoundingClientRect().right;
		return (
			Math.max(
				...[...columns.querySelectorAll("*")].map(
					(el) => el.getBoundingClientRect().right,
				),
			) - right
		);
	});
	if (overflow > 1) {
		throw new Error(`Content overflows the page by ${Math.round(overflow)}px`);
	}

	const pdf = await page.pdf({ format: "Letter", printBackground: true });
	const pages = pdf.toString("latin1").match(/\/Type\s*\/Page[^s]/g).length;
	if (pages !== 1) {
		throw new Error(`Expected 1 page, got ${pages}`);
	}

	await writeFile(OUTPUT, pdf);
	console.log(`Wrote public/resume.pdf (${Math.round(pdf.length / 1024)} KB)`);
} finally {
	await browser.close();
	await server.stop();
}
