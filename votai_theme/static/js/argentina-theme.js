function getDayCount(){
		var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
		var firstDate = new Date();
		var secondDate = new Date(2015,07,09);

		var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));
		return diffDays;
	}

$(".faltan").html("Calendario electoral: faltan <span class='dias'>"+getDayCount()+" d&#237;as</span> para las PASO");
 var elecUrl="/election/pre-candidato-a-presidente";
 var jsonUrl= elections_json[0].medianaranja_link;
if (window.elections_json) {        

        var options_eleccion = '';
        options_eleccion += '<option value="' + elecUrl + '"><h4>Elige tu distrito</h4><\/option>';
        $.each(elections_json, function(key,value){
                //console.log(value["detaillink"]);
                options_eleccion += '<option value="' + value["detaillink"] + '"><h4>' +  value["name"] + '</h4><\/option>';
        });
        $("select#eleccion").html(options_eleccion);

        $( "select#eleccion" ).change( function(){
                elecUrl=$( "select#eleccion option:selected").val();
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

