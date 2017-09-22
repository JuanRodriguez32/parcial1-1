var express = require('express');
var router = express.Router();

/* GET home page. */
var GitHubApi = require("github");
  
// TODO: optional authentication here depending on desired endpoints. See below in README.
router.get('/seguidores/:user', function(req, res, next) {
	
	var github = new GitHubApi({}); 
	
	github.users.getFollowingForUser({
    	username: req.params.user
	}, function(err, data) {
    	res.json(data)
	});
});



module.exports = router;
