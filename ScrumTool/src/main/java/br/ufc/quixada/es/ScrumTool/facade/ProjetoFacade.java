package br.ufc.quixada.es.ScrumTool.facade;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import br.ufc.quixada.es.ScrumTool.entidades.Projeto;
import br.ufc.quixada.es.ScrumTool.service.ProjetoService;

@Component
public class ProjetoFacade {

	@Autowired
	private ProjetoService projetoService;

	public void save(Projeto projeto) {
		projetoService.save(projeto);
	}

	public void update(Projeto projeto) {
		projetoService.update(projeto);
	}

	public void remove(Projeto projeto) {
		projetoService.remove(projeto);
	}
	
	public Projeto findById(Long id){
		return projetoService.findById(id);
	}
	
	public List<Projeto> getProjetos() {
		return projetoService.getProjetos();
	}
}
