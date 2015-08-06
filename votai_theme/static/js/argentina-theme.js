function getDayCount(){
		var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
		var firstDate = new Date();
		var secondDate = new Date(2015,07,09);

		var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)))+1;
		return diffDays;
	}

$(".faltan").html("Calendario electoral: faltan <span class='dias'>"+getDayCount()+" d&#237;as</span> para las PASO");
var elecUrl="/election/pre-candidato-a-presidente";
var jsonUrl= "/theme/election/pre-candidato-a-presidente/media-naranja.json";
if (window.elections_json) {        
	jsonUrl= elections_json[0].medianaranja_link;

        var options_eleccion = '';
        options_eleccion += '<option value="' + elecUrl + '"><h4>Elegí tu distrito</h4><\/option>';
        $.each(elections_json, function(key,value){
                //console.log(value["detaillink"]);
                options_eleccion += '<option value="' + value["detaillink"] + '"><h4>' +  value["name"] + '</h4><\/option>';
        });
        $("select#eleccion").html(options_eleccion);

        $( "select#eleccion,#menuMob select" ).change( function(e){
                elecUrl=$(e.target).val();
		if ($(".game-cta").length > 0) {
			location.href=elecUrl;
		}
        });

        function jugar(){

        //url = "/theme/election/pre-candidato-a-presidente/media-naranja.json";
                location.href="/theme"+elecUrl+"/media-naranja";
                jsonUrl=elecUrl+"/media-naranja.json";

        }


        $(".bEmpez").click(function() {
                jugar();
        });        
}




jQuery(document).ready(function($){
        // browser window scroll (in pixels) after which the "back to top" link is shown
        var offset = $(window).innerHeight() + 100,
                //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
                offset_opacity = 1200,
                //duration of the top scrolling animation (in ms)
                scroll_top_duration = 700,
                //grab the "back to top" link
                $back_to_top = $('.cd-top');

        //hide or show the "back to top" link
        $(window).scroll(function(){
                ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
                if( $(this).scrollTop() > offset_opacity ) { 
                        $back_to_top.addClass('cd-fade-out');
                }
        });

        //smooth scroll to top
        $back_to_top.on('click', function(event){
                event.preventDefault();
                $('body,html').animate({
                        scrollTop: 0 ,
                        }, scroll_top_duration
                );
        });

});