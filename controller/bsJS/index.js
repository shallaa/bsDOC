exports.controller = {
	index:function( v0, v1 ){
		var cache, root, uri;
		root = './bsJS/';
		cache = bs.data('uriCache') || {};
		uri = root + Array.prototype.slice.call(arguments).join('/');
		//console.log(Array.prototype.slice.call(arguments), v0, v1);
		bs.Dom('#contents').S( 'html', cache[uri] ? cache[uri] : cache[uri] = bs.markdown( bs.get( null, uri ) ) );
		bs.data('uriCache', cache);
	}
};