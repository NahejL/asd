
import Model from "./model.mjs"


export default class View extends Model.Mixin {

	constructor () { super()

		let view_ = document.createElement( "view-" )

		view_.textContent = new.target.model.name // Mouse

		document.body.appendChild( view_ )

		}


	}