package com.gestion.empleados.usuario.controlador;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gestion.empleados.JWTsecurity.AutenticadorJWT;
import com.gestion.empleados.controlador.DTO;
import com.gestion.empleados.excepciones.ResourceNotFoundException;
import com.gestion.empleados.modelo.Empleado;
import com.gestion.empleados.usuario.*;
import com.gestion.empleados.usuario.controlador.UsuarioControlador.DatosAutenticaUsuario;
import com.gestion.empleados.usuario.repositorio.UsuarioRepositorio;

import javax.servlet.http.*;

@RestController
@RequestMapping("/usuarios/")
@CrossOrigin
public class UsuarioControlador<DatosAutenticaUsuario> {

	@Autowired
	private UsuarioRepositorio repositorio;

	// este metodo sirve para listar todos los Usuario
	@GetMapping("/usuarios")
	public List<Usuario> listarTodosLosUsuario() {
		return repositorio.findAll();
	}

	// este metodo sirve para guardar el Usuario
	
	 @PostMapping("/registra")
	 public Usuario guardarUsuario(@RequestBody Usuario empleado,HttpServletResponse response) {
	 	 return repositorio.save(empleado);
	  }
	 

	

	// este metodo sirve para buscar un Usuario
	@GetMapping("/usuario/{id}")
	public ResponseEntity<Usuario> obtenerUsuarioPorId(@PathVariable Long id) {
		Usuario empleado = repositorio.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("No existe el usuario con el ID : " + id));
		return ResponseEntity.ok(empleado);
	}

	// este metodo sirve para actualizar Usuario
	@PutMapping("/usuario/{id}")
	public ResponseEntity<Usuario> actualizarUsuario(@PathVariable Long id, @RequestBody Usuario detallesUsuario) {
		Usuario empleado = repositorio.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("No existe el Usuario con el ID : " + id));

		empleado.setNombre(detallesUsuario.getNombre());
		empleado.setPass(detallesUsuario.getPass());

		Usuario UsuarioActualizado = repositorio.save(empleado);
		return ResponseEntity.ok(UsuarioActualizado);
	}

	// este metodo sirve para eliminar un Usuario
	@DeleteMapping("/usuario/{id}")
	public ResponseEntity<Map<String, Boolean>> eliminarUsuario(@PathVariable Long id) {
		Usuario empleado = repositorio.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("No existe el Usuario con el ID : " + id));

		repositorio.delete(empleado);
		Map<String, Boolean> respuesta = new HashMap<>();
		respuesta.put("eliminar", Boolean.TRUE);
		return ResponseEntity.ok(respuesta);
	}

	@PostMapping(path = "/autentica", consumes = MediaType.APPLICATION_JSON_VALUE)
	public DTO autenticaUsuario(@RequestBody DatosAutenticaUsuario datos,
			HttpServletResponse response) {

		DTO dto = new DTO();
		dto.put("result", "fail");
		Usuario uAutenticado = repositorio.findByNombreAndPass(datos.nombre, datos.pass);
		if (uAutenticado != null) {
			dto.put("result", "bien");

			dto.put("jwt", AutenticadorJWT.codificaJWT(uAutenticado));
			Cookie cook = new Cookie("jwt", AutenticadorJWT.codificaJWT(uAutenticado));
			System.out.println(response.toString());
			cook.setMaxAge(-1);
			cook.setPath("/");
			response.addCookie(cook);

		}
		return dto;
	}

	static class DatosAutenticaUsuario {
		String nombre;
		String pass;

		public DatosAutenticaUsuario(String nombre, String pass) {
			super();

			this.nombre = nombre;
			this.pass = pass;
		}
	}

}
