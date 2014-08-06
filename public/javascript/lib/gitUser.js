$(document).ready(function(){
	$('form').on('submit', function(event){
		event.preventDefault();
		var url = 'https://api.github.com/users/' + $('#username').val();

		$.get(url,function(user){

			$('<li>' + ('<img src='+user.avatar_url+'>') + ('<spam id="login">'+ 'User: '+user.login+'</spam>') + '<spam id="repo">'+'Repos: '+(user.public_repos)+"</spam>" + '</li>').prependTo('ul');



		}).fail(function(){
			alert('invalid username' + $('#username').val());
		}).always(function(){
			$('#username').val('')
		})

	});
});