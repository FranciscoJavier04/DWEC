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
	
	

	public Futbolista(int edad, Date fechaNac, int idUsuario, String nacionalidad, String nombre, Club club) {
		super();
		this.edad = edad;
		this.fechaNac = fechaNac;
		this.idUsuario = idUsuario;
		this.nacionalidad = nacionalidad;
		this.nombre = nombre;
		this.club = club;
	}

	@Id
	private int id;

	private int edad;
	

	@Temporal(TemporalType.DATE)
	@Column(name="fecha_nac")
	private Date fechaNac;

	@Column(name="id_usuario")
	private int idUsuario;

	private String nacionalidad;

	private String nombre;

	//bi-directional many-to-one association to Club
	@ManyToOne
	@JoinColumn(name="id_club")
	private Club club;

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

	public Club getClub() {
		return this.club;
	}

	public void setClub(Club club) {
		this.club = club;
	}

}