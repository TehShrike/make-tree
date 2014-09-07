
// *shrug*
function isReasonableObject(obj) {
	return typeof obj !== 'undefined'
		&& typeof obj !== 'string'
		&& typeof obj !== 'number'
		&& obj !== null
}

module.exports = function makeObjectTree(keysArray, obj) {
	return keysArray.reduce(function(parent, key) {
		var child = parent[key]

		if (!isReasonableObject(child)) {
			child = {}
			parent[key] = child
		}

		return child
	}, obj || {})
}
