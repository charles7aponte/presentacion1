function Pagina(){
	return {
			/**************atributos ******************/
			$elementoPadre:$("#contenedor_paginas")
			,paginas:Array()
			,$paginaActual:null
			,posicionActual:-1
			,idPagina:0  //contador del id de las paginas
			,$htmlPaginado:$("#html_mi_paginacion_paginas")



			/*************** funciones ******************/
			,nueva:function(){
				this.idPagina++;
				var $nuevaPagina= $("<div class='pagina' id='pagina"+this.idPagina+"'>");
				
				this.paginas.push($nuevaPagina[0]);
				this.$elementoPadre.append($nuevaPagina);


				this.$paginaActual=$nuevaPagina;
				
			}


			,showPaginaActual:function(){
				if(this.$paginaActual)
				{

					for(var i=0; i<this.paginas.length ; i++)
					{
						$(this.paginas[i]).hide();
					}

					this.$paginaActual.show();
				}

			}


			,htmlPaginado:function()
			{

				var html=" <li class='arrow unavailable'><a href='' onclick='return false '>&laquo;</a></li> ";

				for(var i=0; i< this.paginas.length ; i++)
					{

						if(this.paginas[i]==this.$paginaActual[0])
						{
							html+="<li class='current'><a href='' onclick='return false ' >"+(i+1)+"</a></li>";		
						}
						else{
							html+="<li><a  onclick='manejadorPaginas.seleccionarPagina("+i+")' >"+(i+1)+"</a></li>";
						}
					}

				html+="<li class='arrow'><a href='' onclick='return false '>&raquo;</a></li>";

				this.$htmlPaginado.html(html);

				return html;
			}


			/****
			@param {int} posicionPagina   indica la poscion del pagina dentro de lista {paginas} 
			*/
			,seleccionarPagina:function(posicionPagina)
			{

				this.$paginaActual = $(this.paginas[posicionPagina]);
				this.posicionActual=posicionPagina;

				this.showPaginaActual();
				this.htmlPaginado();

				return false;

			}

		};
};