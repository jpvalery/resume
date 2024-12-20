export default function SectionTitle({ title, content }) {
	return (
		<>
			<section className="mb-4.5 break-inside-avoid">
				<header>
					<h3 className="text-base font-medium capitalize leading-snugish text-zinc-800">
						{title}
					</h3>
				</header>
				<div className="my-2 last:pb-1.5">
					<ul className="flex flex-wrap gap-2 text-md leading-relaxed">
						{content.map((item) => {
							return (
								<li
									className="bg-gray-200 px-2.5 text-base text-gray-750 print:bg-white print:border-inset"
									key={item}
								>
									{item}
								</li>
							);
						})}
					</ul>
				</div>
			</section>
		</>
	);
}
