exports.controller = {
	index:function(){
		bs.get( function(data){bs.Dom('#doc').S( 'html', bs.markdown(data) );}, Array.prototype.join.call( arguments, '/' ) + '.html' );
	}
};