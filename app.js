function main(){

	$(".button").click(function(){
		var buttonType = $(this).data("animal");
		
		var valeur = species[buttonType];
		$("img").attr('src', "img/"  + valeur);

	});
	
}
$(document).ready(function(){
	main();
});