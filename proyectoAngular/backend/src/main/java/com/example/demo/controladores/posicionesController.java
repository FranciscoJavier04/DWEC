package com.example.demo.controladores;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.modelos.PosicionesAsignada;
import com.example.demo.repositorios.futbolistaRepositorio;

import com.example.demo.repositorios.posicionesAsignadasRepositorio;

import jakarta.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/futbolista")
public class posicionesController {

	@Autowired
	futbolistaRepositorio futRep;

	@Autowired
	posicionesAsignadasRepositorio posRep;

	@GetMapping("/obt")
	public List<DTO> getPosiciones() {
		List<DTO> listaPosDTO = new ArrayList<DTO>();
		List<PosicionesAsignada> listaPos = posRep.findAll();

		for (PosicionesAsignada h : listaPos) {
			DTO dtoPos = new DTO();
			dtoPos.put("id", h.getId());
			dtoPos.put("Futbolista", h.getFutbolista().getNombre());
			dtoPos.put("Posicion", h.getPosicion().getNombre());

			listaPosDTO.add(dtoPos);
		}

		return listaPosDTO;
	}

	@DeleteMapping(path = "/borrar", consumes = MediaType.APPLICATION_JSON_VALUE)
	public DTO deletePosicion(@RequestBody DTO soloid, HttpServletRequest request) {
		DTO dtoRespuesta = new DTO();

		PosicionesAsignada posicion = posRep.findById(Integer.parseInt(soloid.get("id").toString()));
		if (posicion != null) {
			posRep.delete(posicion);
			dtoRespuesta.put("borrado", "ok");
		} else {
			dtoRespuesta.put("borrado", "fail");
		}

		return dtoRespuesta;
	}

	@GetMapping("/posicionesPorFutbolista/{futbolista_id}")
	public List<DTO> getPosicionesByFutbolistaId(@PathVariable("futbolista_id") int futbolista_id) {
		List<DTO> listaPosDTO = new ArrayList<DTO>();

		// Buscar las posiciones asignadas para el futbolista
		List<PosicionesAsignada> listaPos = posRep.findByFutbolistaId(futbolista_id);

		if (listaPos != null) {
			for (PosicionesAsignada h : listaPos) {
				DTO dtoPos = new DTO();
				dtoPos.put("id", h.getId());
				dtoPos.put("Futbolista", h.getFutbolista().getNombre());
				dtoPos.put("Posicion", h.getPosicion().getNombre());

				listaPosDTO.add(dtoPos);
			}
		}

		return listaPosDTO;
	}

}
