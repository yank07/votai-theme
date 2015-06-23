(function(a){(jQuery.browser=jQuery.browser||{}).mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);
var app = (function(){



	var elecciones = {};

	var eleccion = {};

	var preguntas = {};

	var pregCount=0;

	var id=0;

	var animando=false;

	var w=0;
	var h=0;
	var iniPadH=0.2;
	var tarjeH100=0;
	var tarjeFactor = 0.45; 
	var tarjePadF = 0.05;
	var punSize=0;
	var factorDot=1.5;

	var sobreFondoH=0;
	var sobreFreDiff=0.4;	

	var urna1H=0;
	//var urna2Diff=11;

	var cantOp=4;
	var opScroll = false;

	var puntajes = [];
	var punPreg = [];
	var fotos = [];

	//postuWFac = 0.925;
	postuWFac = 0.85;

	var mobile=true;

	//reemplazar carateres por html ascii codes
	/*function getCleanText(some_text) {
		var clean_text = some_text;
		clean_text = clean_text.replace("¿", "&#191;"); 

		clean_text = clean_text.replace("Á", "&#193;"); 
		clean_text = clean_text.replace("É", "&#201;"); 
		clean_text = clean_text.replace("Í", "&#205;"); 
		clean_text = clean_text.replace("Ó", "&#211;"); 
		clean_text = clean_text.replace("Ú", "&#218;"); 

		clean_text = clean_text.replace("á", "&#225;"); 
		clean_text = clean_text.replace("é", "&#233;"); 
		clean_text = clean_text.replace("í", "&#237;"); 
		clean_text = clean_text.replace("ó", "&#243;"); 
		clean_text = clean_text.replace("ú", "&#250;"); 

		clean_text = clean_text.replace("Ñ", "&#209;"); 
		clean_text = clean_text.replace("ñ", "&#241;"); 

		return clean_text;
	}*/

	function GetUrlValue(VarSearch){
		var SearchString = window.location.search.substring(1);
		var VariableArray = SearchString.split('&');
		for(var i = 0; i < VariableArray.length; i++){
			var KeyValuePair = VariableArray[i].split('=');
			if(KeyValuePair[0] == VarSearch){
				return KeyValuePair[1];
			}
		}
	}
	
	

	function pregResize(){

		punSize = parseFloat($("#p7").css("height"));
		var dM = w<=480?w*0.001:w*0.02;
		$(".dots").css("margin-right",dM+"px");
		$("#p"+pregCount).css("width",punSize*factorDot+"px");
		$("#p"+pregCount).css("height",punSize*factorDot+"px");

		var fS = $(".tPreg").css("font-size");
		$(".tPreg").css("line-height",1+"em");
		var lH = 1;
		//$(".tPreg").css("font-size",fS+"em");
		var par = $(".tPreg").get(0);				
		var count = 0;
		var line=true;
		while (count<1000 && (par.offsetHeight <par.scrollHeight ||par.offsetWidth <par.scrollWidth)) {
			if(line){
				lH-=0.1;
				$(".tPreg").css("line-height",lH+"em");
				//console.log("lH: "+lH);
				if(parseFloat($(".tPreg").css("line-height"))<parseFloat($(".tPreg").css("font-size")))line=false;
			}else{
				fS-=0.1;
				$(".tPreg").css("font-size",fS+"em");
				//console.log("fs: "+fS);
				if(parseFloat($(".tPreg").css("line-height"))>=parseFloat($(".tPreg").css("font-size")))line=true;
			}
			count++;
		}

		tarjeH100 = tarjeFactor*parseFloat($("#tarjeta1").css("height"))/h;
		tarjeH100 = w<=480?tarjeH100*0.75:tarjeH100;
		$("#tarjeta1").css("padding-top",h*tarjePadF);
		$("#tarjeta2").css("padding-top",h*tarjePadF);

		//console.log(w);
		$( "#vSi" ).css("width",(tarjeH100*h)+"px");
		$( "#vSi" ).css("height",(tarjeH100*h*0.9)+"px");
		$( "#vNo" ).css("width",(tarjeH100*h)+"px");
		$( "#vNo" ).css("height",(tarjeH100*h*0.9)+"px");

		$( "#vNo" ).css("font-size",(tarjeH100*h*0.4)+"px");
		$( "#vSi" ).css("font-size",(tarjeH100*h*0.4)+"px");

		sobreFondoH = parseFloat($(".sobreFondo").css("top"));
		//sobreFreDiff = h>600?50:50*2/3;
		var sFreT = sobreFreDiff*parseFloat($(".sobreFondo").css("height"));
		$(".sobreFrente").css("top",(sobreFondoH+sFreT)+"px");
		$(".sobreChicos").css("top",(sobreFondoH+sFreT)+"px");

		urna1H = parseFloat($(".urna1").css("top"));
		var urna2Diff = parseFloat($(".urna1").css("height"));
		$(".urna2").css("top",(urna1H+urna2Diff)+"px")

		var oSet = w<480?50:75;
		//var oSet = w*0.1;
		var bMl = (w*0.5)-oSet-parseFloat($( ".bMasO" ).css("width"));			
		$( ".bMasO" ).css("left",bMl+"px");
		$( ".bSaltear" ).css("left",(w*0.5)+oSet);
	}

	function opcionResize(){
		//var pUW = w<$(".popupBg").width()?w*0.95:$(".popupBg").width();
		var pUW = $(".popupBg").width();
		//$(".popupBg").css("width",pUW+"px");
		$(".popupBg").css("left",(w*0.5-pUW*0.5)+"px");
		$(".popupBg").css("top",0+"px");
		

		//var bClW = $(".closeBtn").width();
		var bCl = parseFloat($(".popupBg").offset().left)+parseFloat($(".popupBg").css("width"))*0.825;						
		//var bCl = parseFloat($(".popupBg").offset().left)+parseFloat($(".popupBg").css("width"))*0.9-1.5*bClW;						
		$(".closeBtn").css("left",bCl+"px");			
		$(".closeBtn").css("top",parseFloat($(".popupBg").css("height"))*0.035+"px");
		//$(".closeBtn").css("top",1.5*parseFloat($(".popupBg").css("padding-left"))+"px");

		var opW = parseFloat($(".popupBg").css("width"))*0.75;
		$(".op1").css("width",opW+"px");
		$(".op2").css("width",opW+"px");
		$(".op3").css("width",opW+"px");
		$(".op4").css("width",opW+"px");
		
		var opL = (w*0.5)-opW*0.5;
		$(".op1").css("left",opL+"px");
		$(".op2").css("left",opL+"px");
		$(".op3").css("left",opL+"px");
		$(".op4").css("left",opL+"px");

		var opH = parseFloat($(".popupBg").css("height"))*0.18;
		$(".op1").css("height",opH+"px");
		$(".op2").css("height",opH+"px");
		$(".op3").css("height",opH+"px");
		$(".op4").css("height",opH+"px");
		
		$(".op1").css("top",(opH*0.6)+"px");
		$(".op2").css("top",((opH*0.6)+8+opH)+"px");
		$(".op3").css("top",((opH*0.6)+8+opH+8+opH)+"px");
		$(".op4").css("top",((opH*0.6)+8+opH+8+opH+8+opH)+"px");	
	}
	
	function posiResize(){
		var cant = preguntas["Candidatos"]["cantidad"];
		var pH = parseFloat($(".postuCont").css("height"));
		var pH2 = pH*0.25*cant;
		var pT = parseFloat($(".postuCont").css("top"));
		
		 

		$(".postuCont").css("width",(pH*postuWFac*1.05)+"px");		
		$(".posturas").css("width",(pH*postuWFac)+"px");
		$(".posturasBG").css("width",(pH*postuWFac)+"px");		
		$(".posturas").css("height",pH2+"px");		
		$(".posturasBG").css("height",pH2+"px")

		$(".postuCont").css("left",((w*0.5)-(pH*postuWFac*0.5))+"px");		
		//$(".posturas").css("left",((w*0.5)-(pH*postuWFac*0.5))+"px");		
		//$(".posturasBG").css("left",((w*0.5)-(pH*postuWFac*0.5))+"px");

		var pL = $(".posturas"+i).offset();
		//var postW = parseFloat($(".posturas").css("width"))*0.65;
		var postW = pH*postuWFac*0.65;
		var pNpad = h<480?0.08:0.04;
		for(var i=0;i<cant;i++){
			//var pL = $(".chatBG"+i).offset();
			//var r = (i*0.25*pH)-i*0.001*pH;
			var r = (i*0.25*pH);
			$(".posNom"+i).css("top",r+"px");						
			$(".postu-"+i).css("top",(r+pH*0.075)+"px");			
			$(".postu-"+i).css("width",postW+"px");
			$(".postu-"+i).css("height",pH*0.1+"px");
			if(i%2==0){
				$(".posNom"+i).css("left",(postW*0.5)+"px");
				$(".postu-"+i).css("left",(postW*0.5)+"px");
				var elem = $(".postu-"+i).get(0);				
				if (elem.offsetHeight <elem.scrollHeight ||elem.offsetWidth <elem.scrollWidth) {
					var canInd = punPreg[i][1];
					var src="";
					if(preguntas["Candidatos"][canInd]["Respuestas"][pregCount]<2){
						src="triangle1";
					}else{
						src="triangle2";
					}
					var t = (r+pH*0.075)+pH*0.1-5;
					var ht= $(".posturas").html();
					ht+="<button type='button' class='"+src+"' id='tri"+i+"' style='position:absolute;left:90%;top:"+t+"px;'></button>";
					$(".posturas").html(ht);				
				}
			}else{
				$(".posNom"+i).css("left",(postW*0.05)+"px");
				$(".postu-"+i).css("left",(postW*0.05)+"px");
				var elem = $(".postu-"+i).get(0);				
				if (elem.offsetHeight <elem.scrollHeight ||elem.offsetWidth <elem.scrollWidth) {
					var canInd = punPreg[i][1];
					var src="";
					if(preguntas["Candidatos"][canInd]["Respuestas"][pregCount]<2){
						src="triangle1";
					}else{
						src="triangle2";
					}
					var t = (r+pH*0.075)+pH*0.1-5;
					var ht= $(".posturas").html();
					ht+="<button type='button' class='"+src+"' id='tri"+i+"' style='position:absolute;left:60%;top:"+t+"px;'></button>";
					$(".posturas").html(ht);				
				}
			}
		
		}	
		var sW = parseFloat($(".sigue").css("width"));
		$(".sigue").css("left",((w*0.5)-(sW*0.5))+"px");
	}

	function animaSi(){		
		if(!animando){
			animando=true;

			var offset = $("#vSi").offset();
			offset.top = parseFloat($("#tarjeta1").css("padding-top"));

			var offUrna = $(".sobreChicos").offset();

			$("#vSi").css("position","absolute");
			$("#vSi").css("zIndex","2");		

			$("#vSi").css("left",offset.left+"px");
			$("#vSi").css("top",offset.top+"px");
			var center =  (($("#game").width())*0.5)-($("#vSi").width()*0.5);

			$( "#vSi" ).tween({
				rotate:{
					start: 0,
				stop: 90,
				time: 0,
				duration: 0.5,
				effect:'easeInOut'
				},
				left:{
					start:offset.left, 
				stop: center,
				time: 0,
				units: 'px',
				duration: 0.5,
				effect:'easeInOut'
				},
				top:{
					start:offset.top, 
				stop: offUrna.top,
				time: 0.5,
				units: 'px',
				duration: 1,
				effect:'easeInOut'
				},


				onStop: function( element ){
					animando=false;
					$("#vSi").css("position","relative");
					$("#vSi").css("top","0px");
					$("#vSi").css("left","0px");							
					$("#vSi").css("zIndex","1");
					$("#vSi").css("width","0px");
					$("#vSi").css("height","0px");
					$("#vNo").css("width","0px");
					$("#vNo").css("height","0px");
					$("#vNo").hide();
					$("#vSi").hide();
					pregResult();
				}
			});
			$.play();  
		}
	}

	function animaNo(){
	if(!animando){
			animando=true;
			var offset = $("#vNo").offset();
			offset.left =parseFloat($("#vNo").css("padding-left"));
			offset.top = parseFloat($("#tarjeta1").css("padding-top"));
			var offUrna = $(".sobreChicos").offset();

			$("#vNo").css("position","absolute");

			$("#vNo").css("zIndex","2");

			$("#vNo").css("top",offset.top+"px");
			$("#vNo").css("left",offset.left+"px");
			var center =  $("#vNo").css("padding-left")+($("#vNo").width());

			$( "#vNo" ).tween({
				rotate:{
					start: 0,
				stop: -90,
				time: 0,
				duration: 0.5,
				effect:'easeInOut'
				},
				left:{
					start:offset.left, 
				stop: -(offset.left+($("#vNo").width()*0.5)),
				time: 0,
				units: 'px',
				duration: 0.5,
				effect:'easeInOut'
				},

				top:{
					start:offset.top, 
				stop: offUrna.top,
				time: 0.5,
				units: 'px',
				duration: 1,
				effect:'easeInOut'
				},
				onStop: function( element ){
					animando=false
						$("#vNo").css("position","relative");
					$("#vNo").css("top","0px");
					$("#vNo").css("left","0px");
					$("#vNo").css("zIndex","1");
					$("#vSi").css("width","0px");
					$("#vSi").css("height","0px");
					$("#vNo").css("width","0px");
					$("#vNo").css("height","0px");
					$("#vNo").hide();
					$("#vSi").hide();							
					pregResult();
				}
			});
			$.play();
		}
	}

	function nextQuest(id){		
		// Escribe el texto de la siguiente pregunta
		$(".tPreg").html(preguntas["Texto"][pregCount]);

		if(pregCount>0){
			puntajes.sort(function(a, b){
					return b[0] - a[0];					
			});
			var cant = preguntas["Candidatos"]["cantidad"];
			//console.log($(".afinidad").height());
			//var aH = $(".afinidad").height()*h*0.01;
			var aH = $(".afinidad").height();			
			var invMaxPunt = 1/puntajes[0][0];
			for(var i=0;i<cant;i++){
				var canInd = puntajes[i][1];
				console.log("Puntaje "+(preguntas["Candidatos"][canInd]["Nombre"])+": "+puntajes[i][0]);								
				$(".cFoto"+i).attr("src",fotos[canInd].src);
				var fW = (aH*0.5)+(aH*0.5)*puntajes[i][0]*invMaxPunt;
				$(".cFoto"+i).css("width",fW+"px");
				$(".cFoto"+i).css("height",fW+"px");
			}
		}



		// #Animación de aparición de las opciones de voto
		$( "#vSi" ).tween({
			rotate:{
				start: 0,
				stop: 355,
				time: 0,
				duration: 2,
				effect:'easeInOut'
			},
			width:{
				start: 1,
				stop: h*tarjeH100,
				time: 0,
				units: 'px',
				duration: 2,
				effect:'easeInOut'
			},
			height:{
				start: 1,
				stop: h*tarjeH100*0.9,
				time: 0,
				units: 'px',
				duration: 2,
				effect:'easeInOut'
			}
		});

		$( "#vNo" ).tween({
		//$( ".voto" ).tween({
			rotate:{
				start: 0,
				stop: 365,
				time: 0,
				duration: 2,
				effect:'easeInOut'
			},
			width:{
				start: 1,
				stop: h*tarjeH100,
				time: 0,
				units: 'px',
				duration: 2,
				effect:'easeInOut'
			},
			height:{
				start: 1,
				stop: h*tarjeH100*0.9,
				time: 0,
				units: 'px',
				duration: 2,
				effect:'easeInOut'
			},
			onStop: function( element ){
				//$(".nElec").show();
			}

		});		
		//#Anima los puntos que muestran por qué pregunta vas
		var pun = "#p"+pregCount;
		$( pun ).tween({
			width:{
				start: punSize,
				stop: punSize*factorDot,
				time: 0,
				units: 'px',
				duration: 1,
				effect:'easeInOut'
			},
			height:{
				start: punSize,
				stop: punSize*factorDot,
				time: 0,
				units: 'px',
				duration: 1,
				effect:'easeInOut'
			},
			borderRadius:{
				start: punSize,
				stop: punSize*factorDot,
				time: 0,
				units: 'px',
				duration: 1,
				effect:'easeInOut'
			},				
			backgroundColor:{
				start: '#000',
				stop: '#20a685',
				time: 0,
				duration: 1,
				effect:'easeInOut'
			},
			/*marginTop:{
			  start: punSize*0.25,
			  stop:0,
			  time: 0,
			  units: 'px',
			  duration: 1,
			  effect:'easeInOut'
			  },
			  marginBottom:{
			  start: punSize*0.25,
			  stop:0,
			  time: 0,
			  units: 'px',
			  duration: 1,
			  effect:'easeInOut'
			  }*/
		});			

		if(pregCount>0){
			pun = "#p"+(pregCount-1);
			$( pun ).tween({
				width:{
					start: punSize*factorDot,
					stop: punSize,
					time: 0,
					units: 'px',
					duration: 1,
					effect:'easeInOut'
				},
				height:{
					start: punSize*factorDot,
					stop: punSize,
					time: 0,
					units: 'px',
					duration: 1,
					effect:'easeInOut'
				},
				borderRadius:{
					start: punSize*factorDot,
					stop: punSize,
					time: 0,
					units: 'px',
					duration: 1,
					effect:'easeInOut'
				},
				/*marginTop:{
				  start: 0,
				  stop: punSize*0.25,
				  time: 0,
				  units: 'px',
				  duration: 1,
				  effect:'easeInOut'
				  },
				  marginBottom:{
				  start:0,
				  stop: punSize*0.25,
				  time: 0,
				  units: 'px',
				  duration: 1,
				  effect:'easeInOut'
				  }*/
			});					
		}
		$.play();	
	};


	// #Animación muestra el resultado a partir del voto elegido
	function pregResult(){
		$(".preguntas").hide();
		$(".resultados").show();
		$(".pregResu").html(preguntas["Texto"][pregCount]);

		var cant = preguntas["Candidatos"]["cantidad"];
		var posBG="";
		var posT="";
		punPreg.sort(function(a, b){
			return b[0] - a[0];					
		});
		var pH = parseFloat($(".postuCont").css("height"))*0.25;
		for(var i=0;i<cant;i++){
			var canInd = punPreg[i][1];
			console.log("Pun Preg "+preguntas["Candidatos"][canInd]["Nombre"]+": "+punPreg[i]);
			if(i%2==0){
			
				posBG+="<img class=chatIMG src="+preguntas["Candidatos"][canInd]["Foto"]+" width=25% height="+pH+"px >";
				var r = preguntas["Candidatos"][canInd]["Respuestas"][pregCount];
				if(r<2){
					posBG+="<img class=chatBG"+i+" src='static/img/chatBackground.png' width=75% height="+pH+"px >";
				}else{
					posBG+="<img class=chatBG"+i+" src='static/img/chatBackground2.png' width=75% height="+pH+"px >";
				}				
				posBG+="<br/>";
				posT+="<div width=75% height="+pH+"px ><h3 class=posNom"+i+" >"+preguntas["Candidatos"][canInd]["Nombre"]+"</h3>";				
				posT+="<p class=postu-"+i+">"+preguntas["Opciones"][pregCount][r]+"</p></div>";
				//$(".posNom"+i).css("top",$(".chatBG"+i).offset().top);
			}else{
				var r = preguntas["Candidatos"][canInd]["Respuestas"][pregCount];
				if(r<2){
					posBG+="<img class=chatBG"+i+" id=right src='static/img/chatBackground.png' width=75% height="+pH+"px >";			
				}else{
					posBG+="<img class=chatBG"+i+" id=right src='static/img/chatBackground2.png' width=75% height="+pH+"px >";			
				}
				posBG+="<img class=chatIMG  src="+preguntas["Candidatos"][canInd]["Foto"]+" width=25% height="+pH+"px >";				
				posBG+="<br/>";
				posT+="<div width=75% height="+pH+"px><h3 class=posNom"+i+" >"+preguntas["Candidatos"][canInd]["Nombre"]+"</h3>";			

				posT+="<p class=postu-"+i+">"+preguntas["Opciones"][pregCount][r]+"</p></div>";
				//$(".posNom"+i).css("top",$(".chatBG"+i).offset().top));
				$(".chatBG"+i).css("height","0px");
			}
		}
		$(".posturasBG").html(posBG);
		$(".posturas").html(posT);
		posiResize();	
	}

function jugar(){
		console.log("static/data/yqs"+id+".json");
				$.getJSON( "static/data/yqs"+id+".json", function( data ) {			
					//console.log(data);
					eleccion = data;
					preguntas = eleccion["Preguntas"];			
					$(".nElec").html(eleccion["Nombre"]);
					//console.log(preguntas["Candidatos"]);
					var cant = preguntas["Candidatos"]["cantidad"];
					var afCont="";
					var aH = $(".afinidad").height()*h*0.01;
					for(var i=0;i<cant;i++){						
						fotos[i] = new Image(aH, aH);
						fotos[i].src=preguntas["Candidatos"][i]["Foto"];
						afCont+="<img id=fCand class=cFoto"+i+" src="+preguntas["Candidatos"][i]["Foto"]+" width="+aH+"px height="+aH+"px >";
						puntajes[i]=[0,i];						
						punPreg[i]=[0,i];						
					}
					
					if(aH*cant>$("#game").width()){
						$(".afinidad").css("overflow-x","scroll");
						$(".afiniImg").css("width",(aH*cant)+"px");
					}
					


					$(".afiniImg").html(afCont);
					//console.log(id);			

					$("#inicio").hide();
					$("#game").show();
					pregResize();
					nextQuest(id);
				});

	}

	return {//funcion de inicio de la aplicación
		init : function(){

			console.log("mobile: "+$.browser.mobile);

			mobile = $.browser.mobile;

			if($(window).height()>768)mobile=false;

			if(GetUrlValue("frame"))mobile=true;

			if(mobile){
				$("header").hide();
				$(".footer").hide();
				$(".sideLeft").hide();
				$("#inicioD").hide();
				$("#wrapper").hide();
			}else{
				$("#inicio").hide();
				//$("#inicio").css("left",($(window).width()*0.5-parseFloat($("#inicio").css("width"))*0.5)+"px");
				$(".bMenuH").hide();
				$("#game").css("left",($(window).width()*0.5-parseFloat($("#game").css("width"))*0.5)+"px");
				$("#sideLeft").hide();	
			}
			
			w = $("#game").width();
			h = $("#game").height();
			//h = $(window).height()-$(".navbar").height();

			//$("#game").css("top",$(".navbar").height()+"px");
			//$("#game").css("width",w+"px");
			//$("#game").css("height",h+"px");

			if(h<480)iniPadH=0.05;
			$("#inicio").css("padding-top",h*iniPadH+"px");
			$("#inicio").css("padding-bottom",h*iniPadH+"px");;
			$("#tarjeta1").css("padding-top",h*tarjePadF+"px");
			$("#tarjeta2").css("padding-top",h*tarjePadF+"px");

			// Listener por resize de la ventana
			window.addEventListener("resize", function() {
				console.log($(window).height());
				// Get screen size (inner/outerWidth, inner/outerHeight)
				w = $("#game").width();
				h = $("#game").height();
				//h = $(window).height()-$(".navbar").height();

				//$("#game").css("top",$(".navbar").height()+"px");
				//$("#game").css("width",w+"px");
				//console.log(w);
				//$("#game").css("height",h+"px");
				if(h<480)iniPadH=0.05;
				$("#inicio").css("padding-top",h*iniPadH+"px");
				$("#inicio").css("padding-bottom",h*iniPadH+"px");

				pregResize();	

				opcionResize();

				if(preguntas["Candidatos"]){
					var cant = preguntas["Candidatos"]["cantidad"];
					var aH = $(".afinidad").height();				
					if(pregCount>0){
						var invMaxPunt = 1/puntajes[0][0];
						for(var i=0;i<cant;i++){						
							var fW = (aH*0.5)+(aH*0.5)*puntajes[i][0]*invMaxPunt;
							$(".cFoto"+i).css("width",fW+"px");
							$(".cFoto"+i).css("height",fW+"px");
						}
					}else{
						for(var i=0;i<cant;i++){												
							$(".cFoto"+i).css("width",aH+"px");
							$(".cFoto"+i).css("height",aH+"px");
						}
					}
				}
				
				if($(".resultados").is(":visible"))posiResize();
			}, false);

			

			pregResize();
			opcionResize();

			/*punSize = parseFloat($(".dots").css("height"));
			var dM = w<=480?w*0.001:w*0.02;
			$(".dots").css("margin-right",dM+"px");var fS = parseFloat($(".tPreg").css("font-size"));
			var lH = parseFloat($(".tPreg").css("line-height"));
			var par = $(".tPreg").get(0);				
			var count = 0;
			while (count<1000 && (par.offsetHeight <par.scrollHeight ||par.offsetWidth <par.scrollWidth)) {
				if(fS>0.7){
					fS-=0.1;
					$(".tPreg").css("font-size",fS+"em");
					//console.log("fs"+i+": "+fS);
				}else{
					lH-=0.1;
					$(".tPreg").css("line-height",lH+"em");
				}
				count++;
			}

			tarjeH100 = tarjeFactor*parseFloat($("#tarjeta1").css("height"))/h;
			tarjeH100 = w<=480?tarjeH100*0.75:tarjeH100;
			$( "#vSi" ).css("width",(tarjeH100*h)+"px");
			$( "#vSi" ).css("height",(tarjeH100*h)+"px");
			$( "#vNo" ).css("width",(tarjeH100*h)+"px");
			$( "#vNo" ).css("height",(tarjeH100*h)+"px");

			sobreFondoH = parseFloat($(".sobreFondo").css("top"));
			sobreFreDiff = h>600?50:50*2/3;
			$(".sobreFrente").css("top",(sobreFondoH+sobreFreDiff)+"px");
			$(".sobreChicos").css("top",(sobreFondoH+sobreFreDiff)+"px");

			urna1H = parseFloat($(".urna1").css("top"));
			$(".urna2").css("top",(urna1H+urna2Diff)+"px");
			
			var bMl = (w*0.5)-75-parseFloat($( ".bMasO" ).css("width"));			
			$( ".bMasO" ).css("left",bMl+"px");
			$( ".bSaltear" ).css("left",(w*0.5)+75);*/
			
			
			//var pUW = w<$(".popupBg").width()?w*0.95:$(".popupBg").width();
			/*var pUW = $(".popupBg").width();
			//(".popupBg").css("width",pUW+"px");
			$(".popupBg").css("left",(w*0.5-pUW*0.5)+"px");

			var bClW = $(".closeBtn").width();
			var bCl = parseFloat($(".popupBg").offset().left)+parseFloat($(".popupBg").css("width"))-2.5*bClW;						
			//var bCl = parseFloat($(".popupBg").offset().left)+parseFloat($(".popupBg").css("width"))*0.86;						
			$(".closeBtn").css("left",bCl+"px");			
			$(".closeBtn").css("top",(bClW*0.5)+"px");
			//$(".closeBtn").css("top",1.5*parseFloat($(".popupBg").css("padding-left"))+"px");			
			
			var opW = parseFloat($(".popupBg").css("width"))*0.75;
			$(".op1").css("width",opW+"px");
			$(".op2").css("width",opW+"px");
			$(".op3").css("width",opW+"px");
			$(".op4").css("width",opW+"px");
			
			var opL = (w*0.5)-opW*0.5;
			$(".op1").css("left",opL+"px");
			$(".op2").css("left",opL+"px");
			$(".op3").css("left",opL+"px");
			$(".op4").css("left",opL+"px");

			var opH = parseFloat($(".popupBg").css("height"))*0.18;
			$(".op1").css("height",opH+"px");
			$(".op1").css("line-height",opH+"px");
			$(".op2").css("height",opH+"px");
			$(".op2").css("line-height",opH+"px");
			$(".op3").css("height",opH+"px");
			$(".op3").css("line-height",opH+"px");
			$(".op4").css("height",opH+"px");
			$(".op4").css("line-height",opH+"px");
			
			$(".op1").css("top",(opH*0.75)+"px");
			$(".op2").css("top",((opH*0.75)+8+opH)+"px");
			$(".op3").css("top",((opH*0.75)+8+opH+8+opH)+"px");
			$(".op4").css("top",((opH*0.75)+8+opH+8+opH+8+opH)+"px");*/
			
			var inicio = $("#inicio");
			var game = $("#game");

			$(".resultados").hide();
			game.hide();
			$(".opciones").hide();

			$(".bMenuH").click(function(){
				$(".popupBg").show();
				opcionResize();			
			});

			$(".bMasO").click(function() {
				$(".opciones").show();
				opcionResize();
				//console.log("opciones");
				for(var i=0;i<cantOp;i++){
					$(".op"+(i+1)).html("<span>"+preguntas["Opciones"][pregCount][i]+"</span>");
					$(".op"+(i+1)).children("span").css("height",$(".op"+(i+1)).css("height"));
					if(!opScroll){						
						var lH = parseFloat($(".op"+(i+1)).children("span").css("height"));
						var fS = lH*0.75;
						$(".op"+(i+1)).children("span").css("line-height",lH+"px");
						//console.log(lH);
						var par = $(".op"+(i+1)).get(0);
						//var chil = $(".op"+(i+1)).children("span").get(0);
						$(".op"+(i+1)).children("span").css("font-size",fS+"px");
						var count = 0;
						var fL=30;
						while (count<1000 && (par.offsetHeight <par.scrollHeight ||par.offsetWidth <par.scrollWidth)) {
							if(fS>fL){
								fS-=1;
								$(".op"+(i+1)).children("span").css("font-size",fS+"px");
								//console.log("fs"+i+": "+fS);
							}else{
								lH=fS*1.25;
								fL*=0.95;
								$(".op"+(i+1)).children("span").css("line-height",lH+"px");
							}
							count++;
						}
						if(count>=1000){
							var lH = parseFloat($(".op"+(i+1)).children("span").css("height"));
							$(".op"+(i+1)).children("span").css("line-height",lH+"px");
							$(".op"+(i+1)).children("span").css("font-size",lH*0.5+"px");
							
						}
					}
				}
				/*$(".op1").html("<span>"+preguntas["Opciones"][pregCount][0]+"</span>");
				$(".op2").html("<span>"+preguntas["Opciones"][pregCount][1]+"</span>");
				$(".op3").html("<span>"+preguntas["Opciones"][pregCount][2]+"</span>");
				$(".op4").html("<span>"+preguntas["Opciones"][pregCount][3]+"</span>");*/
			});

			$(".closeBtn").click(function() {				
				$(".opciones").hide();				
			});
			

			$(".bSaltear").click(function() {
				//console.log("saltear");
				pregCount++;
				$("#vSi").show();
				$("#vNo").show();
				nextQuest(id);				
			});


			$(".sigue").click(function() {								
				$("#vSi").show();
				$("#vNo").show();
				$(".preguntas").show();
				pregResize();
				pregCount++;
				nextQuest(id);
				$(".resultados").hide();
				
			});

			//console.log("ACA");
			$.getJSON( "static/data/yqs.json", function( data ) {
				//console.log(data);
				var options_eleccion = '';
				var VI_frame = '';
				var pas = true;
				$.each(data, function(key,value){				
					if(pas){
						VI_frame += "<iframe src="+value[1]+"&output=embed width=800 height=400></iframe>";
					}
					console.log(value[0]);
					options_eleccion += '<option value="' + value[0] + '"><h4>' + key + '</h4><\/option>';				
				});
				$("select#eleccion").html(options_eleccion);

				$(".VI").html(VI_frame);
				/*$("select#eleccion").change(function(){
					console.log($( "select#eleccion" ).val());
					var index = $(this).get(0).selectedIndex;
					var d = data[index-1];  // -1 because index 0 is for empty 'Select' option
				});*/

			});

			$( "select#eleccion" ).change( function(){
				id=$( "select#eleccion option:selected").val();
				//id=$( "#eleccion" ).val();
				console.log(id);
			});

			$(".bJugar").click(function() {
				jugar();
			});
			
			$(".bEmpez").click(function() {
				jugar();
			});


			$("#vSi").click(function() {
				var cant = preguntas["Candidatos"]["cantidad"];
				for(var i=0;i<cant;i++){
					var cInd = puntajes[i][1];
					punPreg[i][1]=cInd;
					if(preguntas["Candidatos"][cInd]["Respuestas"][pregCount]==0){
						puntajes[i][0]+=100;
						punPreg[i][0]=100;						
					}else if(preguntas["Candidatos"][cInd]["Respuestas"][pregCount]==1){
						puntajes[i][0]+=66;
						punPreg[i][0]=66;
					}else if(preguntas["Candidatos"][cInd]["Respuestas"][pregCount]==2){
						puntajes[i][0]+=33;
						punPreg[i][0]=33;
					}else if(preguntas["Candidatos"][cInd]["Respuestas"][pregCount]==3){
						puntajes[i][0]+=0;
						punPreg[i][0]=0;
					}
				}
				animaSi();
			});

			$("#vNo").click(function() {
				var cant = preguntas["Candidatos"]["cantidad"];
				for(var i=0;i<cant;i++){
					var cInd = puntajes[i][1];
					punPreg[i][1]=cInd;
					if(preguntas["Candidatos"][cInd]["Respuestas"][pregCount]==0){
						puntajes[i][0]+=0;
						punPreg[i][0]=0;
					}else if(preguntas["Candidatos"][cInd]["Respuestas"][pregCount]==1){
						puntajes[i][0]+=33;
						punPreg[i][0]=33;
					}else if(preguntas["Candidatos"][cInd]["Respuestas"][pregCount]==2){
						puntajes[i][0]+=66;
						punPreg[i][0]=66;
					}else if(preguntas["Candidatos"][cInd]["Respuestas"][pregCount]==3){
						puntajes[i][0]+=100;
						punPreg[i][0]=100;
					}
					//console.log("Puntaje "+preguntas["Candidatos"][cInd]["Nombre"]+": "+puntajes[i]);
				}
				animaNo();
			});

			$(".bOp1").click(function() {
				var cant = preguntas["Candidatos"]["cantidad"];
				for(var i=0;i<cant;i++){
					var cInd = puntajes[i][1];
					punPreg[i][1]=cInd;
					if(preguntas["Candidatos"][cInd]["Respuestas"][pregCount]==0){
						puntajes[i][0]+=100;
						punPreg[i][0]=100;
					}else if(preguntas["Candidatos"][cInd]["Respuestas"][pregCount]==1){
						puntajes[i][0]+=66;
						punPreg[i][0]=66;
					}else if(preguntas["Candidatos"][cInd]["Respuestas"][pregCount]==2){
						puntajes[i][0]+=33;
						punPreg[i][0]=33;
					}else if(preguntas["Candidatos"][cInd]["Respuestas"][pregCount]==3){
						puntajes[i][0]+=0;
						punPreg[i][0]=0;
					}
					//console.log("Puntaje "+preguntas["Candidatos"][cInd]["Nombre"]+": "+puntajes[i]);
				}
				$(".opciones").hide();
				animaSi();
			});
			$(".bOp2").click(function() {
				var cant = preguntas["Candidatos"]["cantidad"];
				for(var i=0;i<cant;i++){
					var cInd = puntajes[i][1];
					punPreg[i][1]=cInd;
					if(preguntas["Candidatos"][cInd]["Respuestas"][pregCount]==0){
						puntajes[i][0]+=66;
						punPreg[i][0]=66;
					}else if(preguntas["Candidatos"][cInd]["Respuestas"][pregCount]==1){
						puntajes[i][0]+=100;
						punPreg[i][0]=100;
					}else if(preguntas["Candidatos"][cInd]["Respuestas"][pregCount]==2){
						puntajes[i][0]+=33;
						punPreg[i][0]=33;
					}else if(preguntas["Candidatos"][cInd]["Respuestas"][pregCount]==3){
						puntajes[i][0]+=0;
						punPreg[i][0]=0;
					}
					//console.log("Puntaje "+preguntas["Candidatos"][cInd]["Nombre"]+": "+puntajes[i]);
				}
				$(".opciones").hide();
				animaSi();
			});
			$(".bOp3").click(function() {
				var cant = preguntas["Candidatos"]["cantidad"];
				for(var i=0;i<cant;i++){
					var cInd = puntajes[i][1];
					punPreg[i][1]=cInd;
					if(preguntas["Candidatos"][cInd]["Respuestas"][pregCount]==0){
						puntajes[i][0]+=0;
						punPreg[i][0]=0;
					}else if(preguntas["Candidatos"][cInd]["Respuestas"][pregCount]==1){
						puntajes[i][0]+=33;
						punPreg[i][0]=33;
					}else if(preguntas["Candidatos"][cInd]["Respuestas"][pregCount]==2){
						puntajes[i][0]+=100;
						punPreg[i][0]=100;
					}else if(preguntas["Candidatos"][cInd]["Respuestas"][pregCount]==3){
						puntajes[i][0]+=66;
						punPreg[i][0]=66;
					}
					//console.log("Puntaje "+preguntas["Candidatos"][cInd]["Nombre"]+": "+puntajes[i][0]);
				}
				$(".opciones").hide();
				animaNo();
			});
			$(".bOp4").click(function() {
				var cant = preguntas["Candidatos"]["cantidad"];
				for(var i=0;i<cant;i++){	
					var cInd = puntajes[i][1];
					punPreg[i][1]=cInd;
					if(preguntas["Candidatos"][cInd]["Respuestas"][pregCount]==0){
						puntajes[i][0]+=0;
						punPreg[i][0]=0;
					}else if(preguntas["Candidatos"][cInd]["Respuestas"][pregCount]==1){
						puntajes[i][0]+=33;
						punPreg[i][0]=33;
					}else if(preguntas["Candidatos"][cInd]["Respuestas"][pregCount]==2){
						puntajes[i][0]+=66;
						punPreg[i][0]=66;
					}else if(preguntas["Candidatos"][cInd]["Respuestas"][pregCount]==3){
						puntajes[i][0]+=100;
						punPreg[i][0]=100;
					}
					//console.log("Puntaje "+preguntas["Candidatos"][cInd]["Nombre"]+": "+puntajes[i][0]);					
				}
		
				$(".opciones").hide();
				animaNo();
			});

		},

	stop : function(){

	},

	update : function(){		    

	},
	keyPressed : function(keyCode){
	},

	mousePos : function(mouseX,mouseY){
	}


	};

})();
app.init();

