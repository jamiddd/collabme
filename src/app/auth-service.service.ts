import {Injectable} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Observable, of, switchMap} from "rxjs";
import {User} from "./data/User";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {nanoid} from "nanoid";
import {User as FirebaseUser} from "@firebase/auth-types";

@Injectable({
	providedIn: 'root'
})
export class AuthServiceService {

	user$?: Observable<User|undefined>

	constructor(private auth: AngularFireAuth, private afs: AngularFirestore) {
		this.user$ = auth.authState.pipe(
			switchMap(user => {
				if (user) {
					return afs.doc<User>(`users/${user.uid}`).valueChanges();
				} else {
					return of(undefined)
				}
			})
		);
	}

	async signIn(email: string, password: string) {
		await this.auth.signInWithEmailAndPassword(email, password)
			.then((res) => {
				if (res.user) {
					this.user$ = this.afs.doc<User>(`users/${res.user.uid}`).valueChanges();
				} else {
					this.user$ = of(undefined);
				}
			});
	}

	getEmptyUser(name: string, firebaseUser: FirebaseUser): User {
		const now = Date.now()
		return {
			id: firebaseUser.uid,
			name: name,
			username: nanoid(20),
			email: firebaseUser.email ? firebaseUser.email : "",
			tag: "",
			about: "",
			photo: firebaseUser.photoURL ? firebaseUser.photoURL : "",
			token: "",
			postsCount: 0,
			collaborationsCount: 0,
			likesCount: 0,
			likedPostsCount: 0,
			likedUsersCount: 0,
			likedCommentsCount: 0,
			savedPostsCount: 0,
			createdAt: now,
			updatedAt: now,
			premiumState: -1,
			online: false,
			location: {
				latitude: 0.0,
				longitude: 0.0,
				address: "",
				geoHash: ""
			},
			interests: [],
			archivedProjects: [],
			collaborations: [],
			posts: [],
			postRequests: [],
			postInvites: [],
			chatChannels: [],
			blockedUsers: [],
			blockedBy: []
		};
	}

	async signUp(name: string, email: string, password: string) {
		await this.auth.createUserWithEmailAndPassword(email, password)
			.then((res) => {
					if (res.user) {
						this.afs.doc(`users/${res.user.uid}`).set(this.getEmptyUser(name, res.user), {merge: true});
					} else {
						// show that something went wrong.
					}
			}, error => {
				// console.error(error)
			});
	}

	googleSignIn() {
		//
	}

	async signOut() {
		await this.auth.signOut()
			.then(() => {

				this.user$ = of(undefined);
			}, () => {
				// show that sign out failed!
			});
	}

}
