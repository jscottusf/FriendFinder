let friends = require("../data/friends")

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        return res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
        var userScores = req.body.scores;
        console.log(userScores[0]);

        friends.push(req.body);
        // var absArr = [];
        // for (var i = 0; i < (friends.length - 1); i++) {
        //     var userScores = friends[friends.length].scores;
        //     var scores = friends[i].scores;
        //     var difference = 0
        //     for (var j = 0; j < scores.length; j++) {
        //         difference += Math.abs(scores[j] - userScores[j]);
        //     }
        //     absArr.push(difference);
        // }
        // console.log(absArr);
        // console.log(Math.min(parseInt(absArr)));
        // console.log(absArr.indexOf(parseInt(absArr)));
        // res.json(friends[absArr.indexOf(Math.min(parseInt(absArr)))]);
    })
}
