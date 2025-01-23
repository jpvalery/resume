export default function SectionTitle({ title, content }) {
	return (
		<>
			<section className="mb-4.5 break-inside-avoid">
				<header>
					<h3 className="leading-snugish text-base font-medium text-zinc-800 capitalize">
						{title}
					</h3>
				</header>
				<div className="my-2 last:pb-1.5">
					<ul className="text-md flex flex-wrap gap-2 leading-relaxed">
						{content.map((item) => {
							return (
								<li
									className="text-gray-750 print:border-inset bg-gray-200 px-2.5 text-base print:bg-white"
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
