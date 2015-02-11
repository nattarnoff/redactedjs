# Redacted.js
JS library to remove foul language from screens for demo purposes. 

I've had a few times in my career instances where someone has used a lorem ipsum
generator or written text into a web page that isn't family friendly. This has
resulted in me including in slides or presentations to stake holders screens
including swear words.

Redacted.js is a small library to simply blackout those words (or an array of
words you pass) so they don't appear in your page.

## Reminder

This is to remove words from a web page. In order to do so, a set list needs to
be included to match against. This list has some very nasty words in it. I am not trying to
offend anyone looking at the code, I'm am trying to remove these from web pages. 

## Use

Include `redacted.js` on your page.

Once the DOM is loaded, call the function `redacted()`. Examples - 

### jQuery

`$(document).ready(function(){
  redacted();
});`

### Vanilla JS

`document.addEventListener('DOMContentLoaded', function(){
redacted();
});
`
You can pass it options as well. You can change the list of words to redact, the
color of the redaction, and the root of what to redact. 

Root will only match on the first instance right now.

List takes an array of words.

Color can take hexidecimal, rgba, or keywords.

`redacted({
  color: '#ff0000',
  list: ['Hannibal', 'Monroe', 'Washington', 'Jefferson'],
  root: '.post'
});
`
