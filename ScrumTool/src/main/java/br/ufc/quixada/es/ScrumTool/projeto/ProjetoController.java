package br.ufc.quixada.es.ScrumTool.projeto;

import java.security.Principal;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
@Controller
public class ProjetoController {
	@RequestMapping(value = "/projeto", method = RequestMethod.GET)
	public String index(Principal principal) {
		return "projeto/projeto";
	}
}
