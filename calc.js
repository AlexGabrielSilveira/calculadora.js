function closeAlert(){
    document.getElementById('close').style.display = 'none'
}

      document.addEventListener('keydown', keyDetection)

      function keyDetection(event) {
        var tecla = event.key

        switch(tecla) {
          case '0':
            calcular('valor', tecla)
          break;
          case '1': 
            calcular('valor', tecla)
          break;
          case '2':
            calcular('valor', tecla)
          break;
          case '3': 
            calcular('valor', tecla)
          break;
          case '4':
            calcular('valor', tecla)
          break;
          case '5': 
            calcular('valor', tecla)
          break;
          case '6':
            calcular('valor', tecla)
          break;
          case '7': 
            calcular('valor', tecla)
          break;
          case '8':
            calcular('valor', tecla)
          break;
          case '9': 
            calcular('valor', tecla)
          break;
          case 'Backspace': 
            calcular('acao', 'c')
          break;
          case '+':
            calcular('acao', '+')
          break;
          case '-': 
            calcular('acao', '-')
          break;
          case 'x':
            calcular('acao', '*')
          break;
          case '/': 
            calcular('acao', '/')
          break;
          case '.':
            calcular('acao', '.')
          break;
          case 'Enter':
            calcular('acao', '=')
          break;
          
          
          
        }

       
      }



      function calcular(tipo, valor){
        if(tipo === 'acao'){
            
            if(valor === 'c') {
                document.getElementById('resultado').value = ''
            }
            if(valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.') {
                document.getElementById('resultado'). value += valor
            }


            if(valor === '='){
              var valorCampo = eval(document.getElementById('resultado').value)
              if(valorCampo === undefined) {
                alert('digite sua conta primeiro') 
                return
                
              }
                document.getElementById('resultado').value = valorCampo
            }

        }else if(tipo === 'valor'){
            document.getElementById('resultado').value += valor
        }


      }