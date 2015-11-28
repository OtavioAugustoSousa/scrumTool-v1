package br.ufc.quixada.es.ScrumTool.entidades;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Sprint {
	@Id
	private Long id;
	private String nome;
	private LocalDate datainicio;
	private LocalDate datafim;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public LocalDate getDatainicio() {
		return datainicio;
	}

	public void setDatainicio(LocalDate datainicio) {
		this.datainicio = datainicio;
	}

	public LocalDate getDatafim() {
		return datafim;
	}

	public void setDatafim(LocalDate datafim) {
		this.datafim = datafim;
	}

}
