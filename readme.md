Turns an array of strings `[ 'grandparent', 'parent', 'child' ]` into a tree of objects:

	{
		grandparent: {
			parent: {
				child: {

				}
			}
		}
	}

With one simple function call:

	var makeTree = require('make-tree')

	var child = makeTree([ 'grandparent', 'parent', 'child' ], {})

# makeTree(ary, obj)

- *ary*: an array of strings representing keys.  If any of those keys does not exist in the hierarchy, they will be created as an empty object.
- *obj*: the object to be modified by the creation of new descendants

Returns the final object in the hierarchy represented in the array.

	var inputObject = {
		parent: {
			child: {
				baby: 'goo!'
			}
		}
	}

	var child = makeTree([ 'parent', 'child' ], {parent: {child: {baby: 'goo!'}}})

	console.log(child) // => { baby: 'goo!' }

# License

[WTFPL](http://wtfpl2.com/)
