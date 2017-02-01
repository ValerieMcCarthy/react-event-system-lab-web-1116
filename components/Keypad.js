const React = require('react')

class Keypad extends React.Component{
	constructor(){
		super()
		this.inputPassword = this.inputPassword.bind(this)
	}

	inputPassword(){
		console.log('Entering password...')
	}

	render(){
		return (
			<input type='password' onKeyUp={this.inputPassword}/>
			)
	}


}

module.exports = Keypad