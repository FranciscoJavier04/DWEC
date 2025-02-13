package com.example.demo.controladores;

import java.util.Date;
import java.util.ArrayList;
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

import com.example.demo.modelos.Usuario;
import com.example.demo.repositorios.usuarioRepositorio;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.xml.bind.DatatypeConverter;

@CrossOrigin(origins = "http:localhost:4200")
@RestController
@RequestMapping("/usuario")

public class usuarioController {

	@Autowired
	usuarioRepositorio usuRep;

	@GetMapping("/obtener")

	public List<DTO> getUsuarios() {
		List<DTO> listaUsuariosDTO = new ArrayList<DTO>();
		List<Usuario> usuarios = usuRep.findAll();
		for (Usuario u : usuarios) {
			DTO dtoUsuario = new DTO();
			dtoUsuario.put("id", u.getId());
			dtoUsuario.put("nombre", u.getNombre());
			dtoUsuario.put("apellidos", u.getApellidos());
			dtoUsuario.put("email", u.getEmail());
			dtoUsuario.put("password", u.getPassword());
			dtoUsuario.put("sexo", u.getSexo());
			dtoUsuario.put("pais", u.getPais());
			dtoUsuario.put("aficiones", u.getAficiones());


			listaUsuariosDTO.add(dtoUsuario);
		}

		return listaUsuariosDTO;

	}

}