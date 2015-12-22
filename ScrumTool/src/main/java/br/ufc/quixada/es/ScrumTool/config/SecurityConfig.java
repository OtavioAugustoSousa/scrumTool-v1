package br.ufc.quixada.es.ScrumTool.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.annotation.web.servlet.configuration.EnableWebMvcSecurity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.crypto.password.StandardPasswordEncoder;

@Configuration
@EnableWebMvcSecurity
class SecurityConfig extends WebSecurityConfigurerAdapter {
	
 



    @Bean
    public PasswordEncoder passwordEncoder() {
        return new StandardPasswordEncoder();
	}
    
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
     
    }
    
    @Override
    protected void configure(HttpSecurity http) throws Exception {
    	http
        .httpBasic().disable();
    }
}