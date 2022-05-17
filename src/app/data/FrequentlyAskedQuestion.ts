export interface FrequentlyAskedQuestion {
	id: string;
	question: string;
	category: string;
	answer?: string;
	answeredBy?: string;
	updatedAt: Date;
	createdAt: Date;
}
