if (elections_json) {
        var elecUrl="/election/pre-candidato-a-presidente";
        var jsonUrl= elections_json[0].medianaranja_link;

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

