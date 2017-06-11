// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

var quotes = [
{ 
	quote: 'You can make more friends in two months by becoming interested in other people than you can in two years by trying to get other people interested in you.',
    source: 'Dale Carnegie',
    citation: 'How to Win Friends and Influence People',
    year: 1986
},
{
	quote: 'I went to a bookstore and asked the saleswoman, "Where\'s the self-help section?" She said if she told me, it would defeat the purpose.' 
	source: 'George Carlin'
},
{
	quote: 'Anger, resentment and jealousy doesn\'t change the heart of others-- it only changes yours.'
	source: 'Shannon L. Alder',
	citation: '300 Questions to Ask Your Parents Before It\'s Too Late'
}
{
	quote: 'The only time you fail is when you fall down and stay down',
	source: 'Cosmic Ordering: You can be successful'
}
{
	quote: 'Always be fearless. Walk like lion, talk like pigeons, live like elephants and love like an infant child.'
	source: 'Santosh Kalwar',
	citation: 'Quote Me Everyday',
	year: 2010
}
];

