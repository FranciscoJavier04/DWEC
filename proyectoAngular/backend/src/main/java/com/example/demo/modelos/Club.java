package com.example.demo.modelos;

import java.io.Serializable;
import jakarta.persistence.*;
import java.util.List;

/**
 * The persistent class for the club database table.
 */
@Entity
@NamedQuery(name = "Club.findAll", query = "SELECT c FROM Club c")
public class Club implements Serializable {
	private static final long serialVersionUID = 1L;

	public Club(String estadio, int fundacion, String nombre, String pais, byte[] imagen) {
		super();
		this.estadio = estadio;
		this.fundacion = fundacion;
		this.nombre = nombre;
		this.pais = pais;
		this.imagen = imagen;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	private String estadio;
	private int fundacion;
	private String nombre;
	private String pais;

	@Lob
	@Column(columnDefinition = "LONGBLOB")
	private byte[] imagen;

	// bi-directional many-to-one association to Futbolista
	@OneToMany(mappedBy = "club", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<Futbolista> futbolistas;

	public Club() {
	}

	public int getId() {
		return this.id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getEstadio() {
		return this.estadio;
	}

	public void setEstadio(String estadio) {
		this.estadio = estadio;
	}

	public int getFundacion() {
		return this.fundacion;
	}

	public void setFundacion(int fundacion) {
		this.fundacion = fundacion;
	}

	public String getNombre() {
		return this.nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getPais() {
		return this.pais;
	}

	public void setPais(String pais) {
		this.pais = pais;
	}

	public byte[] getImagen() {
		return imagen;
	}

	public void setImagen(byte[] imagen) {
		this.imagen = imagen;
	}

	public List<Futbolista> getFutbolistas() {
		return this.futbolistas;
	}

	public void setFutbolistas(List<Futbolista> futbolistas) {
		this.futbolistas = futbolistas;
	}

	public Futbolista addFutbolista(Futbolista futbolista) {
		getFutbolistas().add(futbolista);
		futbolista.setClub(this);
		return futbolista;
	}

	public Futbolista removeFutbolista(Futbolista futbolista) {
		getFutbolistas().remove(futbolista);
		futbolista.setClub(null);
		return futbolista;
	}
}
