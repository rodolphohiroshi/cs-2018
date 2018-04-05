package controle;

public class Avancar {
	
	public int avancaDia(int diaref, int mesref, int anoref, int diai, int mesi, int anoi, int anobi){
		int qtd = 0;
				
		//verifica se a data de interesse é diferente da data referencia
		
		while (diaref!= diai && mesref!= mesi && anoref!= anoi){
			
			//verifica se o dia ref e menor que 28
			if (diaref < 28){
				diaref = 28 - diaref
				qtd = qtd+diaref;			
			}
			//mes de fevereiro com 28 ou 29 dias
			while(mesref == 2){
			//verificar ano bissexto 
				if (Math.abs(anoref - anobi) % 4 == 0 ){//se verdadeiro executa verifica se é divisivel por 100 e 400
					if(anoref % 100 == 0 && anoref % 400 != 0){
						qtd++;
						diaref=1;
						mesref++;
					}else
						qtd = qtd+2;
						diaref = 1;
						mesref++;					
				}else{
					qtd++;
					diaref=1;
					mesref++;
				}
			}
			
			//meses com 30 dias
			while(mesref == 4 || mesref==6 || mesref ==9 || mesref == 11){
				while(diaref < 30){
					diaref++;
					qtd++;			
				}
				qtd++;	
				diaref=1;
				mesref++;
			}
			//meses com 31 dias
			while (mesref == 1|| mesref==3|| mesref==5|| mesref==7|| mesref==8|| mesref==10|| mesref==12){
				while(diaref<31){
					diaref++;
					qtd++;
				}
				if(mesref ==12){
					qtd++;
					diaref=1;
					mesref=1;
					anoref++;
				}else{
					qtd++;
					diaref=1;
					mesref++;
				}
					
			}
						
		}//final do while
		
		
		return qtd;		
	}

		
}

