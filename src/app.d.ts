/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs#typescript
// for information about these interfaces
declare namespace App {
	interface Locals {
		// sveltekit default
		userid: string;

		// lucid
		user: any;
		session: string;
	}

	interface Platform { }

	interface Session {
		// lucid
		user: any;
	}

	interface Stuff { }
}
