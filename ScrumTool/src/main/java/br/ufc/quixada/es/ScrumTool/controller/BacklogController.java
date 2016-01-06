package br.ufc.quixada.es.ScrumTool.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.ufc.quixada.es.ScrumTool.entidades.Backlog;
import br.ufc.quixada.es.ScrumTool.facade.BacklogFacade;

@RestController
@RequestMapping(value="/backlogs")
public class BacklogController {
	
	@Autowired 
	private BacklogFacade backlogFacade;

	@RequestMapping(value="", method=RequestMethod.POST,consumes="application/json", produces="application/json")
	public void adiciona(@RequestBody Backlog backlog) {
		backlogFacade.save(backlog);
	}

	@RequestMapping(value="",method=RequestMethod.GET, produces="application/json")
	public List<Backlog> list() {	
		return backlogFacade.getBacklogs();
	}
	
	@RequestMapping(value="/{id}", method=RequestMethod.DELETE)
	public void delete(@PathVariable("id") Long id) {
		backlogFacade.remove(id);
	}
	
	@RequestMapping(value="", method=RequestMethod.PATCH)
	public void update(@RequestBody Backlog backlog) {
		backlogFacade.update(backlog);
	}
}
