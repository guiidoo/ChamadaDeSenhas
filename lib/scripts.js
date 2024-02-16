function pad(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}

jQuery(document).ready(function($) {

	$("body").on('keydown', function(e) {
        //Passes
		var senhaNormal  = $("#senhaNormal");
		var senhaPrior   = $("#senhaPrioridade");
        //Pessoas
        var senhaMuniz  = $("#senhaMuniz");
        var senhaRicardo  = $("#senhaRicardo");
        var senhaAlessandra = $("#senhaAlessandra");
        var senhaKatia = $("#senhaKatia");
        var senhaEdson = $("#senhaEdson");
        var senhaClelia = $("#senhaClelia");
        var senhaTieme = $("#senhaTieme");
        var senhaKatiaGo = $("#senhaKatiaGo");
        var senhaSilvia = $("#senhaSilvia");
        var senhaAdriana = $("#senhaAdriana");
        var senhaCesar = $("#senhaCesar");
        var senhaErika = $("#senhaErika");
        var senhaVera = $("#senhaVera");
        var senhaSimone = $("#senhaSimone");
        var senhaMauricio = $("#senhaMauricio");
        var senhaEduardo = $("#senhaEduardo");
        var senhaRenato = $("#senhaRenato");
        var senhaLilian = $("#senhaLilian");
        var senhaSamantha = $("#senhaSamantha");
        var senhaRodrigo = $("#senhaRodrigo");
        var senhaDom = $("#senhaDom");
        var senhaAnnaC = $("#senhaAnnaC");
        var senhaLais = $("#senhaLais");
        var senhaWaldemar = $("#senhaWaldemar");
        var senhaCelso = $("#senhaCelso");
        var senhaKatiaLi = $("#senhaKatiaLi");
        var senhaGigi = $("#senhaGigi");
        var senhaDrKlaus = $("#senhaDrKlaus");
        var senhaDrHanz = $("#senhaDrHanz");
        var senhaDrAlbe = $("#senhaDrAlbe");
        var senhaDrEdu = $("#senhaDrEdu");
        var senhaDrNicopai = $("#senhaDrNicopai");
        var senhaDrErminio = $("#senhaDrErminio");
        var senhaDrFrede = $("#senhaDrFrede");
        var senhaDrKalito = $("#senhaDrKalito");

        //
        var senhaAtual   = $("#senhaAtualNumero");
		var ultimaSenha  = $("#ultimaSenhaNumero");
		var audioChamada = $("#audioChamada");
        
        //Passe
        if(e.shiftKey && e.keyCode == 188){
            $('.senhaAtualTexto').text($('#senhaNom').val());
        	ultimaSenha.html(senhaAtual.html());
            senha = parseInt(senhaNormal.val()) + 1;
            senhaAtual.html(pad(senha, 4));
            senhaNormal.val(pad(senha, 4));
            audioChamada.trigger("play");
            
        }
        else if(e.keyCode == 188){
            if (!e.shiftKey) {
             $('.senhaAtualTexto').text($('#senhaNom').val());
            (senha = parseInt(senhaNormal.val())  - 1); 
            senhaAtual.html(pad(senha, 4));
            senhaNormal.val(pad(senha, 4));
            }
        }
        //Preferencial Passe
        if(e.shiftKey && e.keyCode == 190){
		    $('.senhaAtualTexto').text($('#senhaNomP').val());
        	ultimaSenha.html(senhaAtual.html());
            senha = parseInt(senhaPrior.val().replace("P","")) + 1;
            senhaAtual.html("P" + pad(senha, 3));
            senhaPrior.val("P" + pad(senha, 3));
            audioChamada.trigger("play");
        }
        else if(e.keyCode == 190){
            if (!e.shiftKey) {
                senha = parseInt(senhaPrior.val().replace("P","")) - 1;
                senhaAtual.html("P" + pad(senha, 3));
                senhaPrior.val("P" + pad(senha, 3));
            }
        }
        //Muniz Arrumar
        if(e.shiftKey && e.keyCode == 65){
            $('.senhaAtualTexto').text($('#senhaMunizNom').val()); 
        	ultimaSenha.html(senhaAtual.html());
            senha = parseInt(senhaMuniz.val().replace(""," ")) + 1;
            senhaAtual.html("" + pad(senha, 3));
            senhaMuniz.val("" + pad(senha, 3));
            audioChamada.trigger("play");

            if (senhaAtual.html() !== "001") {
                $('.Tsena').text($("#senhaMunizNom").val());
        }


        }
        else if(e.keyCode == 65){
            if (!e.shiftKey) {
                senha = parseInt(senhaMuniz.val().replace(""," ")) - 1;
                senhaAtual.html("" + pad(senha, 3));
                senhaMuniz.val("" + pad(senha, 3));
            }
        }
        //Alessandra
        if (e.shiftKey && e.keyCode == 66) {
            $('.senhaAtualTexto').text($('#senhaAlessandraNom').val()); 
              ultimaSenha.html(senhaAtual.html());
              senha = parseInt(senhaAlessandra.val().replace("","")) + 1;
              senhaAtual.html("" + pad(senha, 3));
              senhaAlessandra.val("" + pad(senha, 3));
              audioChamada.trigger("play");

              if (senhaAtual.html() !== "A001") {
                $('.Tsena').text($("#senhaAlessandraNom").val());
        }


            }
        else if(e.keyCode == 66){
            if (!e.shiftKey) {
                senha = parseInt(senhaAlessandra.val().replace("","")) - 1;
                senhaAtual.html("" + pad(senha, 3));
                senhaAlessandra.val("" + pad(senha, 3));
            }
        }
        //Ricardo
        if(e.shiftKey && e.keyCode == 67){
            $('.senhaAtualTexto').text($('#senhaRicardoNom').val());
        	ultimaSenha.html(senhaAtual.html());
            senha = parseInt(senhaRicardo.val().replace("","")) + 1;
            senhaAtual.html("" + pad(senha, 3));
            senhaRicardo.val("" + pad(senha, 3));
            audioChamada.trigger("play");

            if (senhaAtual.html() !== "R001") {
                $('.Tsena').text($("#senhaRicardoNom").val());
        }


        }
        else if(e.keyCode == 67){
            if (!e.shiftKey) {
                senha = parseInt(senhaRicardo.val().replace("","")) - 1;
                senhaAtual.html("" + pad(senha, 3));
                senhaRicardo.val("" + pad(senha, 3));
            }
        }
        //Katia
        if(e.shiftKey && e.keyCode == 68){
            $('.senhaAtualTexto').text($('#senhaKatiaNom').val());
        	ultimaSenha.html(senhaAtual.html());
            senha = parseInt(senhaKatia.val().replace("","")) + 1;
            senhaAtual.html("" + pad(senha, 3));
            senhaKatia.val("" + pad(senha, 3));
            audioChamada.trigger("play");

            if (senhaAtual.html() !== "001") {
                $('.Tsena').text($("#senhaKatiaNom").val());
        }


        }
        else if(e.keyCode == 68){
            if (!e.shiftKey) {
                senha = parseInt(senhaKatia.val().replace("","")) - 1;
                senhaAtual.html("" + pad(senha, 3));
                senhaKatia.val("" + pad(senha, 3));
            }
        }

        //Edson
        if(e.shiftKey && e.keyCode == 69){
            $('.senhaAtualTexto').text($('#senhaEdsonNom').val());
        	ultimaSenha.html(senhaAtual.html());
            senha = parseInt(senhaEdson.val().replace("","")) + 1;
            senhaAtual.html("" + pad(senha, 3));
            senhaEdson.val("" + pad(senha, 3));
            audioChamada.trigger("play");
         
            if (senhaAtual.html() !== "001") {
                $('.Tsena').text($("#senhaEdsonNom").val());
        }

        }
        else if(e.keyCode == 69){
            if (!e.shiftKey) {
                senha = parseInt(senhaKatia.val().replace("","")) - 1;
                senhaAtual.html("" + pad(senha, 3));
                senhaKatia.val("" + pad(senha, 3));
            }
        }

        //Clélia
        if (e.shiftKey && e.keyCode == 70) {
            $('.senhaAtualTexto').text($('#senhaCleliaNom').val());
            ultimaSenha.html(senhaAtual.html());
            senha = parseInt(senhaClelia.val().replace("","")) + 1;
            senhaAtual.html("" + pad(senha, 3));
            senhaClelia.val("" + pad(senha, 3));
            audioChamada.trigger("play");
            
            if (senhaAtual.html() !== "001") {
                $('.Tsena').text($("#senhaCleliaNom").val());
        }

        }
        else if (e.keyCode == 70) {
            if (!e.shiftKey) {
                senha = parseInt(senhaClelia.val().replace("","")) - 1;
                senhaAtual.html("" + pad(senha, 3));
                senhaClelia.val("" + pad(senha, 3));
            }
        }

        //Tieme
        if (e.shiftKey && e.keyCode == 71) {
            $('.senhaAtualTexto').text($('#senhaTiemeNom').val());
            ultimaSenha.html(senhaAtual.html());
            senha = parseInt(senhaTieme.val().replace("","")) + 1;
            senhaAtual.html("" + pad(senha, 3));
            senhaTieme.val("" + pad(senha, 3));
            audioChamada.trigger("play");
          
            if (senhaAtual.html() !== "001") {
                $('.Tsena').text($("#senhaTiemeNom").val());
        }

        }
        else if (e.keyCode == 71) {
            if (!e.shiftKey) {
                senha = parseInt(senhaTieme.val().replace("","")) - 1;
                senhaAtual.html("" + pad(senha, 3));
                senhaTieme.val("" + pad(senha, 3));
            }
        }

        //Katia Gomes
        if (e.shiftKey && e.keyCode == 72) {
            $('.senhaAtualTexto').text($('#senhaKatiaGoNom').val());
            ultimaSenha.html(senhaAtual.html());
            senha = parseInt(senhaKatiaGo.val().replace("","")) + 1;
            senhaAtual.html("" + pad(senha, 3));
            senhaKatiaGo.val("" + pad(senha, 3));
            audioChamada.trigger("play");
         
            if (senhaAtual.html() !== "001") {
                $('.Tsena').text($("#senhaKatiaGoNom").val());
        }


        }
        else if (e.keyCode == 72) {
            if (!e.shiftKey) {
                senha = parseInt(senhaKatiaGo.val().replace("","")) - 1;
                senhaAtual.html("" + pad(senha, 3));
                senhaKatiaGo.val("" + pad(senha, 3));
            }
        }

        //Silvia
        if (e.shiftKey && e.keyCode == 73) {
            $('.senhaAtualTexto').text($('#senhaSilviaNom').val());
            ultimaSenha.html(senhaAtual.html());
            senha = parseInt(senhaSilvia.val().replace("","")) + 1;
            senhaAtual.html("" + pad(senha, 3));
            senhaSilvia.val("" + pad(senha, 3));
             audioChamada.trigger("play");

             if (senhaAtual.html() !== "001") {
                $('.Tsena').text($("#senhaSilviaNom").val());
        }


        }
        else if (e.keyCode == 73) {
            if (!e.shiftKey) {
                senha = parseInt(senhaSilvia.val().replace("","")) - 1;
                senhaAtual.html("" + pad(senha, 3));
                senhaSilvia.val("" + pad(senha, 3));
           }
        }
        //Adriana
        if (e.shiftKey && e.keyCode == 74) {
            $('.senhaAtualTexto').text($('#senhaAdrianaNom').val());
            ultimaSenha.html(senhaAtual.html());
            senha = parseInt(senhaAdriana.val().replace("","")) + 1;
            senhaAtual.html("" + pad(senha, 3));
            senhaAdriana.val("" + pad(senha, 3));
            audioChamada.trigger("play");

            if (senhaAtual.html() !== "001") {
                $('.Tsena').text($("#senhaAdrianaNom").val());
        }


        }
        else if (e.keyCode == 74) {
            if (!e.shiftKey) {
                senha = parseInt(senhaAdriana.val().replace("","")) - 1;
                senhaAtual.html("" + pad(senha, 3));
                senhaAdriana.val("" + pad(senha, 3));
           }
        }

        //Cesar
        if (e.shiftKey && e.keyCode == 75) {
            $('.senhaAtualTexto').text($('#senhaCesarNom').val());
            ultimaSenha.html(senhaAtual.html());
            senha = parseInt(senhaCesar.val().replace("","")) + 1;
            senhaAtual.html("" + pad(senha, 3));
            senhaCesar.val("" + pad(senha, 3));
            audioChamada.trigger("play");

            if (senhaAtual.html() !== "001") {
                $('.Tsena').text($("#senhaCesarNom").val());
        }


        }
        else if (e.keyCode == 75) {
            if (!e.shiftKey) {
                senha = parseInt(senhaCesar.val().replace("","")) - 1;
                senhaAtual.html("" + pad(senha, 3));
                senhaCesar.val("" + pad(senha, 3));
           }
        }

        //Fátima
        if (e.shiftKey && e.keyCode == 76) {
            $('.senhaAtualTexto').text($('#senhaFatimaNom').val());
            ultimaSenha.html(senhaAtual.html());
            senha = parseInt(senhaFatima.val().replace("","")) + 1;
            senhaAtual.html("" + pad(senha, 3));
            senhaFatima.val("" + pad(senha, 3));
            audioChamada.trigger("play");

            if (senhaAtual.html() !== "001") {
                $('.Tsena').text($("#senhaFatimaNom").val());
        }


        }
        else if (e.keyCode == 76) {
            if (!e.shiftKey) {
                senha = parseInt(senhaFatima.val().replace("","")) - 1;
                senhaAtual.html("" + pad(senha, 3));
                senhaFatima.val("" + pad(senha, 3));
           }
        }

        //Erika
        if (e.shiftKey && e.keyCode == 77) {
            $('.senhaAtualTexto').text($('#senhaErikaNom').val());
            ultimaSenha.html(senhaAtual.html());
            senha = parseInt(senhaErika.val().replace("","")) + 1;
            senhaAtual.html("" + pad(senha, 3));
            senhaErika.val("" + pad(senha, 3));
            audioChamada.trigger("play");

            if (senhaAtual.html() !== "001") {
                $('.Tsena').text($("#senhaErikaNom").val());
        }
            

        }
        else if (e.keyCode == 77) {
            if (!e.shiftKey) {
                senha = parseInt(senhaErika.val().replace("","")) - 1;
                senhaAtual.html("" + pad(senha, 3));
                senhaErika.val("" + pad(senha, 3));
           }
        }

        //Vera
        if (e.shiftKey && e.keyCode == 78) {
            $('.senhaAtualTexto').text($('#senhaVeraNom').val());
            ultimaSenha.html(senhaAtual.html());
            senha = parseInt(senhaVera.val().replace("","")) + 1;
            senhaAtual.html("" + pad(senha, 3));
            senhaVera.val("" + pad(senha, 3));
            audioChamada.trigger("play");

            if (senhaAtual.html() !== "001") {
                $('.Tsena').text($("#senhaVeraNom").val());
        }

        }
        else if (e.keyCode == 78) {
            if (!e.shiftKey) {
                senha = parseInt(senhaVera.val().replace("","")) - 1;
                senhaAtual.html("" + pad(senha, 3));
                senhaVera.val("" + pad(senha, 3));
           }
        }    

        //Simone
        if (e.shiftKey && e.keyCode == 79) {
            $('.senhaAtualTexto').text($('#senhaSimoneNom').val());
            ultimaSenha.html(senhaAtual.html());
            senha = parseInt(senhaSimone.val().replace("","")) + 1;
            senhaAtual.html("" + pad(senha, 3));
            senhaSimone.val("" + pad(senha, 3));
            audioChamada.trigger("play");

            if (senhaAtual.html() !== "001") {
                $('.Tsena').text($("#senhaSimoneNom").val());
        }

        }
        else if (e.keyCode == 79) {
            if (!e.shiftKey) {
                senha = parseInt(senhaSimone.val().replace("","")) - 1;
                senhaAtual.html("" + pad(senha, 3));
                senhaSimone.val("" + pad(senha, 3));
           }
        }

        //Mauricio
        if (e.shiftKey && e.keyCode == 80) {
            $('.senhaAtualTexto').text($('#senhaMauricioNom').val());
            ultimaSenha.html(senhaAtual.html());
            senha = parseInt(senhaMauricio.val().replace("","")) + 1;
            senhaAtual.html("" + pad(senha, 3));
            senhaMauricio.val("" + pad(senha, 3));
            audioChamada.trigger("play");
         
            if (senhaAtual.html() !== "001") {
                $('.Tsena').text($("#senhaMauricioNom").val());
        }

        }
        else if (e.keyCode == 80) {
            if (!e.shiftKey) {
                senha = parseInt(senhaMauricio.val().replace("","")) - 1;
                senhaAtual.html("" + pad(senha, 3));
                senhaMauricio.val("" + pad(senha, 3));
           }
        }

        //Eduardo
        if (e.shiftKey && e.keyCode == 81) {
            $('.senhaAtualTexto').text($('#senhaEduardoNom').val());
            ultimaSenha.html(senhaAtual.html());
            senha = parseInt(senhaEduardo.val().replace("","")) + 1;
            senhaAtual.html("" + pad(senha, 3));
            senhaEduardo.val("" + pad(senha, 3));
            audioChamada.trigger("play");
         
            if (senhaAtual.html() !== "001") {
                $('.Tsena').text($("#senhaEduardoNom").val());
        }

        }
        else if (e.keyCode == 81) {
            if (!e.shiftKey) {
                senha = parseInt(senhaEduardo.val().replace("","")) - 1;
                senhaAtual.html("" + pad(senha, 3));
                senhaEduardo.val("" + pad(senha, 3));
           }
        } 
        //Lilian
        if (e.shiftKey && e.keyCode == 82) {
            $('.senhaAtualTexto').text($('#senhaLilianNom').val());
            ultimaSenha.html(senhaAtual.html());
            senha = parseInt(senhaLilian.val().replace("","")) + 1;
            senhaAtual.html("" + pad(senha, 3));
            senhaLilian.val("" + pad(senha, 3));
            audioChamada.trigger("play");
         
            if (senhaAtual.html() !== "001") {
                $('.Tsena').text($("#senhaLilianNom").val());
        }

        }
        else if (e.keyCode == 82) {
            if (!e.shiftKey) {
                senha = parseInt(senhaLilian.val().replace("","")) - 1;
                senhaAtual.html("" + pad(senha, 3));
                senhaLilian.val("" + pad(senha, 3));
           }
        } 

        //Renato
        if (e.shiftKey && e.keyCode == 83) {
            $('.senhaAtualTexto').text($('#senhaRenatoNom').val());
            ultimaSenha.html(senhaAtual.html());
            senha = parseInt(senhaRenato.val().replace("","")) + 1;
            senhaAtual.html("" + pad(senha, 3));
            senhaRenato.val("" + pad(senha, 3));
            audioChamada.trigger("play");
         
            if (senhaAtual.html() !== "001") {
                $('.Tsena').text($("#senhaRenatoNom").val());
        }

        }
        else if (e.keyCode == 83) {
            if (!e.shiftKey) {
                senha = parseInt(senhaRenato.val().replace("","")) - 1;
                senhaAtual.html("" + pad(senha, 3));
                senhaRenato.val("" + pad(senha, 3));
           }
        } 
        

        //Samantha
        if (e.shiftKey && e.keyCode == 84) {
            $('.senhaAtualTexto').text($('#senhaSamanthaNom').val());
            ultimaSenha.html(senhaAtual.html());
            senha = parseInt(senhaSamantha.val().replace("","")) + 1;
            senhaAtual.html("" + pad(senha, 3));
            senhaSamantha.val("" + pad(senha, 3));
            audioChamada.trigger("play");
         
            if (senhaAtual.html() !== "001") {
                $('.Tsena').text($("#senhaSamanthaNom").val());
        }

        }
        else if (e.keyCode == 84) {
            if (!e.shiftKey) {
                senha = parseInt(senhaSamantha.val().replace("","")) - 1;
                senhaAtual.html("" + pad(senha, 3));
                senhaSamantha.val("" + pad(senha, 3));
            }
        }
        
        //Rodrigo
        if (e.shiftKey && e.keyCode == 85) {
            $('.senhaAtualTexto').text($('#senhaRodrigoNom').val());
            ultimaSenha.html(senhaAtual.html());
            senha = parseInt(senhaRodrigo.val().replace("","")) + 1;
            senhaAtual.html("" + pad(senha, 3));
            senhaRodrigo.val("" + pad(senha, 3));
            audioChamada.trigger("play");
         
            if (senhaAtual.html() !== "001") {
                $('.Tsena').text($("#senhaRodrigoNom").val());
        }

        }
        else if (e.keyCode == 85) {
            if (!e.shiftKey) {
                senha = parseInt(senhaRodrigo.val().replace("","")) - 1;
                senhaAtual.html("" + pad(senha, 3));
                senhaRodrigo.val("" + pad(senha, 3));
            }
        }
        
        //Dom
        if (e.shiftKey && e.keyCode == 86) {
            $('.senhaAtualTexto').text($('#senhaDomNom').val());
            ultimaSenha.html(senhaAtual.html());
            senha = parseInt(senhaDom.val().replace("","")) + 1;
            senhaAtual.html("" + pad(senha, 3));
            senhaDom.val("" + pad(senha, 3));
            audioChamada.trigger("play");
         
            if (senhaAtual.html() !== "001") {
                $('.Tsena').text($("#senhaDomNom").val());
        }

        }
        else if (e.keyCode == 86) {
            if (!e.shiftKey) {
                senha = parseInt(senhaDom.val().replace("","")) - 1;
                senhaAtual.html("" + pad(senha, 3));
                senhaDom.val("" + pad(senha, 3));
            }
        }
        
        //Anna Cris
        if (e.shiftKey && e.keyCode == 87) {
            $('.senhaAtualTexto').text($('#senhaAnnaCNom').val());
            ultimaSenha.html(senhaAtual.html());
            senha = parseInt(senhaAnnaC.val().replace("","")) + 1;
            senhaAtual.html("" + pad(senha, 3));
            senhaAnnaC.val("" + pad(senha, 3));
            audioChamada.trigger("play");
         
            if (senhaAtual.html() !== "001") {
                $('.Tsena').text($("#senhaAnnaCNom").val());
        }

        }
        else if (e.keyCode == 87) {
            if (!e.shiftKey) {
                senha = parseInt(senhaAnnaC.val().replace("","")) - 1;
                senhaAtual.html("" + pad(senha, 3));
                senhaAnnaC.val("" + pad(senha, 3));
            }
        }
        
        //Lais
        if (e.shiftKey && e.keyCode == 88) {
            $('.senhaAtualTexto').text($('#senhaLaisNom').val());
            ultimaSenha.html(senhaAtual.html());
            senha = parseInt(senhaLais.val().replace("","")) + 1;
            senhaAtual.html("" + pad(senha, 3));
            senhaLais.val("" + pad(senha, 3));
            audioChamada.trigger("play");
         
            if (senhaAtual.html() !== "001") {
                $('.Tsena').text($("#senhaLaisNom").val());
        }


        }
        else if (e.keyCode == 88) {
            if (!e.shiftKey) {
                senha = parseInt(senhaLais.val().replace("","")) - 1;
                senhaAtual.html("" + pad(senha, 3));
                senhaLais.val("" + pad(senha, 3));
            }
        }     

        //Waldemar
        if (e.shiftKey && e.keyCode == 89) {
            $('.senhaAtualTexto').text($('#senhaWaldemarNom').val());
            ultimaSenha.html(senhaAtual.html());
            senha = parseInt(senhaWaldemar.val().replace("","")) + 1;
            senhaAtual.html("" + pad(senha, 3));
            senhaWaldemar.val("" + pad(senha, 3));
            audioChamada.trigger("play");
         
            if (senhaAtual.html() !== "001") {
                $('.Tsena').text($("#senhaWaldemarNom").val());
        }

        }
        else if (e.keyCode == 89) {
            if (!e.shiftKey) {
                senha = parseInt(senhaWaldemar.val().replace("","")) - 1;
                senhaAtual.html("" + pad(senha, 3));
                senhaWaldemar.val("" + pad(senha, 3));
            }
        }

        //Celso
        if (e.shiftKey && e.keyCode == 90) {
            $('.senhaAtualTexto').text($('#senhaCelsoNom').val());
            ultimaSenha.html(senhaAtual.html());
            senha = parseInt(senhaCelso.val().replace("","")) + 1;
            senhaAtual.html("" + pad(senha, 3));
            senhaCelso.val("" + pad(senha, 3));
            audioChamada.trigger("play");
         
            if (senhaAtual.html() !== "001") {
                $('.Tsena').text($("#senhaCelsoNom").val());
        }

        }
        else if (e.keyCode == 90) {
            if (!e.shiftKey) {
                senha = parseInt(senhaCelso.val().replace("","")) - 1;
                senhaAtual.html("" + pad(senha, 3));
                senhaCelso.val("" + pad(senha, 3));
            }
        }

        //Katia Lima
        if (e.shiftKey && e.keyCode == 48) {
            $('.senhaAtualTexto').text($('#senhaKatiaLiNom').val());
            ultimaSenha.html(senhaAtual.html());
            senha = parseInt(senhaKatiaLi.val().replace("","")) + 1;
            senhaAtual.html("" + pad(senha, 3));
            senhaKatiaLi.val("" + pad(senha, 3));
            audioChamada.trigger("play");
         
            if (senhaAtual.html() !== "001") {
                $('.Tsena').text($("#senhaKatiaLiNom").val());
        }

        }
        else if (e.keyCode == 48) {
            if (!e.shiftKey) {
                senha = parseInt(senhaKatiaLi.val().replace("","")) - 1;
                senhaAtual.html("" + pad(senha, 3));
                senhaKatiaLi.val("" + pad(senha, 3));
            }
        }

        //Gigi
        if (e.shiftKey && e.keyCode == 49) {
            $('.senhaAtualTexto').text($('#senhaGigiNom').val());
            ultimaSenha.html(senhaAtual.html());
            senha = parseInt(senhaGigi.val().replace("","")) + 1;
            senhaAtual.html("" + pad(senha, 3));
            senhaGigi.val("" + pad(senha, 3));
            audioChamada.trigger("play");

            if (senhaAtual.html() !== "001") {
                $('.Tsena').text($("#senhaGigiNom").val());
        }


        }
        else if (e.keyCode == 49) {
            if (!e.shiftKey) {
                senha = parseInt(senhaGigi.val().replace("","")) - 1;
                senhaAtual.html("" + pad(senha, 3));
                senhaGigi.val("" + pad(senha, 3));
            }
        }

        //Dr Klaus
        if (e.shiftKey && e.keyCode == 50) {
            $('.senhaAtualTexto').text($('#senhaDrKlausNom').val());
            ultimaSenha.html(senhaAtual.html());
            senha = parseInt(senhaDrKlaus.val().replace("","")) + 1;
            senhaAtual.html("" + pad(senha, 3));
            senhaDrKlaus.val("" + pad(senha, 3));
            audioChamada.trigger("play");
            if (senhaAtual.html() !== "001") {
                $('.Tsena').text($("#senhaDrKlausNom").val());
        }

        }
        else if (e.keyCode == 50) {
            if (!e.shiftKey) {
                senha = parseInt(senhaDrKlaus.val().replace("","")) - 1;
                senhaAtual.html("" + pad(senha, 3));
                senhaDrKlaus.val("" + pad(senha, 3));
            }
        }

        //Dr Hanz
        if (e.shiftKey && e.keyCode == 51) {
            $('.senhaAtualTexto').text($('#senhaDrHanzNom').val());
            ultimaSenha.html(senhaAtual.html());
            senha = parseInt(senhaDrHanz.val().replace("","")) + 1;
            senhaAtual.html("" + pad(senha, 3));
            senhaDrHanz.val("" + pad(senha, 3));
            audioChamada.trigger("play");

            if (senhaAtual.html() !== "001") {
                $('.Tsena').text($("#senhaDrHanzNom").val());
        }

        }
        else if (e.keyCode == 51) {
            if (!e.shiftKey) {
            senha = parseInt(senhaDrHanz.val().replace("","")) - 1;
            senhaAtual.html("" + pad(senha, 3));
            senhaDrHanz.val("" + pad(senha, 3));
        }
    }

        //Dr Alberto
        if (e.shiftKey && e.keyCode == 52) {
            $('.senhaAtualTexto').text($('#senhaDrAlbeNom').val());
            ultimaSenha.html(senhaAtual.html());
            senha = parseInt(senhaDrAlbe.val().replace("","")) + 1;
            senhaAtual.html("" + pad(senha, 3));
            senhaDrAlbe.val("" + pad(senha, 3));
            audioChamada.trigger("play");

            if (senhaAtual.html() !== "001") {
                $('.Tsena').text($("#senhaDrAlbeNom").val());
        }

        }
        else if (e.keyCode == 52) {
            if (!e.shiftKey) {
                senha = parseInt(senhaDrAlbe.val().replace("","")) - 1;
                senhaAtual.html("" + pad(senha, 3));
                senhaDrAlbe.val("" + pad(senha, 3));
            }
        }

        //Dr Eduardo
        if (e.shiftKey && e.keyCode == 53) {
            $('.senhaAtualTexto').text($('#senhaDrEduNom').val());
            ultimaSenha.html(senhaAtual.html());
            senha = parseInt(senhaDrEdu.val().replace("","")) + 1;
            senhaAtual.html("" + pad(senha, 3));
            senhaDrEdu.val("" + pad(senha, 3));
            audioChamada.trigger("play");

            if (senhaAtual.html() !== "001") {
                $('.Tsena').text($("#senhaDrEduNom").val());
        }

        }
        else if (e.keyCode == 53) {
            if (!e.shiftKey) {
                senha = parseInt(senhaDrEdu.val().replace("","")) - 1;
                senhaAtual.html("" + pad(senha, 3));
                senhaDrEdu.val("" + pad(senha, 3));
               }
            }

        //Dr Nicopai
        if (e.shiftKey && e.keyCode == 54) {
            $('.senhaAtualTexto').text($('#senhaDrNicopaiNom').val());
            ultimaSenha.html(senhaAtual.html());
            senha = parseInt(senhaDrNicopai.val().replace("","")) + 1;
            senhaAtual.html("" + pad(senha, 3));
            senhaDrNicopai.val("" + pad(senha, 3));
            audioChamada.trigger("play");

            if (senhaAtual.html() !== "001") {
                $('.Tsena').text($("#senhaDrNicopaiNom").val());
        }

        }
        else if (e.keyCode == 54) {
            if (!e.shiftKey) {
                senha = parseInt(senhaDrNicopai.val().replace("","")) - 1;
                senhaAtual.html("" + pad(senha, 3));
                senhaDrNicopai.val("" + pad(senha, 3));
               }
            }

        //Dr Erminio
        if (e.shiftKey && e.keyCode == 55) {
        $('.senhaAtualTexto').text($('#senhaDrErminioNom').val());
        ultimaSenha.html(senhaAtual.html());
        senha = parseInt(senhaDrErminio.val().replace("","")) + 1;
        senhaAtual.html("" + pad(senha, 3));
        senhaDrErminio.val("" + pad(senha, 3));
        audioChamada.trigger("play");

        if (senhaAtual.html() !== "001") {
            $('.Tsena').text($("#senhaDrErminioNom").val());
    }


        }
        else if (e.keyCode == 55) {
            if (!e.shiftKey) {
                senha = parseInt(senhaDrErminio.val().replace("","")) - 1;
                senhaAtual.html("" + pad(senha, 3));
                senhaDrErminio.val("" + pad(senha, 3));
               }
            }

        //Dr Frederico
        if (e.shiftKey && e.keyCode == 56) {
            $('.senhaAtualTexto').text($('#senhaDrFredeNom').val());
            ultimaSenha.html(senhaAtual.html());
            senha = parseInt(senhaDrFrede.val().replace("","")) + 1;
            senhaAtual.html("" + pad(senha, 3));
            senhaDrFrede.val("" + pad(senha, 3));
            audioChamada.trigger("play");

            if (senhaAtual.html() !== "001") {
                $('.Tsena').text($("#senhaDrFredeNom").val());
        }

        }
        else if (e.keyCode == 56) {
            if (!e.shiftKey) {
                senha = parseInt(senhaDrFrede.val().replace("","")) - 1;
                senhaAtual.html("" + pad(senha, 3));
                senhaDrFrede.val("" + pad(senha, 3));
            }
        }

        //Dr Kalito
        if (e.shiftKey && e.keyCode == 57) {
            $('.senhaAtualTexto').text($('#senhaDrKalitoNom').val());
            ultimaSenha.html(senhaAtual.html());
            senha = parseInt(senhaDrKalito.val().replace("","")) + 1;
            senhaAtual.html("" + pad(senha, 3));
            senhaDrKalito.val("" + pad(senha, 3));
            audioChamada.trigger("play");

            if (senhaAtual.html() !== "001") {
                $('.Tsena').text($("#senhaDrKalitoNom").val());
        }

        }
       else if (e.keyCode == 57) {
           if (!e.shiftKey) {
               senha = parseInt(senhaDrKalito.val().replace("","")) - 1;
               senhaAtual.html("" + pad(senha, 3));
               senhaDrKalito.val("" + pad(senha, 3));
              }
            }


    });
});