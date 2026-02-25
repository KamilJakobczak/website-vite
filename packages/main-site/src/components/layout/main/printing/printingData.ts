import placeholder from '../../../../assets/images/dreams.jpg';

interface PrintItem {
	id: string;
	image: string;
	imageAlt: string;
	title: string;
	overlay?: string;
}

export const prints: PrintItem[] = [
	{
		id: 'print-1',
		image: placeholder,
		imageAlt: 'Custom board game insert for Wingspan',
		title: 'Wingspan Insert',
		overlay:
			'Custom-designed insert with card trays and token organizers',
	},
	{
		id: 'print-2',
		image: placeholder,
		imageAlt: 'Board game token organizer',
		title: 'Token Organizer',
		overlay: 'Precision-fit compartments, 0.2mm tolerance',
	},
	{
		id: 'print-3',
		image: placeholder,
		imageAlt: '3D printed miniature display stand',
		title: 'Miniature Display Stand',
		overlay: 'Modular display system for miniatures',
	},
	{
		id: 'print-4',
		image: placeholder,
		imageAlt: 'Custom dice tower',
		title: 'Dice Tower',
		overlay: 'Multi-level tower with felt-lined tray',
	},
	{
		id: 'print-5',
		image: placeholder,
		imageAlt: 'Card holder for board games',
		title: 'Card Holder',
		overlay: 'Angled display for easy reading during gameplay',
	},
	{
		id: 'print-6',
		image: placeholder,
		imageAlt: 'Modular terrain pieces',
		title: 'Terrain Set',
		overlay: 'Interlocking terrain tiles for tabletop RPGs',
	},
];
