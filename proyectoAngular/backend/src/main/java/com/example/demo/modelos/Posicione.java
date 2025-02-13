package com.example.demo.modelos;

import java.io.Serializable;
import jakarta.persistence.*;
import java.util.List;


/**
 * The persistent class for the posicione database table.
 * 
 */
@Entity
@NamedQuery(name="Posicione.findAll", query="SELECT p FROM Posicione p")
public class Posicione implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	private int id;

	private String nombre;

	//bi-directional many-to-many association to Futbolista
	@ManyToMany
	@JoinTable(
		name="posiciones_asignadas"
		, joinColumns={
			@JoinColumn(name="posicion_id")
			}
		, inverseJoinColumns={
			@JoinColumn(name="futbolista_id")
			}
		)
	private List<Futbolista> futbolistas;

	public Posicione() {
	}

	public int getId() {
		return this.id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getNombre() {
		return this.nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public List<Futbolista> getFutbolistas() {
		return this.futbolistas;
	}

	public void setFutbolistas(List<Futbolista> futbolistas) {
		this.futbolistas = futbolistas;
	}

}