// iterate through results, compare value at winner
// [homeTeam, awayTeam] --> 1 in results means that the hometeam won, 0 means away team won

function tournamentWinner(competitions, results) {
    const scoreTotals = {};
    let teamThatGetsPoints = competitions[0][results[0]];
    scoreTotals[teamThatGetsPoints] = 3
    let winner = teamThatGetsPoints;
    for (let i = 1; i < results.length; i++) {
        if (scoreTotals.hasOwnProperty(teamThatGetsPoints)) {
            scoreTotals[teamThatGetsPoints] += 3;
        }
        else { scoreTotals[teamThatGetsPoints] = 3 };
        if (scoreTotals[winner] < scoreTotals[teamThatGetsPoints]) {
            winner = teamThatGetsPoints;
        }
    }
    return winner;
}
