/*!
 * Dynamic Fields
 *
 * Author: projesh sindurakar
 * Email: chkprojesh@gmail.com
 * 
 * Required
 * -----------------------------
 * jQuery and jQuery-UI
 *
 * Date: 2015-12-14
 */
$(document).ready(function() {
'use strict';
	var p = 0;

	$('#c').on('click', '#ap', function() {
		p++;
		// appending new project to header row
		$('.h')
			.append('<div class="col p'+p+'" p="p '+p+'"> <div class="w"><div class="i"><input p="'+p+'" class="resizable" type="text"></div><button class="dp" t="p '+p+'">Del</button></div></div>');
		$('.c')
			.append('<div class="col p'+p+'" p="p '+p+'"><button class="ac" t="p '+p+'"><b>V</b></button></div>');
		// fire();
		$('#c .resizable').resizable({
		    //containment: 'parent'
		    containment: 'parent'
		});
	});

	$('#c').on('click', '.dp', function() {
		var d = ($(this).attr('t'));
		 	d = d.replace(' ','');
		$('.h .'+d).remove();
		$('.c .'+d).remove();
	});

	$('#c').on('click', '.ac', function() {
		var a = ($(this).attr('t'));
		var t = a.replace(' ','');

		$('.'+t, '.c')
			.append('<div class="wrap"><div><input type="text"> <button class="dc" t="'+a+'">Del</button></div></div><button class="ac" t="'+a+'">V</button>');
		$(this).remove();
	});

	$('#c').on('click', '.dc', function() {
		$(this).closest('.wrap').remove();
	});

	$('#cd').on('click', function() {
		$('.h').html('');
		$('.c').html('');
	});

	$('#saveData').on('click', function() {
		var data = [];
		var obj = {};

		$('#c .h input').each(function() {
			var cobj = {};
		    var pv = this.value;
		    var pj = ($(this).attr('p'));
		    var w = $(this).width();
		    
		    obj = {'field': pv, 'project': pj, 'parent': null, 'width': w };
		    data.push(obj);

		    var tc = ($(this).closest('.col').attr('p'));
		    	tc = tc.replace(' ','');
		    
		    $('#c .c .'+tc+' input').each(function (index) {

				cobj = {'parent': pv, 'project': pj, 'field': this.value, 'sequence' : index + 1 };
				data.push(cobj);
		    });
		});
		console.log(data);
	});
	// TODO :: Submit datas
});
