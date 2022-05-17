import {MyLocation} from "./MyLocation";

export interface User {
	id: string;
	name: string;
	username: string;
	email: string;
	tag: string;
	about: string;
	photo: string;
	token: string;
	postsCount: number;
	collaborationsCount: number;
	likesCount: number;
	likedPostsCount: number;
	likedUsersCount: number;
	likedCommentsCount: number;
	savedPostsCount: number;
	createdAt: number;
	updatedAt: number;
	premiumState: number;
	online: boolean;
	location: MyLocation;
	interests: string[];
	archivedProjects: string[];
	collaborations: string[];
	posts: string[];
	postRequests: string[];
	postInvites: string[];
	chatChannels: string[];
	blockedUsers: string[];
	blockedBy: string[];
}
