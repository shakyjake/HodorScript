function hodor(h){
	var o;
	o = new XMLHttpRequest();
	o.open("GET", h, true);
	o.onreadystatechange = function (){
		if(o.readyState === 4){
			if(o.status === 200 || o.status == 0){
				var d,or,ho,dor,hodo,r;
				d = o.responseText;
				d = d.split(' ');
				or = '';
				ho = d.length;
				dor = 0;
				hodo = new Array();
				hodo = [' ','var ',',',';',':','!','(',')','{','}',"'",'"','&&','||','%','[',']','-','_','=','+','-','*','/','.','$','0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
				while(ho > dor){
					r = d[dor].length * 0.2;
					or += hodo[r-1];
					dor += 1;
				}
				eval(or);
			}
		}
	}
	o.send(null);
}