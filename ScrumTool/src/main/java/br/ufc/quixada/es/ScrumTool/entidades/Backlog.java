package br.ufc.quixada.es.ScrumTool.entidades;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

@Entity
public class Backlog {
	@Id
	private Long id;
	@ManyToOne
	private Sprint sprint;
	private String como;
	private String quero;
	private String para;
	private String titulo;
	@OneToMany
	private List<Tag> tags;
	@ManyToOne
	private Pessoa pessoa;
	private Integer esforco;
	private Estado estado;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Sprint getSprint() {
		return sprint;
	}

	public void setSprint(Sprint sprint) {
		this.sprint = sprint;
	}

	public String getComo() {
		return como;
	}

	public void setComo(String como) {
		this.como = como;
	}

	public String getQuero() {
		return quero;
	}

	public void setQuero(String quero) {
		this.quero = quero;
	}

	public String getPara() {
		return para;
	}

	public void setPara(String para) {
		this.para = para;
	}

	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public List<T> getTags() {
		return tags;
	}

	public void setTags(List<Tag> tags) {
		this.tags = tags;
	}

	public Pessoa getPessoa() {
		return pessoa;
	}

	public void setPessoa(Pessoa pessoa) {
		this.pessoa = pessoa;
	}

	public Integer getEsforco() {
		return esforco;
	}

	public void setEsforco(Integer esforco) {
		this.esforco = esforco;
	}

	public Estado getEstado() {
		return estado;
	}

	public void setEstado(Estado estado) {
		this.estado = estado;
	}

}
