package br.ufc.quixada.es.ScrumTool.entidades;

import java.time.LocalDate;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Projeto {
	@Id
	private Long id;
	private String nome;
	private LocalDate datainicio;
	private LocalDate datafim;
	@OneToMany
	private List<Sprint> sprints;

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

	public List<Sprint> getSprints() {
		return sprints;
	}

	public void setSprints(List<Sprint> sprints) {
		this.sprints = sprints;
	}
}
