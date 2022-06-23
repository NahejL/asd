
export default class Async {

	resolve = null
	promise = null

	constructor ( call ) {

		let initPromise = () => this.promise = new Promise( resolve => this.resolve = (...args) => {

			let promise = this.promise

			initPromise()

			resolve( ...args )
			} )

		initPromise()

		call( this )

		}

	async * [Symbol.asyncIterator] () {
		while( true ) {

			let result = await this.promise
		
			yield result 
			} }

	then ( ...args ) { this.promise.then( ...args ) }

	}