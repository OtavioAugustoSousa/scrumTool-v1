package br.ufc.quixada.es.ScrumTool.facade;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import br.ufc.quixada.es.ScrumTool.entidades.Projeto;
import br.ufc.quixada.es.ScrumTool.service.ProjetoService;

@Component
public class ProjetoFacade {

	@Autowired
	private ProjetoService projetoService;
	
	public void save(Projeto projeto){
		projetoService.save(projeto);
	}
}
