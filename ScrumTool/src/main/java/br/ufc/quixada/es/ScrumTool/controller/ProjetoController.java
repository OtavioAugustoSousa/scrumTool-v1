package br.ufc.quixada.es.ScrumTool.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.ufc.quixada.es.ScrumTool.entidades.Projeto;
import br.ufc.quixada.es.ScrumTool.facade.ProjetoFacade;

@RestController
public class ProjetoController {
	
	@Autowired ProjetoFacade projetoFacade;

	@RequestMapping("/test")
	public String adiciona() {
		Projeto projeto = new Projeto();
		projeto.setNome("test");
		projeto.setDatainicio(LocalDate.now());
		projeto.setDatafim(LocalDate.now());
		projetoFacade.save(projeto);
		return "tarefa-adicionada";
	}

	@RequestMapping("/projeto/list")
	public List<Projeto> list() {	
		return projetoFacade.getProjetos();
	}
}
