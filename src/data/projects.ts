export type Project = {
	slug: string;
	title: string;
	year: number;
	team: 'Solo' | 'Group';
	type: 'University' | 'Personal';
    role: string;
    engine: "Unity" | "Unreal Engine" | "Other";
	imageUrl: string; // placeholder for now
	summary: string;
};

export const projects: Project[] = [
	{
		slug: 'card-clicker',
		title: 'Card Clicker',
		year: 2025,
		team: 'Solo',
		type: 'University',
		role: 'Gameplay Designer / UI/UX Designer / Programmer',
		engine: 'Unity',
		imageUrl: 'https://placehold.co/800x500?text=Card+Clicker',
		summary:
			'Card Clicker is a 2D Clicker/Idle game created in Unity. It was focused on providing a clear and readable experience for the player. Readability is important for this genre of games as they are heavily information based and the user needs easy access to this information to make decisions.',
	},
	{
		slug: 'deathtrap-dungeon',
		title: 'Deathtrap Dungeon',
		year: 2025,
		team: 'Solo',
		type: 'University',
		role: 'Level Designer / Gameplay Designer',
		engine: 'Unity',
		imageUrl: 'https://placehold.co/800x500?text=Deathtrap+Dungeon',
		summary:
			'Deathtrap Dungeon is a simple 2D Platformer that was my first experience creating a fully fledged 2D game in Unity. The game features simple platformer mechanics like moving platforms and enemies, collectibles like coins as well as key and door mechanics. The game features two distinct levels with various types of enemies in each.',
	},
	{
		slug: 'elemental-invaders',
		title: 'Elemental Invaders',
		year: 2025,
		team: 'Group',
		type: 'University',
		role: 'Artist / Gameplay Designer',
		engine: 'Unreal Engine',
		imageUrl: 'https://placehold.co/800x500?text=Elemental+Invaders',
		summary:
			"Elemental Invaders is a 3D Arcade Shoot 'Em Up style game developed in Unreal Engine that added a unique twist to the classic game Space Invaders. This was my first time working in a team on a major project, it served as a learning experience in both team work and how to design and develop games for Unreal Engine.",
	},
];
