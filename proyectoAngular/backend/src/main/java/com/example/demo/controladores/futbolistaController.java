package com.example.demo.controladores;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.modelos.Club;
import com.example.demo.modelos.Futbolista;

import com.example.demo.modelos.Usuario;
import com.example.demo.repositorios.futbolistaRepositorio;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.xml.bind.DatatypeConverter;

@RestController
@RequestMapping("/futbolista")

public class futbolistaController {
	@Autowired
	futbolistaRepositorio futRep;

	@GetMapping("/obtener")
	public List<DTO> getFutbolistas() {
		List<DTO> listaFutbolistasDTO = new ArrayList<>();
		List<Futbolista> futbolistas = futRep.findAll();

		for (Futbolista f : futbolistas) {
			DTO dtoFutbolista = new DTO();
			dtoFutbolista.put("id", f.getId());
			dtoFutbolista.put("nombre", f.getNombre());
			dtoFutbolista.put("fecha_nac", f.getFechaNac().toString());
			dtoFutbolista.put("nacionalidad", f.getNacionalidad());
			dtoFutbolista.put("edad", f.getEdad());
			dtoFutbolista.put("Club", f.getClub().getNombre());
			dtoFutbolista.put("Usuario", f.getUsuario().getNombre());

			if (f.getImagen() != null) {
				dtoFutbolista.put("imagen", DatatypeConverter.printBase64Binary(f.getImagen()));
			} else {
				dtoFutbolista.put("imagen", "");
			}

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
		futRep.save(new Futbolista(f.edad, f.fechaNac, f.usuario, f.nacionalidad, f.nombre, f.club,
				DatatypeConverter.parseBase64Binary(f.imagen)));
	}

	static class DatosAltaFutbolista {

		int edad;

		Date fechaNac;

		String nacionalidad;

		String nombre;

		Usuario usuario;

		Club club;

		String imagen;

		public DatosAltaFutbolista(int edad, Date fechaNac, String nacionalidad, String nombre,
				String imagen, Club club, Usuario usuario) {
			super();
			this.edad = edad;
			this.fechaNac = fechaNac;
			this.nacionalidad = nacionalidad;
			this.nombre = nombre;
			this.imagen = imagen;
			this.club = club;
			this.usuario = usuario;
		}

	}

	@GetMapping("/obtenerPorUsuario")
	public List<DTO> getFutbolistasPorUsuario(@RequestParam int usuarioId) {
		List<DTO> listaFutbolistasDTO = new ArrayList<>();
		List<Futbolista> futbolistas = futRep.findByUsuarioId(usuarioId);

		for (Futbolista f : futbolistas) {
			DTO dtoFutbolista = new DTO();
			dtoFutbolista.put("id", f.getId());
			dtoFutbolista.put("nombre", f.getNombre());
			dtoFutbolista.put("fecha_nac", f.getFechaNac().toString());
			dtoFutbolista.put("nacionalidad", f.getNacionalidad());
			dtoFutbolista.put("edad", f.getEdad());
			dtoFutbolista.put("Club", f.getClub().getNombre());
			dtoFutbolista.put("Usuario", f.getUsuario().getNombre());

			if (f.getImagen() != null) {
				dtoFutbolista.put("imagen", DatatypeConverter.printBase64Binary(f.getImagen()));
			} else {
				dtoFutbolista.put("imagen", "");
			}

			listaFutbolistasDTO.add(dtoFutbolista);
		}

		return listaFutbolistasDTO;
	}

}
