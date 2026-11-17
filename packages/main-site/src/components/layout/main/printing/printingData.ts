import king_of_tokyo from '../../../../assets/images/printing/KingTokyo_webp.webp';
import tabletop from '../../../../assets/images/printing/tabletop_webp.webp';
import token_bowls from '../../../../assets/images/printing/token_bowls_webp.webp';
import virus from '../../../../assets/images/printing/virus_webp.webp';

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
		image: tabletop,
		imageAlt: 'Custom board game insert for Tabletop Inc. Deluxe',
		title: 'Tabletop Inc. Insert',
		overlay: 'Custom-designed insert with card trays and token organizers',
	},
	{
		id: 'print-2',
		image: virus,
		imageAlt: 'Custom board game insert for Virus!',
		title: 'Virus! All-In-One Insert',
		overlay: 'Precision-fit compartments, card and roll & write in one box',
	},
	{
		id: 'print-3',
		image: king_of_tokyo,
		imageAlt: 'Custom board game insert for King of Tokyo: Dark Edition',
		title: 'King of Tokyo: Dark Edition Insert',
		overlay: 'Main game and expansions in one box',
	},
	{
		id: 'print-4',
		image: token_bowls,
		imageAlt: 'Custom token bowls',
		title: 'Token Bowls',
		overlay: 'Stackable token bowls with tray',
	},
];
