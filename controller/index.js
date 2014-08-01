exports.controller = {
	index:function( v0, v1 ){
		var DOCS, doc, mk, i;
		DOCS = [
			{title:"bsJS", uri:"./bsJS/bsJS.json"},
			{title:"bsPHP", uri:"./bsPHP/bsPHP.json"}
		],
		mk = function(d){
			var ver, items, item, links, link, id, t0;
			bs.Dom('#stage').S('>', bs.tmpl( '<h1><a href="./#">@title@</a></h1><ul id="@title@"></ul>', {title : d.title} ) );
			//console.log(d)
			for(ver in d.doc){
				t0 = bs.Dom( '@#' + d.title ).S('>', bs.tmpl( '<li>v.@ver@</li>', {ver : ver} ) );
				id = d.title + ver.replace('.', '');
				bs.Dom( t0 = t0[0] ).S('>', bs.tmpl( '<ul id="@id@"></ul>', {id : id} ) );
				items = d.doc[ver];
				for(item in items){
					t0 = bs.Dom( '@#'+id ).S('>', bs.tmpl( '<li>@item@</li>', {item : item} ) );
					bs.Dom( t0 = t0[0] ).S('>', bs.tmpl( '<ul id="@id@"></ul>', {id : id+item} ) );
					
					links = items[item];
					for(link in links){
						t0 = window.location.pathname + '#!/' + [d.title, ver, item, links[link]].join('/');
						t0 = bs.Dom( '@#'+id+item ).S( '>', bs.tmpl( '<li><a href="@path@">@link@</a></li>', {link : link, path:t0} ) );
						//bs.Dom( t0[0] ).S('click', md( d.title, ver, item, links[link] ) );
					}
				}
			}
		};
		console.log(bs.router('file'));
		console.log(bs.router('virtual'));
		console.log(bs.router('arguments'));
		console.log(bs.router('method'));
		bs.Dom('#stage').S('html', '');
		bs.Dom('#contents').S('html', '');
		for( i = 0; i < DOCS.length; i++ ){
			doc = DOCS[i],
			rs = bs.get( null, doc.uri );
			if( !rs ) console.error( doc.title + '.json 파일이 없습니다.' );
			doc.doc = JSON.parse(rs),
			mk(doc);
		}
		
		
	}
};