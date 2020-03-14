let friends = require("../data/friends")

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        return res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
        var newUser = req.body;
        var newUserScores = req.body.scores;
        var absArr = [];
        for (var i = 0; i < friends.length; i++) {
            var databaseUserScores = friends[i].scores;
            var difference = 0;
            for (var j = 0; j < databaseUserScores.length; j++) {
                difference += (Math.abs(databaseUserScores[j] - newUserScores[j]))
            }
            absArr.push(difference);
        }
        var lowestAbs = Math.min(...absArr);
        var match = absArr.indexOf(lowestAbs);
        
        res.json(friends[match]);
        friends.push(newUser);
    })
}
