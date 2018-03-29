package controle;

public class Start {
	public static void main(String[] args) {
		// verificar se possui 4 argumentos
		if (args.length != 4) {
			System.exit(-1);
		}
		// verificar se o compirmento dos argumentos são validos
		if (args[0].length() != 8 || args[1].length() != 4 || args[2].length() != 8 ) {
			System.exit(-1);
		}
				
		// args[0] contém data de interesse
		int di = Integer.parseInt(args[0]);
		int anobi = Integer.parseInt(args[1]);
		int dref = Integer.parseInt(args[2]);
		int dia_sem = Integer.parseInt(args[3]);
		
		int ano = di / 10_000;
		int mes = (di / 100) % 100;
		int dia = di % 100;
		
		int anor = dref/10_000;
		int mesr = dref/100 %100;
		int diar = dref % 100;
		
		
		//verificacao se avanca ou deduz os dias
		if(ano > anor){ //Avancar
			Avancar a = new Avancar();
			System.out.println(a.avancaDia(diar, mesr, anor, dia, mes, ano, anobi));
			
		} else if(ano == anor && mes < mesr){
			Avancar a = new Avancar();
			System.out.println(a.avancaDia(diar, mesr, anor, dia, mes, ano, anobi));
			
		} else if(ano == anor && mes == mesr && dia > diar){//Avancar
			
			
		} else {//REduzir
		
		}
						
		
	}
}
