import Image from 'next/image';

export default function Experience({ company, logo, location, roles }) {
	return (
		<section className="grid break-inside-avoid grid-flow-row gap-2">
			<header className="grid grid-flow-col items-center justify-start gap-2">
				<div className="h-10 w-10">
					{logo && (
						<Image
							src={logo}
							alt={company}
							width="400"
							height="400"
							className="rounded-sm"
							style={{
								maxWidth: '100%',
								height: 'auto',
								objectFit: 'cover',
							}}
						/>
					)}
				</div>
				<div className="gap grid grid-flow-row">
					<h3 className="leading-snugish text-lg font-semibold text-zinc-800">
						{company}
					</h3>
					<p className="leading-snugish text-sm text-zinc-700">{location}</p>
				</div>
			</header>
			<section>
				{roles.map((role) => {
					return (
						<div className="pb-2" key={role.title}>
							<div className="inline-flex items-baseline gap-2">
								<p className="text-md leading-normal font-medium text-zinc-950">
									{role.title.slice(0, 32)}
								</p>
								<p className="text-xs leading-normal text-zinc-600">
									{role.end == ''
										? `since ${role.start}`
										: `${role.start} - ${role.end}`}
								</p>
							</div>
							<ul className="space-y-0.5 text-xs leading-normal text-pretty text-zinc-800">
								{role.description &&
									role.description.map((detail, index) => {
										return <li key={index}>· {detail}</li>;
									})}
							</ul>
						</div>
					);
				})}
			</section>
		</section>
	);
}
