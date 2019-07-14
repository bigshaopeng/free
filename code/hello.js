// exports.word =  function(){
// 	console.log('helloword')
// }

function hello(){
	var name = '';
	this.setName = (value) => {
		name = value;
	}
	this.getName = () => {
		console.log(name)
	}
}

module.exports = hello