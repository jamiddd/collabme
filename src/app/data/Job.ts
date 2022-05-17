export interface Job {
	id: number;
	name: string;
	location: string;
	duration: string;
	description: string;
	responsibilities: string[];
	minQualifications: string[];
	prefQualifications: string[];
	image?: string;
	createdAt: Date;
}
