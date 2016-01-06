package br.ufc.quixada.es.ScrumTool.facade;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import br.ufc.quixada.es.ScrumTool.entidades.Backlog;
import br.ufc.quixada.es.ScrumTool.service.BacklogService;

@Component
public class BacklogFacade {

	@Autowired
	private BacklogService backlogService;

	public void save(Backlog backlog) {
		backlogService.save(backlog);
	}

	public void update(Backlog backlog) {
		backlogService.update(backlog);
	}

	public void remove(Long id) {
		backlogService.remove(id);
	}
	
	public Backlog findById(Long id){
		return backlogService.findById(id);
	}
	
	public List<Backlog> getBacklogs() {
		return backlogService.getBacklogs();
		}	
}
