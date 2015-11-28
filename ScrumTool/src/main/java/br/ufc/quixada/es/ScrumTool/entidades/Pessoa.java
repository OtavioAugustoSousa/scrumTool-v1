package br.ufc.quixada.es.ScrumTool.entidades;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

@Entity
public class Pessoa {
	@Id
	private Long id;
	private String nome;
	private String email;
	@OneToOne
	private Usuario usuario;
	@OneToOne
	private Papel papel;

	public Long getId() {
		return id;
	}

	public String getNome() {
		return nome;
	}

	public String getEmail() {
		return email;
	}

	public Usuario getUsuario() {
		return usuario;
	}

	

	public Papel getPapel() {
		return papel;
	}

	public void setPapel(Papel papel) {
		this.papel = papel;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}

}
