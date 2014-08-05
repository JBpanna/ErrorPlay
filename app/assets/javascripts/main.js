$(document).ready(function(){

	$('.error_number').keypress(function(e){
	 	if (e.keyCode==13)
	 		BadNumber($('.error_number').val());
	});

	function BadNumber(num){
		try { if (badNum=isNaN(num))
			throw "why?"
		} catch(err){
			alert ("Please enter a number.");
		} finally{
			console.log ('The BadNumber function is done now.');
		}

		$.ajax({
			url: '/main/number',
			data: { errorNumber: ($('.error_number').val())},
			type: 'POST'
		}).done(function(data){
			console.log(data);
		});
	};


	$('.nothing').click(function(){
		var x = {};
			x.first();
	});

		try {
			var x = {};
			x.first();
			} catch (err){
				alert (err.message, err.lineNumber);
			}
			finally {
				console.log('all done!');
			}
});

window.onerror = function(msg, url, line){
	alert ('Error: ' + msg + ' Script: ' + url + ' Line: ' + line);
	return true;
}