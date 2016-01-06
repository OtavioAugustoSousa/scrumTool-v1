package br.ufc.quixada.es.ScrumTool.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.ufc.quixada.es.ScrumTool.entidades.Projeto;
import br.ufc.quixada.es.ScrumTool.repository.ProjetoRepository;

@Service
public class ProjetoService {

	@Autowired
	private ProjetoRepository projetoRepository;

	public void save(Projeto projeto) {
		projetoRepository.save(projeto);
	}

	public void update(Projeto projeto) {
		projetoRepository.update(projeto);
	}

	public void remove(Projeto projeto) {
		projetoRepository.remove(projeto);
	}
	
	public Projeto findById(Long id){
		return projetoRepository.findById(id);
	}
	
	public List<Projeto> getProjetos() {
		return projetoRepository.list();
	}
}
