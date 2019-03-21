const test = require(`tape`)

const makeTree = require(`./`)

const TEST = [
	[
		[ `wat` ],
		{},
		{
			wat: {},
		},
	],
	[
		[ `wat`, `eh` ],
		{},
		{
			wat: {
				eh: {},
			},
		},
	],
	[
		[ `wat`, `eh` ],
		{
			wat: {
				um: `yes`,
			},
		},
		{
			wat: {
				um: `yes`,
				eh: {},
			},
		},
	],
	[
		[ `wat`, `eh`, `huh` ],
		{
			wat: {
				um: `really?`,
				eh: `gonna go away`,
				yeah: {
					yup: `sure`,
				},
			},
			ok: {},
		}, {
			wat: {
				um: `really?`,
				eh: {
					huh: {},
				},
				yeah: {
					yup: `sure`,
				},
			},
			ok: {},
		},
	],
]

test(`creating object hierarchy`, t => {
	t.plan(TEST.length)
	TEST.forEach(testCase => {
		const input = testCase[0]
		const expectedOutput = testCase[2]
		const alteredObject = testCase[1]
		makeTree(input, alteredObject)
		t.deepEqual(alteredObject, expectedOutput)
	})
	t.end()
})

test(`output is the existing child`, t => {
	const child = {}
	const input = { hi: { yes: child } }
	t.equal(makeTree([ `hi`, `yes` ], input), child)
	t.end()
})

test(`output is the new child`, t => {
	const input = {
		hi: {},
	}

	const child = makeTree([ `hi`, `yes` ], input)

	t.equal(input.hi.yes, child)
	t.end()
})
