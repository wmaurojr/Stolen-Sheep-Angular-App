(function($){ 
     $.fn.extend({  
         airport: function(array) {
			
			var self = $(this);
			var chars = ['a','b','c','d','e','f','g',' ','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','-'];
			var longest = 0;
			var items = items2 = array.length;

			function pad(a,b) { return a + new Array(b - a.length + 1).join(' '); }
			
			$(this).empty();
			
			while(items--)
				if(array[items].length > longest) longest = array[items].length;

			while(items2--)
				array[items2] = pad(array[items2],longest);
				
			spans = longest;
			while(spans--)
				$(this).prepend("<span class='c" + spans + "'></span>");
				
			var var1;
			var var2;
			var var3;	
			
			function testChar(a,b,c,d){
				if(c >= array.length)
					var1 = setTimeout(function() { testChar(0,0,0,0); }, 1000);				
				else if(d >= longest)
					var2 = setTimeout(function() { testChar(0,0,c+1,0); }, 1000);
				else {
					$(self).find('.c'+a).html((chars[b]==" ")?"&nbsp;":chars[b]);
					var3 = setTimeout(function() {
						if(b > chars.length)
							testChar(a+1,0,c,d+1);
						else if(chars[b] != array[c].substring(d,d+1).toLowerCase())
							testChar(a,b+1,c,d);
						else
							testChar(a+1,0,c,d+1);
					}, 20);
				}
				clearTimeout(var1);
				//clearTimeout(var2);
				//clearTimeout(var3);
			}
			
			testChar(0,0,0,0);
        } 
    }); 
})(jQuery);