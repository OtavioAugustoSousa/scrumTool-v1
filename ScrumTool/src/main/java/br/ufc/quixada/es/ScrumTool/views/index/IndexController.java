package br.ufc.quixada.es.ScrumTool.views.index;

import java.security.Principal;

import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.context.request.async.DeferredResult;

@Controller
public class IndexController {
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String index(Principal principal) {
		return "index/index";
	}
	
	@RequestMapping(value = "/historia", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE)
	public String save() {
		
		return "Hello World";
	}

}
