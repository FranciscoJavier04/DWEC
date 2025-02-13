package com.example.demo.modelos;

import java.io.Serializable;
import jakarta.persistence.*;


/**
 * The persistent class for the usuario database table.
 * 
 */
@Entity
@NamedQuery(name="Usuario.findAll", query="SELECT u FROM Usuario u")
public class Usuario implements Serializable {
	private static final long serialVersionUID = 1L;

	private byte admin;

	private String aficiones;

	private String apellidos;

	private String email;

	@Id
	private int id;

	private String nombre;

	private String pais;

	private String password;

	private String sexo;

	public Usuario() {
	}

	public byte getAdmin() {
		return this.admin;
	}

	public void setAdmin(byte admin) {
		this.admin = admin;
	}

	public String getAficiones() {
		return this.aficiones;
	}

	public void setAficiones(String aficiones) {
		this.aficiones = aficiones;
	}

	public String getApellidos() {
		return this.apellidos;
	}

	public void setApellidos(String apellidos) {
		this.apellidos = apellidos;
	}

	public String getEmail() {
		return this.email;
	}

	public void setEmail(String email) {
		this.email = email;
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

	public String getPais() {
		return this.pais;
	}

	public void setPais(String pais) {
		this.pais = pais;
	}

	public String getPassword() {
		return this.password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getSexo() {
		return this.sexo;
	}

	public void setSexo(String sexo) {
		this.sexo = sexo;
	}

}