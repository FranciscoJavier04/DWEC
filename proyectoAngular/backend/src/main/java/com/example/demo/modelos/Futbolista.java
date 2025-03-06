package com.example.demo.modelos;

import java.io.Serializable;
import jakarta.persistence.*;
import java.util.Date;

/**
 * The persistent class for the futbolista database table.
 */
@Entity
@NamedQuery(name = "Futbolista.findAll", query = "SELECT f FROM Futbolista f")
public class Futbolista implements Serializable {
	private static final long serialVersionUID = 1L;

	public Futbolista(int edad, Date fechaNac, Usuario usuario, String nacionalidad, String nombre, Club club,
			byte[] imagen) {
		super();
		this.edad = edad;
		this.fechaNac = fechaNac;
		this.usuario = usuario;
		this.nacionalidad = nacionalidad;
		this.nombre = nombre;
		this.club = club;
		this.imagen = imagen;

	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	private int edad;

	@Temporal(TemporalType.DATE)
	@Column(name = "fecha_nac")
	private Date fechaNac;

	private String nacionalidad;

	private String nombre;

	@Lob
	@Column(columnDefinition = "LONGBLOB")
	private byte[] imagen;

	@ManyToOne
	@JoinColumn(name = "id_usuario")
	private Usuario usuario;

	@ManyToOne
	@JoinColumn(name = "id_club")
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

	public Usuario getUsuario() {
		return this.usuario;
	}

	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
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

	public byte[] getImagen() {
		return imagen;
	}

	public void setImagen(byte[] imagen) {
		this.imagen = imagen;
	}

	public Club getClub() {
		return this.club;
	}

	public void setClub(Club club) {
		this.club = club;
	}
}
