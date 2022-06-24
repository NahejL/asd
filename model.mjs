

export default class Model {

	constructor () {

		this[Model.mixins] = new Map

		for( const [ mixin, klass ] of new.target[Model.mixins] ) {

			console.log( klass, mixin )

			this[Model.mixins].set( mixin, new klass )

			}

		}

	static mixins = Symbol("Model's Target's mixins")
	static mixin ( klass ) {
		if( !Object.hasOwnProperty( this, Model.mixins ) ) {

			this[Model.mixins] = new Map

			}

		let mixin = Object.getPrototypeOf( klass )

		this[Model.mixins].set( mixin, klass )
		klass.model = this 

		}

	}


Model.Mixin = class Mixin {



	}