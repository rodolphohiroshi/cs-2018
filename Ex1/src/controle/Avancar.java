package controle;

public class Avancar {
	public int avancaDia(int dr, int mr, int ar, int d, int m, int a, int abi){
		int qtd = 0;
		int mod = abi % 4;
		
		//verifica se a data desejada é diferente da data referencia
		while (dr!= d && mr!= m && ar!= a){
			//verifica se o dia ref e menor que 28
			while(dr < 28){
				dr++;
				qtd++;			
			}
			
			while(mr == 2){
			//verificar ano bissexto se ano é <400 
				if(ar % 400 == mod){
					dr++;
					qtd++;
	        // se o ano for menor que 400
				} else if((ar % 4 == mod) && (ar % 100 != 0)){
					dr++;
					qtd++;		
				}else {
					qtd++;
					dr=1;
					mr++;				
				}
				
			} 
		
		}//final do while
		
		
		return qtd;		
	}

		
}

