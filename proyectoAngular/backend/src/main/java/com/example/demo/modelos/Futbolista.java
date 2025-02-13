package com.example.demo.modelos;

import java.io.Serializable;
import jakarta.persistence.*;
import java.util.Date;
import java.util.List;


/**
 * The persistent class for the futbolista database table.
 * 
 */
@Entity
@NamedQuery(name="Futbolista.findAll", query="SELECT f FROM Futbolista f")
public class Futbolista implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	private int id;

	private int edad;

	private String equipo;

	@Temporal(TemporalType.DATE)
	@Column(name="fecha_nac")
	private Date fechaNac;

	@Column(name="id_usuario")
	private int idUsuario;

	private String nacionalidad;

	private String nombre;

	//bi-directional many-to-many association to Posicione
	@ManyToMany(mappedBy="futbolistas")
	private List<Posicione> posiciones;

	public Futbolista() {
	}

	public int getId() {
		return this.id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getEdad() {
		return this.edad;
	}

	public void setEdad(int edad) {
		this.edad = edad;
	}

	public String getEquipo() {
		return this.equipo;
	}

	public void setEquipo(String equipo) {
		this.equipo = equipo;
	}

	public Date getFechaNac() {
		return this.fechaNac;
	}

	public void setFechaNac(Date fechaNac) {
		this.fechaNac = fechaNac;
	}

	public int getIdUsuario() {
		return this.idUsuario;
	}

	public void setIdUsuario(int idUsuario) {
		this.idUsuario = idUsuario;
	}

	public String getNacionalidad() {
		return this.nacionalidad;
	}

	public void setNacionalidad(String nacionalidad) {
		this.nacionalidad = nacionalidad;
	}

	public String getNombre() {
		return this.nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public List<Posicione> getPosiciones() {
		return this.posiciones;
	}

	public void setPosiciones(List<Posicione> posiciones) {
		this.posiciones = posiciones;
	}

}