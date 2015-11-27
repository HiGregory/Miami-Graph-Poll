// This code will run when Miami Poll starts
Meteor.startup(function() {

  // Sample data shows if there are no polls created
  if (Polls.find().count() === 0) {

    // creates the sample polls
    var samplePolls = [
      {
        question: 'Who is Mr. 305 ?',
        choices: [
          { text: 'Gregory Johnson', votes: 1 },
          { text: 'Pitbull', votes: 0 },
          { text: 'Dwayne Wade', votes: 0 }
        ]
      },
      {
        question: 'Why is Miami awesome?',
        choices: [
          { text: 'Food', votes: 0 },
          { text: 'Music', votes: 0 },
          { text: 'Weather', votes: 0 }
        ]
      }
    ];

    // loop over each sample poll and insert into database
    _.each(samplePolls, function(poll) {
      Polls.insert(poll);
    });

  }

});