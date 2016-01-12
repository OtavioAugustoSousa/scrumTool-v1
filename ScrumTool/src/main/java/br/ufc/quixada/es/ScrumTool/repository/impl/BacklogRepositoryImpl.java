package br.ufc.quixada.es.ScrumTool.repository.impl;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import br.ufc.quixada.es.ScrumTool.entidades.Backlog;
import br.ufc.quixada.es.ScrumTool.repository.BacklogRepository;

@Repository
public class BacklogRepositoryImpl implements BacklogRepository {

	@PersistenceContext
	private EntityManager entityManager;
	private final static String DELETE = "DELETE FROM Backlog p Where p.id = :id";

	@Override
	@Transactional
	public Backlog save(Backlog backlog) {
		entityManager.persist(backlog);
		return backlog;
	}

	@Override
	@Transactional
	public void remove(Long id) {
		Query q = entityManager.createQuery(DELETE).setParameter("id", id);
		q.executeUpdate();
	}

	@Override
	@Transactional
	public void update(Backlog backlog) {
		entityManager.merge(backlog);

	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Backlog> list() {
		return entityManager.createQuery("FROM " + Backlog.class.getName()).getResultList();
	}

	@Override
	public Backlog findById(Long id) {
		return entityManager.find(Backlog.class, id);
	}

}
