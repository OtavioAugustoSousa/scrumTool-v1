package br.ufc.quixada.es.ScrumTool.entidades;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Papel {
	@Id
	private Long id;
	private String tipo;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTipo() {
		return tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}

}
