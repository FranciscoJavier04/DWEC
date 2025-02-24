package com.example.demo.repositorios;

import java.io.Serializable;
import java.util.List;

import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.modelos.Posicione;

public interface posicionRepositorio extends JpaRepository<Posicione, Serializable> {

	@Bean
	public abstract List<Posicione> findAll();

	public abstract Posicione findById(int id);

	public abstract Posicione findByNombre(String userName);

	@Transactional
	public abstract void delete(Posicione p);

	@Transactional
	public abstract void deleteById(int id);

	@Transactional
	public abstract Posicione save(Posicione p);
}
