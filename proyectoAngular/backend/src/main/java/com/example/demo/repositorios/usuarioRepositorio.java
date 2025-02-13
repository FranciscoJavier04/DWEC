package com.example.demo.repositorios;

import java.io.Serializable;
import java.util.List;

import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.modelos.Usuario;





public interface usuarioRepositorio extends JpaRepository<Usuario, Serializable> {

		@Bean
		public abstract List<Usuario> findAll();
		public abstract Usuario findById(int id);
		public abstract Usuario findByNombre(String userName);
		public abstract Usuario findByEmailAndPassword(String userName,String pass);
		
		@Transactional
		public abstract void delete(Usuario u);
		
		@Transactional
		public abstract void deleteById(int id);
		
		@Transactional
		public abstract Usuario save (Usuario u);
}
