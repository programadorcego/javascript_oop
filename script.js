class Carro
{
	constructor(modelo, ano)
	{
		this.modelo = modelo;
		this.ano = ano;
		this.ligado = false;
		this.ld = "não está ligado";
	}
	
	info()
	{
		document.write('Este carro é um ' + this.modelo + ' ' + this.ano + ' e ' + this.ld);
	}
	
	ligar()
	{
		this.ligado = true;
		this.ld = "está ligado";
	}
	
	desligar()
	{
		this.ligado = false;
		this.ld = "não está ligado";
	}
	
	get model()
	{
		return this.modelo;
	}
	
	set model(modelo)
	{
		this.modelo = modelo;
	}
	
	static staticMethod()
	{
		return "Isso é um método estático!";
	}
}