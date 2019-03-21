const isPlainObject = require(`is-plain-obj`)

module.exports = function makeObjectTree(keysArray, obj) {
	return keysArray.reduce((parent, key) => {
		let child = parent[key]

		if (!isPlainObject(child)) {
			child = {}
			parent[key] = child
		}

		return child
	}, obj || {})
}
