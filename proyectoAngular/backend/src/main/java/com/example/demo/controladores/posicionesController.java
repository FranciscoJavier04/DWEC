package com.example.demo.controladores;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.example.demo.modelos.PosicionesAsignada;
import com.example.demo.repositorios.futbolistaRepositorio;

import com.example.demo.repositorios.posicionesAsignadasRepositorio;



@CrossOrigin
@RestController
@RequestMapping("/futbolista")
public class posicionesController {
	
	@Autowired
	futbolistaRepositorio futRep;

	@Autowired
	posicionesAsignadasRepositorio posRep;
	
	@GetMapping("/obt")
	public List<DTO>getPosiciones(){
		List<DTO> listaPosDTO=new ArrayList<DTO>();
		List<PosicionesAsignada> listaPos=posRep.findAll();
		
		for(PosicionesAsignada h:listaPos) {
			DTO dtoPos=new DTO();
			dtoPos.put("id", h.getId());
			dtoPos.put("Futbolista", h.getFutbolista().getNombre());
			dtoPos.put("Posicion", h.getPosicion().getNombre());
			
			listaPosDTO.add(dtoPos);
		}
		
		
		return listaPosDTO ;
	}
}
