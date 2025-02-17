package com.example.demo.repositorios;

import java.io.Serializable;
import java.util.List;

import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.modelos.Club;
import com.example.demo.modelos.Futbolista;






public interface clubRepositorio extends JpaRepository<Club, Serializable> {

		@Bean
		public abstract List<Club> findAll();
		public abstract Club findById(int id);
		public abstract Club findByNombre(String userName);
		
		@Transactional
		public abstract void delete(Club c);
		
		@Transactional
		public abstract void deleteById(int id);
		
		@Transactional
		public abstract Club save (Club c);
}
