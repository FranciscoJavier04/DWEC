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

import com.example.demo.JwtSecurity.AutenticadorJWT;

import com.example.demo.modelos.Usuario;
import com.example.demo.repositorios.usuarioRepositorio;

import jakarta.persistence.Id;
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

	@PostMapping(path = "/obtener1", consumes = MediaType.APPLICATION_JSON_VALUE)
	public DTO getUsuario(@RequestBody DTO soloid, HttpServletRequest request) {
		DTO dtoUsuario = new DTO();
		Usuario u = usuRep.findById(Integer.parseInt(soloid.get("id").toString()));

		if (u != null) {
			dtoUsuario.put("id", u.getId());
			dtoUsuario.put("nombre", u.getNombre());
			dtoUsuario.put("apellidos", u.getApellidos());
			dtoUsuario.put("email", u.getEmail());
			dtoUsuario.put("password", u.getPassword());
			dtoUsuario.put("sexo", u.getSexo());
			dtoUsuario.put("pais", u.getPais());
			dtoUsuario.put("aficiones", u.getAficiones());
		} else {
			dtoUsuario.put("result", "fail");
		}

		return dtoUsuario;
	}

	@DeleteMapping(path = "/borrar1", consumes = MediaType.APPLICATION_JSON_VALUE)
	public DTO deleteUsuario(@RequestBody DTO soloid, HttpServletRequest request) {
		DTO dtoUsuario = new DTO();

		Usuario u = usuRep.findById(Integer.parseInt(soloid.get("id").toString()));
		if (u != null) {
			usuRep.delete(u);
			dtoUsuario.put("borrado", "ok");
		} else {
			dtoUsuario.put("borrado", "fail");
		}

		return dtoUsuario;
	}

	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping(path = "/anadirnuevo")

	public void anadirUsuario(@RequestBody DatosAltaUsuario u, HttpServletRequest request) {
		usuRep.save(new Usuario(
				u.admin,
				u.aficiones,
				u.apellidos,
				u.email,
				u.nombre,
				u.pais,
				u.password,
				u.sexo));
	}

	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping(path = "/autentica", consumes = MediaType.APPLICATION_JSON_VALUE)

	public DTO autenticaUsuario(@RequestBody DatosAutenticaUsuario datos, HttpServletRequest request,
			HttpServletResponse response) {
		DTO dto = new DTO();
		dto.put("result", "fail");
		Usuario usuarioAutenticado = usuRep.findByEmailAndPassword(datos.email, datos.password);
		if (usuarioAutenticado != null) {
			dto.put("result", "ok");
			dto.put("jwt", AutenticadorJWT.codificaJWT(usuarioAutenticado));

			Cookie cook = new Cookie("jwt", AutenticadorJWT.codificaJWT(usuarioAutenticado));
			cook.setMaxAge(-1);
			response.addCookie(cook);
		}

		return dto;
	}

	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping(path = "/quieneres")

	public DTO getAutenticado(HttpServletRequest request) {
		DTO dtoUsuario = new DTO();
		dtoUsuario.put("result", "fail");
		Cookie[] c = request.getCookies();
		int idUsuarioAutenticado = -1;
		for (Cookie co : c) {
			if (co.getName().equals("jwt")) {
				idUsuarioAutenticado = AutenticadorJWT.getIdUsuarioDesdeJWT(co.getValue());

			}

		}

		Usuario u = usuRep.findById(idUsuarioAutenticado);
		if (u != null) {
			dtoUsuario.put("id", u.getId());
			dtoUsuario.put("nombre", u.getNombre());
			dtoUsuario.put("result", "ok");
		}

		return dtoUsuario;
	}

	static class DatosAutenticaUsuario {

		String email;
		String password;

		public DatosAutenticaUsuario(String email, String password) {
			super();
			this.email = email;
			this.password = password;
		}

	}

	static class DatosAltaUsuario {

		byte admin;

		String aficiones;

		String apellidos;

		String email;

		String nombre;

		String pais;

		String password;

		String sexo;

		public DatosAltaUsuario(byte admin, String aficiones, String apellidos, String email, String nombre,
				String pais, String password, String sexo) {
			super();
			this.admin = admin;
			this.aficiones = aficiones;
			this.apellidos = apellidos;
			this.email = email;
			this.nombre = nombre;
			this.pais = pais;
			this.password = password;
			this.sexo = sexo;
		}

	}

}