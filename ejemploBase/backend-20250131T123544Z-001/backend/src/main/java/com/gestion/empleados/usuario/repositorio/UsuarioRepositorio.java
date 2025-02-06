package com.gestion.empleados.usuario.repositorio;

import java.io.Serializable;

import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gestion.empleados.usuario.Usuario;

@Repository
public interface UsuarioRepositorio extends JpaRepository<Usuario, Serializable>{

	@Bean
	public abstract Usuario findByNombreAndPass(String nombre, String pass);

	

}
