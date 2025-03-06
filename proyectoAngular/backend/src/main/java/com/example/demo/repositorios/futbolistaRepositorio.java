package com.example.demo.repositorios;

import java.io.Serializable;
import java.util.List;

import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.modelos.Futbolista;

public interface futbolistaRepositorio extends JpaRepository<Futbolista, Serializable> {

	@Bean
	public abstract List<Futbolista> findAll();

	public abstract Futbolista findById(int id);

	public abstract Futbolista findByNombre(String userName);

	public List<Futbolista> findByUsuarioId(int usuarioId);

	@Transactional
	public abstract void delete(Futbolista f);

	@Transactional
	public abstract void deleteById(int id);

	@Transactional
	public abstract Futbolista save(Futbolista f);
}
