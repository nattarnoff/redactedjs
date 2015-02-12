javascript:R(function(){
  var _d = document,
      _w = window,
  root = _d.querySelectorAll('body,p,h1,h2,h3,h4,h5,h6,em,b,i,strong,legend,form,label,blockquote,header,footer,small,cite,aside,div,span,article'),
  newStyle = _d.createElement('style'),
  parentNode = _d.head,
  color = '#000',
  style = _d.createTextNode('.redacted{color:'+color+
  ';background-color:'+color+';padding: 3px;}'),
  list = ['fuck', '[^cl]ass[^et]', 'shit', 'bitch', 'fag', 'dyke', 
    'tranny', 'cunt',  'rape', 'murder', 'tits', 'piss', 'pussy', 'dick', 'cock', 
    'nigger', 'spic', 'cracker', 'coon', 'dago', 'damn', 'gook', 'heeb', 'dike',
    'homo', 'kike', 'jizz', 'kyke', 'mick', 'muff', 'paki', 'poon', 'slut', 
    'retard','twat','wank', '[^do]cum[^ment]', 'splooge', 'nigga'],
  regex = new RegExp(list.join('|'), 'ig');
  console.log(root);
  newStyle.appendChild(style);
  parentNode.insertBefore(newStyle, parentNode.querySelector('link'));
  for(i=0;i<root.length;i++){
    root[i].innerHTML = root[i].innerHTML.replace(regex, '<mark class="redacted">&%$@#</mark>');
  };
})();
