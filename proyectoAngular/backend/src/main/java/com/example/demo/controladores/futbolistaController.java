package com.example.demo.controladores;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.controladores.usuarioController.DatosAltaUsuario;
import com.example.demo.modelos.Club;
import com.example.demo.modelos.Futbolista;
import com.example.demo.modelos.Posicione;
import com.example.demo.modelos.Usuario;
import com.example.demo.repositorios.futbolistaRepositorio;

import jakarta.persistence.Column;
import jakarta.persistence.Id;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import jakarta.servlet.http.HttpServletRequest;

@CrossOrigin(origins = "http:localhost:4200")
@RestController
@RequestMapping("/futbolista")

public class futbolistaController {
	@Autowired
	futbolistaRepositorio futRep;

	@GetMapping("/obtener")
	public List<DTO> getFutbolistas() {
		List<DTO> listaFutbolistasDTO = new ArrayList<DTO>();
		List<Futbolista> futbolistas = futRep.findAll();

		for (Futbolista f : futbolistas) {
			DTO dtoFutbolista = new DTO();
			dtoFutbolista.put("id", f.getId());
			dtoFutbolista.put("nombre", f.getNombre());
			dtoFutbolista.put("fecha_nac", f.getFechaNac().toString());
			dtoFutbolista.put("nacionalidad", f.getNacionalidad());
			dtoFutbolista.put("edad", f.getEdad());

			listaFutbolistasDTO.add(dtoFutbolista);
		}

		return listaFutbolistasDTO;
	}

	@PostMapping(path = "/obtener1", consumes = MediaType.APPLICATION_JSON_VALUE)
	public DTO getFutbolista(@RequestBody DTO soloid, HttpServletRequest request) {
		DTO dtoFutbolista = new DTO();
		Futbolista f = futRep.findById(Integer.parseInt(soloid.get("id").toString()));

		if (f != null) {
			dtoFutbolista.put("id", f.getId());
			dtoFutbolista.put("nombre", f.getNombre());
			dtoFutbolista.put("fecha_nac", f.getFechaNac().toString());
			dtoFutbolista.put("nacionalidad", f.getNacionalidad());
			dtoFutbolista.put("edad", f.getEdad());
		} else {
			dtoFutbolista.put("result", "fail");
		}

		return dtoFutbolista;
	}

	@DeleteMapping(path = "/borrar1", consumes = MediaType.APPLICATION_JSON_VALUE)
	public DTO deleteFutbolista(@RequestBody DTO soloid, HttpServletRequest request) {
		DTO dtoFutbolista = new DTO();

		Futbolista f = futRep.findById(Integer.parseInt(soloid.get("id").toString()));
		if (f != null) {
			futRep.delete(f);
			dtoFutbolista.put("borrado", "ok");
		} else {
			dtoFutbolista.put("borrado", "fail");
		}

		return dtoFutbolista;
	}

	@PostMapping(path = "/anadirnuevo")

	public void anadirFutbolista(@RequestBody DatosAltaFutbolista f, HttpServletRequest request) {
		futRep.save(new Futbolista(f.edad, f.fechaNac, f.idUsuario, f.nacionalidad, f.nombre,f.club));
	}

	static class DatosAltaFutbolista {

		int edad;



		Date fechaNac;

		int idUsuario;

		String nacionalidad;

		String nombre;
		
		Club club;



		public DatosAltaFutbolista(int edad, Date fechaNac, int idUsuario, String nacionalidad, String nombre,
				Club club) {
			super();
			this.edad = edad;
			this.fechaNac = fechaNac;
			this.idUsuario = idUsuario;
			this.nacionalidad = nacionalidad;
			this.nombre = nombre;
			this.club = club;
		}

		

	}
}
