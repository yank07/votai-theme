function getDayCount(){
		var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
		var firstDate = new Date();
		var secondDate = new Date(2015,07,09);

		var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));
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

        $( "select#eleccion,#menuMob select" ).change( function(){
                elecUrl=$( "select#eleccion option:selected").val();
		if ($(".game-cta").length > 0) {
			location.href=elecUrl;
		}
        });

        function jugar(){

        //url = "/theme/election/pre-candidato-a-presidente/media-naranja.json";
                console.log(elecUrl);
                break;
                location.href="/theme"+elecUrl+"/media-naranja";
                jsonUrl=elecUrl+"/media-naranja.json";

        }


        $(".bEmpez").click(function() {
                jugar();
        });        
}

