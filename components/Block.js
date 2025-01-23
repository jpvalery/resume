import Image from 'next/image';

export default function Block({
	title,
	subtitle,
	logo,
	start,
	end,
	graduation,
}) {
	return (
		<section className="mb-4.5 break-inside-avoid">
			<header className="grid grid-flow-col items-center justify-start gap-2">
				<div className="h-10 w-10">
					{logo && (
						<Image
							src={logo}
							alt={title}
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
				<div>
					<p className="leading-snugish text-lg font-semibold text-zinc-800">
						{title}
					</p>
					<div className="inline-flex items-baseline gap-2">
						<p className="text-sm leading-normal text-zinc-700">{subtitle}</p>
						<p className="text-xs leading-normal text-zinc-600">
							{graduation != undefined
								? `${graduation}`
								: end == ''
								? `since ${start}`
								: `${start} - ${end}`}
						</p>
					</div>
				</div>
			</header>
		</section>
	);
}
