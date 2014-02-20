(function (root, factory) {
	if (typeof exports === 'object' && exports) {
		factory(exports) // CommonJS
	}
	else {
		var CatFacts = function() {}
		factory(CatFacts)
		root.CatFacts = CatFacts // <script>
	}
} (this, function (CatFacts) {

CatFacts.getFact = function() {
	return "25% of Americans don't know that Earth revolves around Sun."
}

}))
