package com.example.demo.controladores;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.modelos.Club;

import com.example.demo.repositorios.clubRepositorio;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.xml.bind.DatatypeConverter;

@RestController
@RequestMapping("/club")
public class clubController {

	@Autowired
	clubRepositorio clubRep;

	@GetMapping("/obtener")
	public List<DTO> getClubs() {
		List<DTO> listaClubsDTO = new ArrayList<>();
		List<Club> clubs = clubRep.findAll();

		for (Club c : clubs) {
			DTO dtoClub = new DTO();
			dtoClub.put("id", c.getId());
			dtoClub.put("nombre", c.getNombre());
			dtoClub.put("fundacion", c.getFundacion());
			dtoClub.put("pais", c.getPais());
			dtoClub.put("estadio", c.getEstadio());

			if (c.getImagen() != null) {
				dtoClub.put("imagen", DatatypeConverter.printBase64Binary(c.getImagen()));
			} else {
				dtoClub.put("imagen", "");
			}
			listaClubsDTO.add(dtoClub);
		}

		return listaClubsDTO;
	}

	@PostMapping(path = "/obtener1", consumes = MediaType.APPLICATION_JSON_VALUE)
	public DTO getClub(@RequestBody DTO soloid, HttpServletRequest request) {
		DTO dtoClub = new DTO();
		Club c = clubRep.findById(Integer.parseInt(soloid.get("id").toString()));

		if (c != null) {
			dtoClub.put("id", c.getId());
			dtoClub.put("nombre", c.getNombre());
			dtoClub.put("fundacion", c.getFundacion());
			dtoClub.put("pais", c.getPais());
			dtoClub.put("estadio", c.getEstadio());
		} else {
			dtoClub.put("result", "fail");
		}

		return dtoClub;
	}

	@DeleteMapping(path = "/borrar1", consumes = MediaType.APPLICATION_JSON_VALUE)
	public DTO deleteClub(@RequestBody DTO soloid, HttpServletRequest request) {
		DTO dtoClub = new DTO();

		Club c = clubRep.findById(Integer.parseInt(soloid.get("id").toString()));
		if (c != null) {
			clubRep.delete(c);
			dtoClub.put("borrado", "ok");
		} else {
			dtoClub.put("borrado", "fail");
		}

		return dtoClub;
	}

	@PostMapping(path = "/anadirnuevo")
	public void anadirClub(@RequestBody DatosAltaClub clubData, HttpServletRequest request) {
		Club nuevoClub = new Club(clubData.estadio, clubData.fundacion, clubData.nombre, clubData.pais,
				DatatypeConverter.parseBase64Binary(clubData.imagen));

		clubRep.save(nuevoClub);
	}

	static class DatosAltaClub {

		String estadio;

		int fundacion;

		String nombre;

		String pais;

		String imagen;

		public DatosAltaClub(String estadio, int fundacion, String nombre, String pais, String imagen) {
			super();
			this.estadio = estadio;
			this.fundacion = fundacion;
			this.nombre = nombre;
			this.pais = pais;
			this.imagen = imagen;
		}

	}

}
