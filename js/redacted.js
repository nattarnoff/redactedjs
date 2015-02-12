function redacted(options){
  var _d = document,
      _w = window;
  options = options || {};
  options.root = options.root || 'body';
  console.log(options.root);
  options.color = options.color || '#000';
  options.list = options.list || ['fuck', '[^cl]ass[^et]', 'shit', 'bitch', 'fag', 'dyke', 
    'tranny', 'cunt',  'rape', 'murder', 'tits', 'piss', 'pussy', 'dick', 'cock', 
    'nigger', 'spic', 'cracker', 'coon', 'dago', 'damn', 'gook', 'heeb', 'dike',
    'homo', 'kike', 'jizz', 'kyke', 'mick', 'muff', 'paki', 'poon', 'slut', 
    'retard','twat','wank', '[^do]cum[^ument]', 'splooge', 'nigga'];
  var newStyle = _d.createElement('style'),
      style = _d.createTextNode(options.root+' .redacted{color:'+options.color+
      ';background-color:'+options.color+';padding: 3px;}');
      parentNode = _d.head;
  newStyle.appendChild(style);
  parentNode.insertBefore(newStyle, parentNode.querySelector('link'));
  var root = _d.querySelector(options.root);
  var regex = new RegExp(options.list.join('|'), 'ig');
  root.innerHTML = root.innerHTML.replace(regex, '<mark class="redacted">&%$@#</mark>');
};

