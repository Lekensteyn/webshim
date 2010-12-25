jQuery.webshims.ready("form-message form-core",function(d,e,v,l,w){var g=d.support;if(g.validity){var j=e.inputTypes,p={};e.addInputType=function(a,c){j[a]=c};e.addValidityRule=function(a,c){p[a]=c};e.addValidityRule("typeMismatch",function(a,c,b,f){if(c==="")return false;f=f.typeMismatch;if(!("type"in b))b.type=(a[0].getAttribute("type")||"").toLowerCase();if(j[b.type]&&j[b.type].mismatch)f=j[b.type].mismatch(c,a);return f});var h=e.overrideValidationMessages,q=!g.requiredSelect||!g.numericDateProps||
h,x=["customError","typeMismatch","rangeUnderflow","rangeOverflow","stepMismatch","tooLong","patternMismatch","valueMissing","valid"],y=d.attr,r=d.fn.val,n=h?{value:1,checked:1}:{value:1},m=h?["textarea"]:[],z={radio:1,checkbox:1},k=function(a,c){if(a.form){var b=(a.getAttribute&&a.getAttribute("type")||a.type||"").toLowerCase();if(!h)if(!(!g.requiredSelect&&b=="select-one")&&!j[b])return;h&&!c&&z[b]&&a.name?d(l.getElementsByName(a.name)).each(function(){d.attr(this,"validity")}):d.attr(a,"validity")}};
e.defineNodeNamesProperty(["input","textarea","select"],"setCustomValidity",{value:function(a){a+="";this.setCustomValidity(a);if(q){d.data(this,"hasCustomError",!!a);k(this)}}});if(!v.noHTMLExtFixes&&!g.requiredSelect||h){d.extend(n,{required:1,size:1,multiple:1,selectedIndex:1});m.push("select")}if(!g.numericDateProps||h){d.extend(n,{min:1,max:1,step:1});m.push("input")}if(!g.requiredSelect){e.defineNodeNamesBooleanProperty(["select"],"required",{set:function(a,c){a.setAttribute("aria-required",
c?"true":"false")},init:true});e.addValidityRule("valueMissing",function(a,c,b,f){if(b.nodeName=="select"&&!c&&a.attr("required")&&a[0].size<2){if(!b.type)b.type=a[0].type;if(b.type=="select-one"&&d("> option:first-child:not(:disabled)",a).attr("selected"))return true}return f.valueMissing})}if(q){e.defineNodeNamesProperty(m,"validity",{get:function(a){var c=a.validity;if(!c)return c;var b={};x.forEach(function(i){b[i]=c[i]});if(!d.attr(a,"willValidate"))return b;var f=d(a),A={type:(a.getAttribute&&
a.getAttribute("type")||"").toLowerCase(),nodeName:(a.nodeName||"").toLowerCase()},B=r.call(f),C=!!d.data(a,"hasCustomError"),s;b.customError=C;if(b.valid&&b.customError)b.valid=false;else if(!b.valid){var t=true;d.each(b,function(i,o){if(o)return t=false});if(t)b.valid=true}d.each(p,function(i,o){b[i]=o(f,B,A,b);if(b[i]&&(b.valid||!s&&h)){a.setCustomValidity(e.createValidationMessage(a,i));b.valid=false;s=true}});b.valid&&a.setCustomValidity("");return b},set:d.noop});d.fn.val=function(){var a=r.apply(this,
arguments);this.each(function(){k(this)});return a};d.attr=function(a,c,b){var f=y.apply(this,arguments);n[c]&&b!==w&&a.form&&k(a);return f};if(l.addEventListener){l.addEventListener("change",function(a){k(a.target)},true);g.numericDateProps||l.addEventListener("input",function(a){k(a.target)},true)}var u=m.join(",");e.addReady(function(a,c){d(u,a).add(c.filter(u)).attr("validity")})}e.createReadyEvent("form-extend")}},true);
