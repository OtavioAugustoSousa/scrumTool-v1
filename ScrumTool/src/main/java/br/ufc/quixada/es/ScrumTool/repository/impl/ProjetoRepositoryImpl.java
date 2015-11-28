package br.ufc.quixada.es.ScrumTool.repository.impl;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;

import br.ufc.quixada.es.ScrumTool.entidades.Projeto;
import br.ufc.quixada.es.ScrumTool.repository.ProjetoRepository;

@Repository
public class ProjetoRepositoryImpl implements ProjetoRepository {

	@PersistenceContext
	private EntityManager entityManager;

	@Override
	public void save(Projeto projeto) {
		entityManager.persist(projeto);
	}

	@Override
	public void remove(Projeto projeto) {
		entityManager.remove(projeto);
	}

	@Override
	public void update(Projeto projeto) {
		entityManager.merge(projeto);

	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Projeto> list() {
		return entityManager.createQuery("FROM " + Projeto.class.getName())
				.getResultList();
	}

	@Override
	public Projeto findById(Long id) {
		return entityManager.find(Projeto.class, id);
		}
}
