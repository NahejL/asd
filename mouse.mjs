
import Model from "./model.mjs"
import View from "./view.mjs"



export default class Mouse extends Model {

	constructor () { super() 

		const names = [ "click", "dbclick", "mousemove" ]

		for( const name of names ) {

			let entry, { listener } = entry = this[name] = {
				listener ( event ) { entry.state = event },
				state: null, 
				}

			window.addEventListener( name, listener )

			}

		}

	get x () { return this.mousemove.state.x }
	get y () { return this.mousemove.state.y }

	}

Mouse.mixin( class MouseView extends View {

	x = 'this x'

	} )

