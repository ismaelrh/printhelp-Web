$(document).ready(function() {

// the basics
// ----------

var substringMatcher = function(strs) {
  return function findMatches(q, cb) {
    var matches, substringRegex;

    // an array that will be populated with substring matches
    matches = [];

    // regex used to determine if a string contains the substring `q`
    substrRegex = new RegExp(q, 'i');

    // iterate through the pool of strings and for any string that
    // contains the substring `q`, add it to the `matches` array
    $.each(strs, function(i, str) {
      if (substrRegex.test(str)) {
        // the typeahead jQuery plugin expects suggestions to a
        // JavaScript object, refer to typeahead docs for more info
        matches.push({ value: str });
      }
    });

    cb(matches);
  };
};


// multiple datasets
// -----------------

/*var nbaTeams = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.obj.whitespace('team'),
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  prefetch: './data/nba2.json'
});

var nhlTeams = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.obj.whitespace('team'),
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  prefetch: './data/nhl.json'
});

nbaTeams.initialize();
nhlTeams.initialize();

$('#multiple-datasets .typeahead').typeahead({
  highlight: true,
  minLength: 0
},
{
  name: 'nba-teams',
  displayKey: 'team',
  source: nbaTeams.ttAdapter(),
  templates: {
	empty: [
      '<div class="empty-message">',
      'unable to find any Best Picture winners that match the current query',
      '</div>'
    ].join('\n'),
    header: '<h3 class="league-name">NBA Teams</h3>',
    suggestion: Handlebars.compile('<p>{{team}} - {{year}}</p>')
  }
},
{
  name: 'nhl-teams',
  displayKey: 'team',
  source: nhlTeams.ttAdapter(),
  templates: {
    header: '<h3 class="league-name">NHL Teams</h3>'
  }
});*/



});