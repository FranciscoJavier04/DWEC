package com.example.demo.repositorios;

import java.io.Serializable;
import java.util.List;

import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.modelos.Futbolista;
import com.example.demo.modelos.Posicione;
import com.example.demo.modelos.PosicionesAsignada;

public interface posicionesAsignadasRepositorio extends JpaRepository<PosicionesAsignada, Serializable> {

	@Bean
	public abstract List<PosicionesAsignada> findAll();

	public abstract PosicionesAsignada findById(int id);

	public abstract List<PosicionesAsignada> findByFutbolistaId(int futbolista_id);

	public abstract List<Futbolista> findByPosicion(Posicione p);

	@Transactional
	public abstract void deleteById(int id);

	@Transactional
	public abstract PosicionesAsignada save(PosicionesAsignada p);
}
