class Carro
{
	constructor(marca)
	{
		this.marca = marca;
	}
	
	presente()
	{
		return `Eu tenho um ${this.marca}`;
	}
}

class Modelo extends Carro
{
	constructor(marca, modelo)
	{
		super(marca);
		this.modelo = modelo;
	}
	
	mostrar()
	{
		return `${this.presente()}. Ele é um ${this.modelo}`;
	}
}